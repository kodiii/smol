import { useState } from 'react';
import { ethers } from 'ethers';
import { NFTStakeFlex } from '../lib/contracts';
import StakeForm from '../components/StakeForm';
import Layout from '../components/Layout';
import styles from '../styles/Stake.module.css';

export default function Stake() {
    const [stakingAmount, setStakingAmount] = useState('');

    const handleStake = async () => {
        if (!window.ethereum)
            return alert('Please install MetaMask to use this feature.');

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(NFTStakeFlex.address, NFTStakeFlex.abi, signer);

        try {
            const tx = await contract.stakeTokens(ethers.utils.parseEther(stakingAmount));
            await tx.wait();
            alert('Staking successful!');
        } catch (err) {
            console.error('An error occurred', err);
            alert('There was an error!');
        }
    };

    return (
        <Layout>
            <div className={styles.container}>
                <h1>Stake Tokens</h1>
                <StakeForm
                    stakingAmount={stakingAmount}
                    onStakingAmountChange={setStakingAmount}
                    onStake={handleStake}
                />
            </div>
        </Layout>
    );
}