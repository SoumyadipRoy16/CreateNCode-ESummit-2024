pragma solidity ^0.8.19;

import "./Campaign.sol";
import "../interfaces/ICrowdfundingPlatform.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract CrowdfundingPlatform is ICrowdfundingPlatform, Ownable, ReentrancyGuard {
    mapping(address => bool) public campaigns;
    uint256 public platformFee = 25; // 0.25% fee
    uint256 public constant FEE_DENOMINATOR = 10000;

    constructor() Ownable(msg.sender) {}

    function createCampaign(
        uint256 fundingGoal,
        uint256 duration,
        string memory description
    ) external override returns (address) {
        require(fundingGoal > 0, "Invalid funding goal");
        require(duration > 0, "Invalid duration");

        Campaign newCampaign = new Campaign(
            msg.sender,
            fundingGoal,
            duration,
            description,
            address(this)
        );
        
        campaigns[address(newCampaign)] = true;
        
        emit CampaignCreated(
            address(newCampaign),
            msg.sender,
            fundingGoal,
            block.timestamp + duration
        );
        
        return address(newCampaign);
    }

    function contribute(
        address campaign
    ) external payable override nonReentrant {
        require(campaigns[campaign], "Campaign does not exist");
        require(msg.value > 0, "Invalid contribution amount");

        uint256 fee = (msg.value * platformFee) / FEE_DENOMINATOR;
        uint256 contributionAmount = msg.value - fee;

        Campaign(campaign).contribute{value: contributionAmount}(msg.sender);
        
        emit ContributionMade(campaign, msg.sender, contributionAmount);
    }

    function releaseFunds(address campaign) external override {
        require(campaigns[campaign], "Campaign does not exist");
        Campaign(campaign).releaseFunds();
        
        emit FundsReleased(campaign, Campaign(campaign).fundsRaised());
    }

    function refund(address campaign) external override {
        require(campaigns[campaign], "Campaign does not exist");
        uint256 refundAmount = Campaign(campaign).refund(msg.sender);
        
        emit RefundIssued(campaign, msg.sender, refundAmount);
    }

    function getCampaignDetails(
        address campaign
    )
        external
        view
        override
        returns (
            address creator,
            uint256 fundingGoal,
            uint256 deadline,
            uint256 fundsRaised,
            bool isFunded,
            bool isCompleted
        )
    {
        require(campaigns[campaign], "Campaign does not exist");
        return Campaign(campaign).getDetails();
    }

    function setPlatformFee(uint256 newFee) external onlyOwner {
        require(newFee <= 1000, "Fee too high"); // Max 10%
        platformFee = newFee;
    }

    function withdrawPlatformFees() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}