import { ReactNode, FC, useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { clusterApiUrl } from '@solana/web3.js';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
require("@solana/wallet-adapter-react-ui/styles.css");

export const WalletContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const endpoint = clusterApiUrl("devnet");
  const wallets = useMemo(() => [], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};