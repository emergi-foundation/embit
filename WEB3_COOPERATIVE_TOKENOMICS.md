# Embit Web3 Cooperative Tokenomics Model

## Executive Summary

Embit implements a **blockchain-based cooperative energy network** where users earn tokenized rewards for different levels of grid participation. Users receive immediate value from day one through a multi-pool points system that converts to tradeable tokens.

**Token:** EMBT (Embit Token) - ERC-20 on Polygon
**Network:** Polygon (low gas fees, fast transactions)
**Initial Supply:** 1,000,000,000 EMBT
**Governance:** DAO with quadratic voting

---

## 1. Multi-Pool Reward Architecture

### Pool 1: Baseline Monitoring Pool (40% of rewards)

**What it rewards:** Passive participation - just using the app and sharing battery data

**Earning Activities:**
- Install app and create account: **100 EMBT** (one-time)
- Daily app usage: **5 EMBT/day**
- Battery data collection: **0.1 EMBT per reading** (every 5 min = ~288/day = 28.8 EMBT/day)
- 7-day streak bonus: **50 EMBT**
- 30-day streak bonus: **300 EMBT**
- Grid status monitoring: **10 EMBT/day**

**Why this matters:** Creates baseline grid load profile data, valuable for forecasting

**Typical earnings:** **~1,000 EMBT/month** ($10-30 value at scale)

### Pool 2: Active Demand Response Pool (35% of rewards)

**What it rewards:** Active participation in grid balancing events

**Earning Activities:**
- Enroll in VPP program: **500 EMBT** (one-time)
- Accept DR event: **50 EMBT per event**
- Complete DR event: **100 EMBT + performance bonus**
- Performance bonus: **10 EMBT per 1W reduction** (10W avg = 100 EMBT)
- Fast response (<30s): **25 EMBT bonus**
- Critical event participation: **3x multiplier**
- Referral bonus (friend enrolls): **200 EMBT**

**Event frequency:** ~2-4 events/week during peak season

**Typical earnings:** **~2,500 EMBT/month** ($25-75 value at scale)

### Pool 3: Home Integration Pool (20% of rewards)

**What it rewards:** Deep integration with home energy systems

**Earning Activities:**
- Connect utility account (energy bill): **1,000 EMBT** (one-time)
- Monthly bill upload: **100 EMBT**
- Smart meter integration: **500 EMBT setup + 50 EMBT/month**
- Home battery connection: **2,000 EMBT setup + 200 EMBT/month**
- EV charger integration: **1,500 EMBT setup + 150 EMBT/month**
- Solar panel integration: **2,500 EMBT setup + 250 EMBT/month**
- Whole-home automation permission: **500 EMBT/month**

**Why this matters:** Enables true whole-home VPP capabilities, 10x power capacity

**Typical earnings:** **~500 EMBT/month baseline, ~3,000 EMBT/month with full integration**

### Pool 4: Governance & Community Pool (5% of rewards)

**What it rewards:** Active participation in cooperative governance

**Earning Activities:**
- Vote on proposals: **20 EMBT per vote**
- Submit governance proposal: **100 EMBT** (refunded if passed)
- Proposal passes: **500 EMBT**
- Community support (answer questions): **10 EMBT per helpful response**
- Bug reporting: **50-500 EMBT** (based on severity)
- Feature suggestions (implemented): **1,000 EMBT**

**Typical earnings:** **~200 EMBT/month** for active community members

---

## 2. Token Economics

### EMBT Token Specification

```solidity
// ERC-20 Token on Polygon
contract EmbitToken {
    string public name = "Embit Cooperative Token";
    string public symbol = "EMBT";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1_000_000_000 * 10**18; // 1 billion
}
```

### Token Distribution

