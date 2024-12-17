import "dotenv/config";
import { getKeypairFromEnvironment } from '@solana-developers/helpers';

const keypair = getKeypairFromEnvironment("SECRET_KEY");
console.log("public key: ",  keypair.publicKey.toBase58());
console.log("secret key", keypair.secretKey);