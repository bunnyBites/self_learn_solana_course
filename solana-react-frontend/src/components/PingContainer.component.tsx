import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";

const PING_PROGRAM_ID = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa";
const PING_DATA_ID = "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod";

export const PingContainer: React.FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClickPing = async (): Promise<void> => {
    if (!connection || !publicKey) {
      console.log("Wallet not provided");

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
      const pingSignature = await sendTransaction(pingTransaction, connection);
      console.log("Transaction Successfully!", pingSignature);
    } catch (err) {
      console.log("Transaction failed: ", err);
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-center my-5">
        <button onClick={onClickPing} className="btn btn-success" type="button">
          Ping!!
        </button>
      </div>
    </div>
  );
};