| Allocation | Amount | % | Vesting | Purpose |
|------------|--------|---|---------|---------|
| User Rewards | 500M | 50% | 5 years | Earn through participation |
| Cooperative Treasury | 200M | 20% | N/A | DAO-controlled funds |
| Team & Development | 150M | 15% | 4 years | Core team incentives |
| Early Supporters | 50M | 5% | 2 years | Seed investors |
| Ecosystem Grants | 50M | 5% | N/A | Partnerships, integrations |
| Liquidity Provisioning | 50M | 5% | N/A | DEX liquidity (Uniswap, SushiSwap) |

### Reward Emission Schedule

**Years 1-2:** 100M EMBT/year (higher early rewards to bootstrap network)
**Years 3-4:** 75M EMBT/year (gradual reduction)
**Year 5:** 50M EMBT/year (steady state)
**Year 6+:** Governance-determined emissions

### Token Value Mechanisms

**Utility (Creates Demand):**
1. **Staking:** Lock EMBT to boost reward multipliers (up to 2x)
2. **Governance:** 1 EMBT = 1 vote (quadratic voting)
3. **Priority Access:** Higher tiers get priority in high-value DR events
4. **Fee Discounts:** Pay lower withdrawal fees with EMBT
5. **NFT Minting:** Mint achievement NFTs using EMBT

**Value Accrual:**
1. **Protocol Revenue:** 10% of VPP revenue used to buy back & burn EMBT
2. **Treasury Staking:** Treasury EMBT staked, yield distributed to holders
3. **Liquidity Mining:** Provide EMBT-USDC liquidity, earn fees + EMBT rewards

**Deflationary Mechanisms:**
1. **Burn on Milestone:** 1% of circulating supply burned at each 10k user milestone
2. **Activity Burn:** 5% of tokens used for services are burned
3. **Governance Burn:** Failed proposals forfeit EMBT stake (burned)

---

## 3. Immediate Value Strategy

### Day 1 Value Creation

**User joins and immediately receives:**

1. **Welcome Bonus:** 100 EMBT (~$1-3 value)
2. **First Data Point:** 0.1 EMBT per battery reading (starts earning in 5 min)
3. **Daily Check-in:** 5 EMBT (login to app = earnings)

**Estimated Day 1 Earnings:** 100 EMBT signup + 30 EMBT from usage = **130 EMBT** (~$1.30-3.90)

### Week 1 Value

- Signup bonus: 100 EMBT
- Daily usage: 7 days × 35 EMBT = 245 EMBT
- 7-day streak: 50 EMBT
- **Total Week 1: ~395 EMBT** (~$4-12)

### Month 1 Value (Baseline Participation)

- Signup: 100 EMBT
- Daily usage: 30 days × 35 EMBT = 1,050 EMBT
- Streaks: 50 + 300 = 350 EMBT
- **Total Month 1: ~1,500 EMBT** (~$15-45)

### Month 1 Value (Active VPP Participation)

- Baseline: 1,500 EMBT
- VPP enrollment: 500 EMBT
- 10 DR events × (50 + 100 + 100 bonus) = 2,500 EMBT
- **Total Month 1: ~4,500 EMBT** (~$45-135)

### Liquidity & Cashout

**Day 1 Liquidity Options:**

1. **Instant Swap:** EMBT → USDC on Uniswap (Polygon)
2. **Fiat Offramp:** EMBT → USD via integrated ramp (Ramp Network, MoonPay)
3. **HOLD:** Stake for 2x multiplier on future earnings

**Transaction Costs:** <$0.01 on Polygon (negligible)

---

## 4. Participation Tiers & Multipliers

### Tier System

Users level up based on total EMBT earned (all-time):

| Tier | EMBT Earned | Multiplier | Benefits |
|------|------------|------------|----------|
| **Bronze** | 0 - 5,000 | 1.0x | Base rewards |
| **Silver** | 5,000 - 25,000 | 1.2x | +20% rewards, priority support |
| **Gold** | 25,000 - 100,000 | 1.5x | +50% rewards, early feature access |
| **Platinum** | 100,000 - 500,000 | 1.8x | +80% rewards, governance NFT |
| **Diamond** | 500,000+ | 2.0x | +100% rewards, DAO council seat |

### Staking Multipliers

Lock EMBT for additional multipliers:

