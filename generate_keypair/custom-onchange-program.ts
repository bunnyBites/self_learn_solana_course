import {
  Connection,
  clusterApiUrl,
  PublicKey,
  LAMPORTS_PER_SOL,
  TransactionInstruction,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import "dotenv/config";
import { airdropIfRequired, getKeypairFromEnvironment } from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"));
const ourAccount = getKeypairFromEnvironment("SECRET_KEY");

const newBalance = await airdropIfRequired(
  connection,
  ourAccount.publicKey,
  5 * LAMPORTS_PER_SOL,
  1 * LAMPORTS_PER_SOL,
);

console.log("New balance", newBalance / LAMPORTS_PER_SOL);

const pingProgram = new PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa");
const pingDataProgram = new PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod");

const pingInstruction = new TransactionInstruction({
  programId: pingProgram,
  keys: [
    {
      pubkey: pingDataProgram,
      isSigner: false,
      isWritable: true,
    },
  ],
});

const pingTransaction = new Transaction().add(pingInstruction);

const pingSignature = await sendAndConfirmTransaction(connection, pingTransaction, [ourAccount]);

console.log("The ping is successfull: ", pingSignature);
