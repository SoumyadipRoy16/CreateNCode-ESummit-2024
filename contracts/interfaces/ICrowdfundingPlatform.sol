pragma solidity ^0.8.19;

interface ICrowdfundingPlatform {
    struct Campaign {
        address creator;
        uint256 fundingGoal;
        uint256 deadline;
        uint256 fundsRaised;
        bool isFunded;
        bool isCompleted;
        mapping(address => uint256) contributions;
    }

    event CampaignCreated(
        address indexed campaignAddress,
        address indexed creator,
        uint256 fundingGoal,
        uint256 deadline
    );
    event ContributionMade(
        address indexed campaign,
        address indexed contributor,
        uint256 amount
    );
    event FundsReleased(address indexed campaign, uint256 amount);
    event RefundIssued(
        address indexed campaign,
        address indexed contributor,
        uint256 amount
    );

    function createCampaign(
        uint256 fundingGoal,
        uint256 duration,
        string memory description
    ) external returns (address);

    function contribute(address campaign) external payable;
    function releaseFunds(address campaign) external;
    function refund(address campaign) external;
    function getCampaignDetails(address campaign)
        external
        view
        returns (
            address creator,
            uint256 fundingGoal,
            uint256 deadline,
            uint256 fundsRaised,
            bool isFunded,
            bool isCompleted
        );
}