| Lock Period | Multiplier | APY (from treasury yield) |
|-------------|-----------|---------------------------|
| No lock | 1.0x | 0% |
| 30 days | 1.1x | 5% |
| 90 days | 1.3x | 12% |
| 180 days | 1.5x | 20% |
| 1 year | 2.0x | 35% |

**Combined max multiplier:** 2.0x (tier) × 2.0x (staking) = **4x rewards**

---

## 5. Smart Contract Architecture

### Contract Overview

```
EmbitCooperative (Ecosystem)
├── EmbitToken.sol (ERC-20)
├── RewardDistributor.sol (Mints & distributes rewards)
├── StakingContract.sol (Lock EMBT for multipliers)
├── GovernanceDAO.sol (Quadratic voting)
├── VppCoordinator.sol (DR event management)
├── TreasuryManager.sol (Protocol funds)
└── NFTAchievements.sol (ERC-721 achievement badges)
```

### Core Contracts

#### 1. EmbitToken.sol (ERC-20)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract EmbitToken is ERC20, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    uint256 public constant MAX_SUPPLY = 1_000_000_000 * 10**18; // 1B tokens
    uint256 public totalBurned;

    event TokensBurned(address indexed burner, uint256 amount);
    event TokensMinted(address indexed to, uint256 amount);

    constructor() ERC20("Embit Cooperative Token", "EMBT") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        _grantRole(BURNER_ROLE, msg.sender);

        // Mint initial treasury allocation
        _mint(msg.sender, 200_000_000 * 10**18); // 200M to treasury
    }

    function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) {
        require(totalSupply() + amount <= MAX_SUPPLY, "Max supply exceeded");
        _mint(to, amount);
        emit TokensMinted(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
        totalBurned += amount;
        emit TokensBurned(msg.sender, amount);
    }

    function burnFrom(address account, uint256 amount)
        external
        onlyRole(BURNER_ROLE)
    {
        _burn(account, amount);
        totalBurned += amount;
        emit TokensBurned(account, amount);
    }
}
```

#### 2. RewardDistributor.sol

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./EmbitToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract RewardDistributor is Ownable, ReentrancyGuard {
    EmbitToken public embitToken;

    // Pool allocations (basis points, 10000 = 100%)
    uint256 public constant BASELINE_POOL = 4000; // 40%
    uint256 public constant ACTIVE_DR_POOL = 3500; // 35%
    uint256 public constant HOME_INTEGRATION_POOL = 2000; // 20%
    uint256 public constant GOVERNANCE_POOL = 500; // 5%

    // Reward amounts (in wei)
    uint256 public constant SIGNUP_REWARD = 100 * 10**18;
    uint256 public constant DAILY_USAGE_REWARD = 5 * 10**18;
    uint256 public constant BATTERY_READING_REWARD = 0.1 * 10**18;
    uint256 public constant VPP_ENROLLMENT_REWARD = 500 * 10**18;
    uint256 public constant DR_EVENT_ACCEPT_REWARD = 50 * 10**18;
    uint256 public constant DR_EVENT_COMPLETE_REWARD = 100 * 10**18;
    uint256 public constant UTILITY_CONNECTION_REWARD = 1000 * 10**18;

    struct UserRewards {
        uint256 totalEarned;
        uint256 lastClaimTime;
        uint256 streakDays;
        uint8 tier;
        uint256 stakedAmount;
        uint256 stakeUnlockTime;
    }

    mapping(address => UserRewards) public userRewards;
    mapping(address => bool) public hasSignupBonus;
    mapping(address => bool) public hasVppEnrollmentBonus;

    // Authorized reward distributors (backend services)
    mapping(address => bool) public isDistributor;

    event RewardClaimed(address indexed user, uint256 amount, string reason);
    event RewardDistributed(address indexed user, uint256 amount, uint8 pool);
    event TierUpgraded(address indexed user, uint8 newTier);

    constructor(address _embitToken) {
        embitToken = EmbitToken(_embitToken);
        isDistributor[msg.sender] = true;
    }

    modifier onlyDistributor() {
        require(isDistributor[msg.sender], "Not authorized distributor");
        _;
    }

    function distributeSignupReward(address user)
        external
        onlyDistributor
        nonReentrant
    {
        require(!hasSignupBonus[user], "Already received signup bonus");
        hasSignupBonus[user] = true;

        embitToken.mint(user, SIGNUP_REWARD);
        userRewards[user].totalEarned += SIGNUP_REWARD;

        emit RewardDistributed(user, SIGNUP_REWARD, 0);
        emit RewardClaimed(user, SIGNUP_REWARD, "signup_bonus");
    }

    function distributeDailyUsageReward(address user)
        external
        onlyDistributor
        nonReentrant
    {
        UserRewards storage rewards = userRewards[user];

        // Check if already claimed today
        require(
            block.timestamp >= rewards.lastClaimTime + 1 days,
            "Already claimed today"
        );

        // Update streak
        if (block.timestamp <= rewards.lastClaimTime + 2 days) {
            rewards.streakDays++;
        } else {
            rewards.streakDays = 1; // Reset streak
        }

        uint256 amount = DAILY_USAGE_REWARD;

        // Streak bonuses
        if (rewards.streakDays == 7) {
            amount += 50 * 10**18; // 7-day bonus
        } else if (rewards.streakDays == 30) {
            amount += 300 * 10**18; // 30-day bonus
        }

        // Apply multipliers
        amount = applyMultipliers(user, amount);

        embitToken.mint(user, amount);
        rewards.totalEarned += amount;
        rewards.lastClaimTime = block.timestamp;

        _updateTier(user);

        emit RewardDistributed(user, amount, 0);
        emit RewardClaimed(user, amount, "daily_usage");
    }

    function distributeBatteryReadingReward(address user, uint256 count)
        external
        onlyDistributor
        nonReentrant
    {
        uint256 amount = BATTERY_READING_REWARD * count;
        amount = applyMultipliers(user, amount);

        embitToken.mint(user, amount);
        userRewards[user].totalEarned += amount;

        emit RewardDistributed(user, amount, 0);
    }

    function distributeDREventReward(
        address user,
        uint256 reductionWatts,
        bool isCritical
    )
        external
        onlyDistributor
        nonReentrant
    {
        uint256 amount = DR_EVENT_ACCEPT_REWARD + DR_EVENT_COMPLETE_REWARD;

        // Performance bonus: 10 EMBT per 1W reduction
        amount += (reductionWatts * 10 * 10**18);

        // Critical event multiplier
        if (isCritical) {
            amount *= 3;
        }

        amount = applyMultipliers(user, amount);

        embitToken.mint(user, amount);
        userRewards[user].totalEarned += amount;

        _updateTier(user);

        emit RewardDistributed(user, amount, 1); // Active DR pool
        emit RewardClaimed(user, amount, "dr_event_complete");
    }

    function distributeHomeIntegrationReward(
        address user,
        string memory integrationType
    )
        external
        onlyDistributor
        nonReentrant
    {
        uint256 amount = UTILITY_CONNECTION_REWARD; // Default

        // Different amounts for different integrations
        // This would be configurable via governance

        amount = applyMultipliers(user, amount);

        embitToken.mint(user, amount);
        userRewards[user].totalEarned += amount;

        _updateTier(user);

        emit RewardDistributed(user, amount, 2); // Home integration pool
        emit RewardClaimed(user, amount, integrationType);
    }

    function applyMultipliers(address user, uint256 baseAmount)
        internal
        view
        returns (uint256)
    {
        UserRewards storage rewards = userRewards[user];
        uint256 amount = baseAmount;

        // Tier multiplier
        if (rewards.tier == 1) { // Silver
            amount = (amount * 120) / 100; // 1.2x
        } else if (rewards.tier == 2) { // Gold
            amount = (amount * 150) / 100; // 1.5x
        } else if (rewards.tier == 3) { // Platinum
            amount = (amount * 180) / 100; // 1.8x
        } else if (rewards.tier == 4) { // Diamond
            amount = (amount * 200) / 100; // 2.0x
        }

        // Staking multiplier
        if (rewards.stakedAmount > 0 && block.timestamp < rewards.stakeUnlockTime) {
            uint256 lockDuration = rewards.stakeUnlockTime -
                (rewards.stakeUnlockTime -
                 (block.timestamp < rewards.stakeUnlockTime ?
                  rewards.stakeUnlockTime - block.timestamp : 0));

            // Simple multiplier based on lock duration
            if (lockDuration >= 365 days) {
                amount = (amount * 200) / 100; // 2.0x for 1 year
            } else if (lockDuration >= 180 days) {
                amount = (amount * 150) / 100; // 1.5x for 6 months
            } else if (lockDuration >= 90 days) {
                amount = (amount * 130) / 100; // 1.3x for 3 months
            } else if (lockDuration >= 30 days) {
                amount = (amount * 110) / 100; // 1.1x for 1 month
            }
        }

        return amount;
    }

    function _updateTier(address user) internal {
        UserRewards storage rewards = userRewards[user];
        uint256 earned = rewards.totalEarned;

        uint8 newTier = 0; // Bronze
        if (earned >= 500_000 * 10**18) {
            newTier = 4; // Diamond
        } else if (earned >= 100_000 * 10**18) {
            newTier = 3; // Platinum
        } else if (earned >= 25_000 * 10**18) {
            newTier = 2; // Gold
        } else if (earned >= 5_000 * 10**18) {
            newTier = 1; // Silver
        }

        if (newTier > rewards.tier) {
            rewards.tier = newTier;
            emit TierUpgraded(user, newTier);
        }
    }

    function getUserTier(address user) external view returns (uint8) {
        return userRewards[user].tier;
    }

    function addDistributor(address distributor) external onlyOwner {
        isDistributor[distributor] = true;
    }

    function removeDistributor(address distributor) external onlyOwner {
        isDistributor[distributor] = false;
    }
}
```

