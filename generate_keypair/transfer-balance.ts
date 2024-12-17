import "dotenv/config";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { getKeypairFromEnvironment } from '@solana-developers/helpers';

const recieverPubKeyString = process.env.RECIEVER_PUBKEY;

if (!recieverPubKeyString) {
  console.log("Provide a valid reciever public key!!");
  process.exit(0);
}

const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
console.log(senderKeypair.publicKey.toBase58());

const recieverPublicKey = new PublicKey(recieverPubKeyString);

const connection = new Connection(clusterApiUrl("devnet"));

// transaction and instruction to transfer SOL

const LAMPORTS_TO_TRANSFER = 2;

const transferInstruction = SystemProgram.transfer({
  fromPubkey: senderKeypair.publicKey,
  toPubkey: recieverPublicKey,
  lamports: LAMPORTS_TO_TRANSFER,
});

const transaction = new Transaction();
transaction.add(transferInstruction);

const transferSignature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair]);

console.log("Transfer of SOL success: ", transferSignature);