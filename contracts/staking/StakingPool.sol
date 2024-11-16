// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract StakingPool is ReentrancyGuard, Pausable, AccessControl {
    IERC20 public immutable stakingToken;
    
    // Staking constants
    uint256 public constant REWARD_RATE = 10; // 10% annual return
    uint256 public constant MIN_STAKE_DURATION = 7 days;
    uint256 public constant REWARD_PRECISION = 1e18;
    
    struct Stake {
        uint256 amount;
        uint256 timestamp;
        uint256 lastRewardCalculation;
        uint256 unclaimedRewards;
    }
    
    mapping(address => Stake) public stakes;
    uint256 public totalStaked;
    
    // Events
    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardsClaimed(address indexed user, uint256 amount);
    
    constructor(address _stakingToken) {
        require(_stakingToken != address(0), "Invalid token address");
        stakingToken = IERC20(_stakingToken);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }
    
    function stake(uint256 _amount) external nonReentrant whenNotPaused {
        require(_amount > 0, "Cannot stake 0");
        
        // Update rewards before modifying stake
        _updateRewards(msg.sender);
        
        stakes[msg.sender].amount += _amount;
        stakes[msg.sender].timestamp = block.timestamp;
        totalStaked += _amount;
        
        require(stakingToken.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
        emit Staked(msg.sender, _amount);
    }
    
    function unstake(uint256 _amount) external nonReentrant {
        Stake storage userStake = stakes[msg.sender];
        require(userStake.amount >= _amount, "Insufficient staked amount");
        require(block.timestamp >= userStake.timestamp + MIN_STAKE_DURATION, "Stake still locked");
        
        // Update and claim rewards before unstaking
        _updateRewards(msg.sender);
        _claimRewards();
        
        userStake.amount -= _amount;
        totalStaked -= _amount;
        
        require(stakingToken.transfer(msg.sender, _amount), "Transfer failed");
        emit Unstaked(msg.sender, _amount);
    }
    
    function claimRewards() external nonReentrant {
        _updateRewards(msg.sender);
        _claimRewards();
    }
    
    function calculateRewards(address _user) public view returns (uint256) {
        Stake memory userStake = stakes[_user];
        if (userStake.amount == 0) return 0;
        
        uint256 duration = block.timestamp - userStake.lastRewardCalculation;
        return (userStake.amount * REWARD_RATE * duration) / (365 days * REWARD_PRECISION);
    }
    
    function _updateRewards(address _user) internal {
        Stake storage userStake = stakes[_user];
        uint256 rewards = calculateRewards(_user);
        userStake.unclaimedRewards += rewards;
        userStake.lastRewardCalculation = block.timestamp;
    }
    
    function _claimRewards() internal {
        Stake storage userStake = stakes[msg.sender];
        uint256 rewards = userStake.unclaimedRewards;
        if (rewards > 0) {
            userStake.unclaimedRewards = 0;
            require(stakingToken.transfer(msg.sender, rewards), "Reward transfer failed");
            emit RewardsClaimed(msg.sender, rewards);
        }
    }
    
    // Admin functions
    function pause() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _pause();
    }
    
    function unpause() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _unpause();
    }
    
    // Emergency withdraw function
    function emergencyWithdraw() external nonReentrant {
        Stake storage userStake = stakes[msg.sender];
        require(userStake.amount > 0, "No staked tokens");
        
        uint256 amount = userStake.amount;
        userStake.amount = 0;
        userStake.unclaimedRewards = 0;
        totalStaked -= amount;
        
        require(stakingToken.transfer(msg.sender, amount), "Transfer failed");
        emit Unstaked(msg.sender, amount);
    }
}