#### 3. StakingContract.sol

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./EmbitToken.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract EmbitStaking is ReentrancyGuard {
    EmbitToken public embitToken;

    struct Stake {
        uint256 amount;
        uint256 startTime;
        uint256 unlockTime;
        uint8 lockPeriod; // 0=none, 1=30d, 2=90d, 3=180d, 4=1y
    }

    mapping(address => Stake) public stakes;
    uint256 public totalStaked;

    uint256 public constant MONTH = 30 days;
    uint256 public constant YEAR = 365 days;

    event Staked(address indexed user, uint256 amount, uint8 lockPeriod);
    event Unstaked(address indexed user, uint256 amount);
    event EmergencyUnstaked(address indexed user, uint256 amount, uint256 penalty);

    constructor(address _embitToken) {
        embitToken = EmbitToken(_embitToken);
    }

    function stake(uint256 amount, uint8 lockPeriod) external nonReentrant {
        require(amount > 0, "Cannot stake 0");
        require(lockPeriod <= 4, "Invalid lock period");
        require(stakes[msg.sender].amount == 0, "Already staking");

        embitToken.transferFrom(msg.sender, address(this), amount);

        uint256 unlockTime = block.timestamp;
        if (lockPeriod == 1) unlockTime += MONTH;
        else if (lockPeriod == 2) unlockTime += 3 * MONTH;
        else if (lockPeriod == 3) unlockTime += 6 * MONTH;
        else if (lockPeriod == 4) unlockTime += YEAR;

        stakes[msg.sender] = Stake({
            amount: amount,
            startTime: block.timestamp,
            unlockTime: unlockTime,
            lockPeriod: lockPeriod
        });

        totalStaked += amount;

        emit Staked(msg.sender, amount, lockPeriod);
    }

    function unstake() external nonReentrant {
        Stake storage userStake = stakes[msg.sender];
        require(userStake.amount > 0, "No stake found");
        require(block.timestamp >= userStake.unlockTime, "Still locked");

        uint256 amount = userStake.amount;
        delete stakes[msg.sender];
        totalStaked -= amount;

        embitToken.transfer(msg.sender, amount);

        emit Unstaked(msg.sender, amount);
    }

    function emergencyUnstake() external nonReentrant {
        Stake storage userStake = stakes[msg.sender];
        require(userStake.amount > 0, "No stake found");

        uint256 amount = userStake.amount;
        uint256 penalty = (amount * 20) / 100; // 20% penalty
        uint256 amountAfterPenalty = amount - penalty;

        delete stakes[msg.sender];
        totalStaked -= amount;

        // Burn the penalty
        embitToken.burn(penalty);
        embitToken.transfer(msg.sender, amountAfterPenalty);

        emit EmergencyUnstaked(msg.sender, amountAfterPenalty, penalty);
    }

    function getStake(address user)
        external
        view
        returns (uint256 amount, uint256 unlockTime, uint8 lockPeriod)
    {
        Stake storage userStake = stakes[user];
        return (userStake.amount, userStake.unlockTime, userStake.lockPeriod);
    }
}
```

#### 4. GovernanceDAO.sol

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./EmbitToken.sol";

contract EmbitGovernance {
    EmbitToken public embitToken;

    struct Proposal {
        uint256 id;
        address proposer;
        string title;
        string description;
        uint256 startTime;
        uint256 endTime;
        uint256 yesVotes;
        uint256 noVotes;
        bool executed;
        bool passed;
        mapping(address => uint256) votes; // address => vote weight
    }

    uint256 public proposalCount;
    mapping(uint256 => Proposal) public proposals;

    uint256 public constant VOTING_PERIOD = 7 days;
    uint256 public constant PROPOSAL_THRESHOLD = 1000 * 10**18; // 1000 EMBT to propose
    uint256 public constant QUORUM = 100_000 * 10**18; // 100k EMBT quorum

    event ProposalCreated(
        uint256 indexed proposalId,
        address indexed proposer,
        string title
    );
    event Voted(
        uint256 indexed proposalId,
        address indexed voter,
        bool support,
        uint256 weight
    );
    event ProposalExecuted(uint256 indexed proposalId, bool passed);

    constructor(address _embitToken) {
        embitToken = EmbitToken(_embitToken);
    }

    function createProposal(string memory title, string memory description)
        external
        returns (uint256)
    {
        require(
            embitToken.balanceOf(msg.sender) >= PROPOSAL_THRESHOLD,
            "Insufficient EMBT to propose"
        );

        proposalCount++;
        Proposal storage proposal = proposals[proposalCount];
        proposal.id = proposalCount;
        proposal.proposer = msg.sender;
        proposal.title = title;
        proposal.description = description;
        proposal.startTime = block.timestamp;
        proposal.endTime = block.timestamp + VOTING_PERIOD;

        emit ProposalCreated(proposalCount, msg.sender, title);

        return proposalCount;
    }

    function vote(uint256 proposalId, bool support) external {
        Proposal storage proposal = proposals[proposalId];
        require(block.timestamp <= proposal.endTime, "Voting ended");
        require(proposal.votes[msg.sender] == 0, "Already voted");

        uint256 weight = embitToken.balanceOf(msg.sender);
        require(weight > 0, "No voting power");

        // Quadratic voting: sqrt of balance
        weight = sqrt(weight);

        proposal.votes[msg.sender] = weight;

        if (support) {
            proposal.yesVotes += weight;
        } else {
            proposal.noVotes += weight;
        }

        emit Voted(proposalId, msg.sender, support, weight);
    }

    function executeProposal(uint256 proposalId) external {
        Proposal storage proposal = proposals[proposalId];
        require(block.timestamp > proposal.endTime, "Voting still active");
        require(!proposal.executed, "Already executed");

        uint256 totalVotes = proposal.yesVotes + proposal.noVotes;
        require(totalVotes >= QUORUM, "Quorum not reached");

        proposal.executed = true;
        proposal.passed = proposal.yesVotes > proposal.noVotes;

        emit ProposalExecuted(proposalId, proposal.passed);
    }

    // Babylonian method for square root (for quadratic voting)
    function sqrt(uint256 x) internal pure returns (uint256 y) {
        uint256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }
}
```

