import { init } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';

// Sign up to get your free API key at https://explorer.blocknative.com/?signup=true
const dappId = '';

const INFURA_KEY = '';

const ethereumRopsten = {
  id: '0x3',
  token: 'rETH',
  label: 'Ethereum Ropsten',
  rpcUrl: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
};

const polygonMainnet = {
  id: '0x89',
  token: 'MATIC',
  label: 'Polygon',
  rpcUrl: 'https://polygon-rpc.com',
};

const chains = [ethereumRopsten, polygonMainnet];

const wallets = [injectedModule()];

const appMetadata = {
  name: 'Uniswap Widget Example',
  icon: '<svg>My App Icon</svg>',
  description:
	'Example showcasing how to integrate web3-onboard with uniswap widget.',
  recommendedInjectedWallets: [
	{ name: 'MetaMask', url: 'https://metamask.io' },
	{ name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
  ],
};

// initialize Onboard

export default init({
  wallets,
  chains,
  appMetadata,
});
