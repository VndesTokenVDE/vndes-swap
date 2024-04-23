import { useState, useEffect } from 'react';

import { SwapWidget } from '@uniswap/widgets';

import '@uniswap/widgets/fonts.css';

import { ethers } from 'ethers';
import { useConnectWallet } from '@web3-onboard/react';

import { JSON_RPC_URL } from '../constants';
import styles from '../styles/Home.module.css';

const TOKEN_LIST =
  'https://raw.githubusercontent.com/VndesTokenVDE/widgets-demo/nextjs/token.json';
const UNI = '0xd6ba705da1713f66925c46ebb9f6a9548c9e4213';

export default function App() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();

  useEffect(() => {
    if (wallet?.provider) {
      setProvider(new ethers.providers.Web3Provider(wallet.provider, 'any'));
    } else {
      setProvider(undefined);
    }
  }, [wallet]);

  // The connect wallet function which will be based to the Uniswap component below.
  const connectWallet = () => {
    connect();
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.demo}>
          <div className={styles.widget}>
            <SwapWidget
              jsonRpcEndpoint={JSON_RPC_URL}
              tokenList={TOKEN_LIST}
              provider={provider}
              onConnectWallet={connectWallet}
              defaultInputTokenAddress="NATIVE"
              defaultInputAmount="1"
              defaultOutputTokenAddress={UNI}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
