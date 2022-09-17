import React from 'react';
import { useState, useEffect } from 'react';
import indexStyle from "../../styles/WalletInfo.module.css"
import { useConnection, useWallet,useAnchorWallet,  } from '@solana/wallet-adapter-react';
import * as web3 from "@solana/web3.js";
import IDL from "../../stonksdefi.json";
import { Program, AnchorProvider } from '@project-serum/anchor';

export default function WalletInfo() {

    const [accountInfo, setaccountInfo] = useState<web3.AccountInfo<Buffer>>()


    useEffect(()=>{

        const getAccinfo = async()=>{
            if(wallet){
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

    const getProvider = async()=>{
        
      if(wallet){
          const provider = new AnchorProvider(connection, wallet, "confirmed" as web3.ConfirmOptions );

          return provider

      }
  }


    const wallet = useAnchorWallet();
    const pk = wallet?.publicKey?.toBase58();
    const connection = new web3.Connection("http://127.0.0.1:8899", "confirmed");
    

    const idl = JSON.parse(JSON.stringify(IDL));
    const programid = new web3.PublicKey(idl.metadata.address);

    

    


    const Initialize = async() =>{

      const status = "Just initialized";

      const provider = await getProvider();

      if(provider){
        
        const countprogram = new Program(idl, programid, provider);

        
      
      }




      console.log(status);
    }
   

    

  return (
    <div className={indexStyle.walletinfo}>
       <div className={indexStyle.pubkey}>PublicKey: {pk}</div>
       {accountInfo&& <div>Sol available: {accountInfo.lamports/web3.LAMPORTS_PER_SOL}</div>}

        <button onClick={Initialize}>Initialize</button>
    </div>
  )
}
