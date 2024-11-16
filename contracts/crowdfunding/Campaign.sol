pragma solidity ^0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Campaign is ReentrancyGuard {
    address public creator;
    address public platform;
    uint256 public fundingGoal;
    uint256 public deadline;
    uint256 public fundsRaised;
    string public description;
    bool public isFunded;
    bool public isCompleted;

    mapping(address => uint256) public contributions;

    event ContributionReceived(address contributor, uint256 amount);
    event FundsReleased(address creator, uint256 amount);
    event RefundIssued(address contributor, uint256 amount);

    modifier onlyPlatform() {
        require(msg.sender == platform, "Only platform can call");
        _;
    }

    modifier campaignActive() {
        require(block.timestamp < deadline, "Campaign ended");
        require(!isCompleted, "Campaign completed");
        _;
    }

    constructor(
        address _creator,
        uint256 _fundingGoal,
        uint256 _duration,
        string memory _description,
        address _platform
    ) {
        creator = _creator;
        fundingGoal = _fundingGoal;
        deadline = block.timestamp + _duration;
        description = _description;
        platform = _platform;
    }

    function contribute(
        address contributor
    ) external payable onlyPlatform campaignActive nonReentrant {
        contributions[contributor] += msg.value;
        fundsRaised += msg.value;
        
        if (fundsRaised >= fundingGoal) {
            isFunded = true;
        }
        
        emit ContributionReceived(contributor, msg.value);
    }

    function releaseFunds() external nonReentrant {
        require(isFunded, "Funding goal not reached");
        require(!isCompleted, "Funds already released");
        require(
            msg.sender == creator || msg.sender == platform,
            "Unauthorized"
        );

        isCompleted = true;
        payable(creator).transfer(address(this).balance);
        
        emit FundsReleased(creator, address(this).balance);
    }

    function refund(
        address contributor
    ) external onlyPlatform nonReentrant returns (uint256) {
        require(
            block.timestamp >= deadline && !isFunded,
            "Refund not available"
        );
        
        uint256 amount = contributions[contributor];
        require(amount > 0, "No contribution found");
        
        contributions[contributor] = 0;
        payable(contributor).transfer(amount);
        
        emit RefundIssued(contributor, amount);
        return amount;
    }

    function getDetails()
        external
        view
        returns (
            address _creator,
            uint256 _fundingGoal,
            uint256 _deadline,
            uint256 _fundsRaised,
            bool _isFunded,
            bool _isCompleted
        )
    {
        return (
            creator,
            fundingGoal,
            deadline,
            fundsRaised,
            isFunded,
            isCompleted
        );
    }
}