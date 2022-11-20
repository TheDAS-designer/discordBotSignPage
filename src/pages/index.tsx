import { useWeb3Modal, Web3Button } from '@web3modal/react'
import { useAccount, useSignMessage } from 'wagmi'
import Head from 'next/head'
import Euck from '../components/Euck'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRouter } from "next/router";

import {post} from "../utils/requestArray.js"
import { sign } from './api/sign'

export default function HomePage() {
  var router = useRouter();
  const { isConnected, address } = useAccount()
  const { open } = useWeb3Modal()
  const discordId = router.query["discordId"];
  const discordUserName = router.query["discordUserName"];
  // let { discordId, discordUserName } = useParams()
  useEffect(() => {
    if (discordId) {
      console.log('discordId', discordId)
    }
  }, [discordId])
  const signMessage = useSignMessage()

  useEffect(() => {
    if (!isConnected) return
    if(!signMessage) return 
    signMessage.signMessageAsync({
      message: `
purpose:\tVerify address

discordId:\t${discordId}

discordName:\t${discordUserName}

owner:\t${address}`}).then((result)=>{
  console.log("result:", result)
  sign(result).then( r => {
    console.log("query result is", r)
  })
}).catch((err) => {
  console.error("err:",err)
})
  }, [isConnected])
  return (
    <>
      <div>
        <h1>Sign message</h1>
      </div>
      <Web3Button />

      {/* <Euck address={address} discordId={"234"} discordUserName={"123"} isConnected={isConnected}/> */}
      {/* <button></button> */}
    </>
  )
}
