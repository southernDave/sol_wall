// const { Connection, PublicKey, Keypair, SystemProgram, LAMPORTS_PER_SOL } = require('@solana/web3.js');
// // const keypair = Keypair.generate()
// // console.log('Public Key:', keypair.publicKey.toBase58());
// // console.log('Private Key:', keypair.secretKey);

// //connect to the solana wallet
// const connection = new Connection('https://api.devnet.solana.com')

// //set up the wallet
// const fromWallet = Keypair.fromSecretKey(Buffer.from('', 'hex'))

// //create a new account
// async function createAccount(){
//     const newAccount = Keypair.generate()
//     const transaction = SystemProgram.createAccount({
//         fromPubkey: fromWallet.publicKey,
//         newAccountPubkey: newAccount.publicKey,
//         lamports: LAMPORTS_PER_SOL, // amounts of sol needed to fund the account
//         space: 165
//     })

//     const signature = await connection.sendTransaction(transaction, [fromWallet, newAccount])
//     await connection.confirmTransaction(signature)

//     console.log('New account created:', newAccount.publicKey.toBase58());
// }

// //The function that transfers tokens
// async transferTokens(toPublicKey, amount){
//     const transfer = await 
// }

// //the function that checks balance
// async function checkBalance(publicKey){
//     const balance = await connection.getBalance(new publicKey(publicKey))
//     console.log('Balance:', balance / LAMPORTS_PER_SOL, 'SOL');
// }

// createAccount()
// transferTokens('', 10)
// checkBalance('public key')
//6iNrmhizsrwLhv9oGZQ8xa1s2UXHMiDEagvuLWv2V31f

//Create Wallet
require('dotenv').config();
const { 
    Connection,
    PublicKey,
    Keypair,
    LAMPORTS_PER_SOL,
    Transaction,
    SystemProgram } = require('@solana/web3.js');

//Connect to the solana blockchain
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');


//Create New accounts
async function createAccount() {
     const account = Keypair.generate();    
     console.log('New account created:', account.publicKey.toBase58());
     return account; 
    }

// //Transfer Tokens
// async function transferTokens(sender, recipient, amount) { 
//     const transaction = new Transaction().add( SystemProgram.transfer({
//          fromPubkey: sender.publicKey,
//          toPubkey: recipient,
//          lamports: amount * LAMPORTS_PER_SOL, }) );

//     const { blockhash } = await connection.getRecentBlockhash();
//     transaction.recentBlockhash = blockhash;
//     transaction.feePayer = sender.publicKey;

//     const signedTransaction = await sender.signTransaction(transaction);
//     const signature = await connection.sendRawTransaction(signedTransaction.serialize());
//     console.log('Transaction sent:', signature); }

// //Check Balance

// async function checkBalance(publicKey) { 
//     const balance = await connection.getBalance(new PublicKey(publicKey));
//     console.log('Account balance:', balance / LAMPORTS_PER_SOL);
// }


(async () => {

     //Create a new account 
     const sender = await createAccount();

    //  //Transfer tokens 
    //  const recipient = 'Recipient public key goes here';
    //  const transferAmount = 1; 

    //  // Amount in SOL tokens
    //  await transferTokens(sender, recipient, transferAmount);
    
    //  // Check balance 
    //  await checkBalance(sender.publicKey.base58()); 
})();