import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>NFT StakeFlex</title>
          <meta name="description" content="Stake your tokens and earn NFTs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to NFT StakeFlex
          </h1>

          <p className={styles.description}>
            Stake your tokens and earn NFTs
          </p>

          <div className={styles.grid}>
            <a href="/stake" className={styles.card}>
              <h2>Stake &rarr;</h2>
              <p>Stake your tokens to earn NFTs.</p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://github.com/NFTStakeFlex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/logo.svg" alt="NFT StakeFlex Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </Layout>
  );
};

export default Home;