// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title CrowdfundingToken
 * @notice Implementation of the platform's governance and reward token
 * @dev Extends ERC20 with voting capabilities, burning, pausing, and role-based access control
 */
contract CrowdfundingToken is 
    ERC20, 
    ERC20Permit, 
    ERC20Votes, 
    ERC20Burnable, 
    Pausable, 
    AccessControl,
    ReentrancyGuard 
{
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    // Token distribution parameters
    uint256 public constant INITIAL_SUPPLY = 100_000_000 * 10**18; // 100 million tokens
    uint256 public constant MAX_SUPPLY = 1_000_000_000 * 10**18; // 1 billion tokens
    
    // Vesting and lockup parameters
    mapping(address => uint256) public vestingSchedule;
    mapping(address => uint256) public lockedTokens;
    
    // Events
    event TokensLocked(address indexed account, uint256 amount, uint256 unlockTime);
    event TokensUnlocked(address indexed account, uint256 amount);
    event VestingScheduleCreated(address indexed beneficiary, uint256 amount, uint256 duration);
    event VestedTokensClaimed(address indexed beneficiary, uint256 amount);

    constructor() 
        ERC20("Crowdfunding Token", "CROWD") 
        ERC20Permit("Crowdfunding Token") 
    {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        
        // Mint initial supply to deployer
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    // Required override for ERC20Votes
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20, ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount) internal override(ERC20, ERC20Votes) {
        require(totalSupply() + amount <= MAX_SUPPLY, "Exceeds max supply");
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount) internal override(ERC20, ERC20Votes) {
        super._burn(account, amount);
    }

    /**
     * @notice Mints new tokens to the specified address
     * @dev Only callable by accounts with MINTER_ROLE
     * @param to Address to receive the minted tokens
     * @param amount Amount of tokens to mint
     */
    function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    /**
     * @notice Pauses all token transfers
     * @dev Only callable by accounts with PAUSER_ROLE
     */
    function pause() external onlyRole(PAUSER_ROLE) {
        _pause();
    }

    /**
     * @notice Unpauses all token transfers
     * @dev Only callable by accounts with PAUSER_ROLE
     */
    function unpause() external onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    /**
     * @notice Creates a vesting schedule for a beneficiary
     * @param beneficiary Address of the beneficiary
     * @param amount Total amount of tokens to be vested
     * @param duration Duration of the vesting period in seconds
     */
    function createVestingSchedule(
        address beneficiary,
        uint256 amount,
        uint256 duration
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(beneficiary != address(0), "Invalid beneficiary");
        require(amount > 0, "Amount must be positive");
        require(duration > 0, "Duration must be positive");
        require(vestingSchedule[beneficiary] == 0, "Schedule exists");

        vestingSchedule[beneficiary] = block.timestamp + duration;
        lockedTokens[beneficiary] = amount;

        _transfer(msg.sender, beneficiary, amount);
        emit VestingScheduleCreated(beneficiary, amount, duration);
    }

    /**
     * @notice Claims vested tokens
     * @dev Transfers vested tokens to the caller based on the vesting schedule
     */
    function claimVestedTokens() external nonReentrant {
        uint256 vestingEnd = vestingSchedule[msg.sender];
        require(vestingEnd > 0, "No vesting schedule");
        require(block.timestamp >= vestingEnd, "Tokens still vesting");

        uint256 amount = lockedTokens[msg.sender];
        require(amount > 0, "No tokens to claim");

        lockedTokens[msg.sender] = 0;
        vestingSchedule[msg.sender] = 0;

        emit VestedTokensClaimed(msg.sender, amount);
    }

    /**
     * @notice Locks tokens for a specified duration
     * @param amount Amount of tokens to lock
     * @param duration Lock duration in seconds
     */
    function lockTokens(uint256 amount, uint256 duration) external nonReentrant {
        require(amount > 0, "Amount must be positive");
        require(duration > 0, "Duration must be positive");
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");

        uint256 unlockTime = block.timestamp + duration;
        lockedTokens[msg.sender] += amount;

        emit TokensLocked(msg.sender, amount, unlockTime);
    }

    /**
     * @notice Override of the transfer function to check for locked tokens
     * @param to Recipient address
     * @param amount Amount to transfer
     */
    function transfer(address to, uint256 amount) public override whenNotPaused returns (bool) {
        require(balanceOf(msg.sender) - lockedTokens[msg.sender] >= amount, "Tokens locked");
        return super.transfer(to, amount);
    }

    /**
     * @notice Override of the transferFrom function to check for locked tokens
     * @param from Sender address
     * @param to Recipient address
     * @param amount Amount to transfer
     */
    function transferFrom(address from, address to, uint256 amount) public override whenNotPaused returns (bool) {
        require(balanceOf(from) - lockedTokens[from] >= amount, "Tokens locked");
        return super.transferFrom(from, to, amount);
    }

    /**
     * @notice Returns the amount of unlocked tokens for an account
     * @param account Address to check
     * @return Amount of unlocked tokens
     */
    function unlockedTokens(address account) external view returns (uint256) {
        return balanceOf(account) - lockedTokens[account];
    }

    /**
     * @notice Checks if an account has any locked tokens
     * @param account Address to check
     * @return True if account has locked tokens
     */
    function hasLockedTokens(address account) external view returns (bool) {
        return lockedTokens[account] > 0;
    }

    /**
     * @notice Returns the vesting end time for an account
     * @param account Address to check
     * @return Timestamp when vesting ends
     */
    function getVestingEndTime(address account) external view returns (uint256) {
        return vestingSchedule[account];
    }
}