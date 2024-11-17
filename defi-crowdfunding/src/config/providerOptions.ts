import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";

export const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web 3 Modal Demo",
      infuraId: process.env.NEXT_PUBLIC_INFURA_KEY, // Use your Infura Project ID
    },
  },
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_KEY, // Use your Infura Project ID
    },
  },
};
