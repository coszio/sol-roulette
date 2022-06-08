const web3 = require("@solana/web3.js");

const getWalletBalance = async (pubk)=>{
    try{
        const connection = new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
        const balance = await connection.getBalance(new web3.PublicKey(pubk));
        return balance / web3.LAMPORTS_PER_SOL;
    }catch(err){
        console.log(err);
    }
}

const transferSOL=async (from,to,transferAmt)=>{
    try{
        const connection = new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
        const transaction = new web3.Transaction().add(
            web3.SystemProgram.transfer({
                fromPubkey: new web3.PublicKey(from.publicKey.toString()),
                toPubkey: new web3.PublicKey(to.publicKey.toString()),
                lamports: transferAmt * web3.LAMPORTS_PER_SOL
            })
        );
        return await web3.sendAndConfirmTransaction(
            connection,
            transaction,
            [from]
        );
    }catch(err){
        console.log(err);
    }
}

const airdropSol=async (wallet,transferAmt)=>{
    try{
        const connection=new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
        // const walletKeyPair=await web3.Keypair.fromSecretKey(Uint8Array.from())
        const fromAirDropSignature=await connection.requestAirdrop(new web3.PublicKey(wallet.publicKey.toString()),transferAmt*web3.LAMPORTS_PER_SOL);
        await connection.confirmTransaction(fromAirDropSignature);
    }catch(err){
        console.log(err);
    }
}

const airdropSolToPubKey = (pubKey, transferAmt) => {
    const connection = new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
    return connection.requestAirdrop(
        new web3.PublicKey(pubKey),
        transferAmt * web3.LAMPORTS_PER_SOL
    );
}

module.exports = {
    getWalletBalance,
    transferSOL,
    airdropSol,
    airdropSolToPubKey,
};
