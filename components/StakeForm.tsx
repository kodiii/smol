import React, { useState } from 'react';
import { stakeTokens } from '../lib/contracts';

const StakeForm: React.FC = () => {
  const [amount, setAmount] = useState('');

  const handleStake = async () => {
    if (!amount) {
      alert('Please enter an amount to stake');
      return;
    }

    const stakeAmount = parseFloat(amount);
    if (isNaN(stakeAmount)) {
      alert('Invalid stake amount');
      return;
    }

    try {
      await stakeTokens(stakeAmount);
      alert('Stake successful');
    } catch (error) {
      console.error('Failed to stake tokens', error);
      alert('Failed to stake tokens');
    }
  };

  return (
    <div>
      <label htmlFor="stakingAmount">Amount to Stake:</label>
      <input
        id="stakingAmount"
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleStake}>Stake</button>
    </div>
  );
};

export default StakeForm;