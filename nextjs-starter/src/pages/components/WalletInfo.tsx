import React from 'react';
import { useState, useEffect } from 'react';
import indexStyle from "../../styles/WalletInfo.module.css"
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as web3 from "@solana/web3.js";

export default function WalletInfo() {

    const [accountInfo, setaccountInfo] = useState<web3.AccountInfo<Buffer>>()


    useEffect(()=>{

        const getAccinfo = async()=>{
            if(wallet.publicKey){
               let acc=  await connection.getAccountInfo(wallet.publicKey);
               if(acc){
                    setaccountInfo(acc);
               }
            }
        }

        getAccinfo().catch((error)=>{
            console.log(error)
        })
    })


    const wallet = useWallet();
    const pk = wallet.publicKey?.toBase58();
    const connection = new web3.Connection("http://127.0.0.1:8899", "confirmed");


    const Initialize = async() =>{

      const status = "Just initialized";





      console.log(status);
    }
   

    

  return (
    <div className={indexStyle.walletinfo}>
       <div className={indexStyle.pubkey}>PublicKey: {pk}</div>
       {accountInfo&& <div>Sol available: {accountInfo.lamports/web3.LAMPORTS_PER_SOL}</div>}

        <button>Initialize</button>
    </div>
  )
}
