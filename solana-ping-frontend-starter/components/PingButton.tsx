import { Transaction, TransactionInstruction, PublicKey } from "@solana/web3.js";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { FC } from 'react'
import styles from '../styles/PingButton.module.css';

const PING_PROGRAM_ID = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa";
const PING_DATA_ID = "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod";

export const PingButton: FC = () => {
	const { connection } = useConnection();
	const { publicKey, sendTransaction } = useWallet();

    const onClick = () => {
				if (!publicKey || !connection) {
					console.log("No wallet selected!!");
					return;
				}

				try {
					const pingInstruction = new TransactionInstruction({
            programId: new PublicKey(PING_PROGRAM_ID),
            keys: [
              {
                pubkey: new PublicKey(PING_DATA_ID),
                isSigner: false,
                isWritable: true,
              },
            ],
          });

					const pingTransaction = new Transaction().add(pingInstruction);
					const transactionSignature = sendTransaction(pingTransaction, connection);

					console.log("Ping Transaction successfull: ", transactionSignature);
				} catch (err) {
					console.log("Ping Transaction Failed", err);
				}
    }

	return (
		<div className={styles.buttonContainer}>
			<button onClick={onClick} className={styles.button}>Ping!</button>
		</div>
	)
}

