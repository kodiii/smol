import { ethers } from 'ethers';
import NFTStakeFlex from '../contracts/NFTStakeFlex.sol';

export const getContract = (provider: ethers.providers.Web3Provider) => {
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    NFTStakeFlex.networks[process.env.NEXT_PUBLIC_NETWORK_ID].address,
    NFTStakeFlex.abi,
    signer
  );

  return contract;
};

export const stakeTokens = async (contract: ethers.Contract, amount: number) => {
  const tx = await contract.stakeTokens(ethers.utils.parseEther(amount.toString()));
  await tx.wait();
};

export const getStake = async (contract: ethers.Contract, account: string) => {
  const stake = await contract._stakes(account);
  return {
    amount: ethers.utils.formatEther(stake.amount),
    stakingTimestamp: new Date(stake.stakingTimestamp * 1000),
  };
};

export const getMinStakingAmount = async (contract: ethers.Contract) => {
  const minStakingAmount = await contract.MIN_STAKING_AMOUNT();
  return ethers.utils.formatEther(minStakingAmount);
};

export const getMaxStakingAmount = async (contract: ethers.Contract) => {
  const maxStakingAmount = await contract.MAX_STAKING_AMOUNT();
  return ethers.utils.formatEther(maxStakingAmount);
};