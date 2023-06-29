// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTStakeFlex is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    uint256 private constant APY_3_MONTHS = 5;
    uint256 private constant APY_1_YEAR = 12;
    uint256 private constant MIN_STAKING_AMOUNT = 50 * 10**18;
    uint256 private constant MAX_STAKING_AMOUNT = 2500 * 10**18;
    uint256 private constant ROYALTY_PERCENT = 0.25;
    uint256 private constant ROYALTY_BASE = 10000;

    Counters.Counter private _tokenIdCounter;

    struct Stake {
        uint256 amount;
        uint256 stakingTimestamp;
    }

    mapping(address => Stake) private _stakes;

    constructor() ERC721("NFT StakeFlex", "SFLX") {}

    function stakeTokens(uint256 amount) external {
        require(
            amount >= MIN_STAKING_AMOUNT && amount <= MAX_STAKING_AMOUNT,
            "Amount not within the staking limits"
        );

        Stakys stakysToken = Stakys(address(0)); // Replace with actual Stakys token address

        require(
            stakysToken.balanceOf(msg.sender) >= amount,
            "Insufficient STS balance"
        );

        require(
            stakysToken.allowance(msg.sender, address(this)) >= amount,
            "Token allowance not granted"
        );

        stakysToken.transferFrom(msg.sender, address(this), amount);

        _mintNFTStakeFlex(amount);

        _stakes[msg.sender] = Stake(amount, block.timestamp);
    }

    function _mintNFTStakeFlex(uint256 amount) private {
        _tokenIdCounter.increment();
        uint256 newTokenId = _tokenIdCounter.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, "ipfs://"); // Replace with actual IPFS URI
    }
}