---

## 6. Token Launch Strategy

### Phase 1: Private Beta (Months 1-3)

**Participants:** 1,000 beta testers

**Tokenomics:**
- Earn EMBT on testnet (Polygon Mumbai)
- 2x reward multiplier for early adopters
- Guaranteed airdrop upon mainnet launch

**Goals:**
- Test reward mechanisms
- Validate user behavior
- Fine-tune reward amounts

### Phase 2: Mainnet Launch (Month 4)

**Events:**
1. Deploy contracts to Polygon mainnet
2. Airdrop to beta testers (bonus based on participation)
3. Initial DEX Offering (IDO) on QuickSwap
   - Initial price: $0.01 per EMBT
   - Liquidity pool: 50M EMBT + $500k USDC
4. Announce token listing

### Phase 3: Liquidity & Exchange Listings (Months 5-6)

1. **DEX Listings:**
   - QuickSwap (Polygon) ✅ Day 1
   - SushiSwap (Polygon)
   - Uniswap V3 (Polygon)

2. **CEX Listings:** (if demand warrants)
   - Gate.io
   - KuCoin
   - Binance (long-term goal)

3. **Fiat On/Off Ramps:**
   - Ramp Network integration
   - MoonPay integration
   - Direct EMBT → USD withdrawal

### Phase 4: Scale & Partnerships (Months 7-12)

