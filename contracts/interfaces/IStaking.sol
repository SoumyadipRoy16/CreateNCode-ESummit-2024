pragma solidity ^0.8.19;

interface IStaking {
    struct StakeInfo {
        uint256 amount;
        uint256 timestamp;
        uint256 rewards;
    }

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardsClaimed(address indexed user, uint256 amount);

    function stake(uint256 amount) external;
    function unstake(uint256 amount) external;
    function claimRewards() external;
    function getStakeInfo(address user)
        external
        view
        returns (uint256 stakedAmount, uint256 pendingRewards);
}