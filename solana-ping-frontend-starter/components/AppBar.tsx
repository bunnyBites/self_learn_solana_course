import { FC } from 'react'
import Image from 'next/image'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styles from '../styles/Home.module.css'

export const AppBar: FC = () => {
    return (
      <div className={styles.AppHeader}>
        <Image src="/solanaLogo.png" alt="solana-logo" height={30} width={200} />
        <span>Wallet-Adapter Example</span>
        <WalletMultiButton />
      </div>
    );
}