1. Partner with other energy apps (cross-rewards)
2. Utility partnerships (direct bill credits in EMBT)
3. Carbon credit integration (trade EMBT for offsets)
4. EV charging network integration

---

## 7. Implementation Checklist

### Smart Contracts (Priority 1)
- [ ] Deploy EmbitToken.sol to Polygon testnet
- [ ] Deploy RewardDistributor.sol
- [ ] Deploy StakingContract.sol
- [ ] Deploy GovernanceDAO.sol
- [ ] Audit contracts (OpenZeppelin, CertiK, or Quantstamp)
- [ ] Deploy to Polygon mainnet

### Backend Integration (Priority 1)
- [ ] Set up Web3 wallet service (Web3Auth)
- [ ] Build reward distribution API
- [ ] Implement blockchain transaction monitoring
- [ ] Create admin dashboard for reward management
- [ ] Set up automated reward distribution (cron jobs)

### Mobile App (Priority 2)
- [ ] Integrate Web3 wallet (WalletConnect SDK)
- [ ] Build rewards dashboard UI
- [ ] Implement staking UI
- [ ] Create governance voting UI
- [ ] Add transaction history
- [ ] Implement fiat offramp flow

### Liquidity & Exchange (Priority 3)
- [ ] Create EMBT-USDC liquidity pool on QuickSwap
- [ ] Set up liquidity mining rewards
- [ ] Apply for additional DEX listings
- [ ] Integrate Ramp Network for fiat
- [ ] Set up treasury management

---

## 8. Risk Mitigation

### Smart Contract Risks
- **Mitigation:** Professional audit before mainnet
- **Insurance:** Nexus Mutual coverage for contract bugs
- **Upgrade path:** Use proxy contracts for emergencies

### Regulatory Risks
- **Securities concern:** Structure EMBT as utility token (not investment)
- **KYC/AML:** Implement for fiat withdrawals >$1000
- **Legal review:** Retain crypto-friendly law firm

### Market Risks
- **Low liquidity:** Commit $500k+ to liquidity pools
- **Price volatility:** Gradual emission schedule
- **Whale dumps:** Vesting periods for large holders

---

This tokenomics model creates **immediate, tangible value** for users while building a sustainable, cooperative energy network. Users earn from day one, and the multi-pool structure rewards different participation levels.

Next: Implementing the device-side code and mobile wallet integration!
