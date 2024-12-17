import { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey("Ej9HTiiwTQm3atd3QZEWHQeCfDDDb7wcyCj3uzn86yT8");

const balance = await connection.getBalance(address);
const preparedBalance = balance / LAMPORTS_PER_SOL;

console.log(`The balance of ${address.toBase58()} is ${preparedBalance} SOLs`);