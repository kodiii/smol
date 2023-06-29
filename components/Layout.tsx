import React from 'react';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>NFT StakeFlex</title>
        <meta name="description" content="Stake your tokens and earn NFTs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <footer>
        <p>© 2022 NFT StakeFlex. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;