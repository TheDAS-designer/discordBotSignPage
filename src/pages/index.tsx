import { Web3Button } from '@web3modal/react'
import { useAccount, useSignMessage } from 'wagmi'
import { useEffect } from 'react'
import { useRouter } from "next/router";
import { sign } from './api/sign'
import { setStorage, getStorage, isSupportWindow } from '../utils/storagerUtil';

export default function HomePage() {
  var router = useRouter();
  const { isConnected, address } = useAccount()
  // const { open } = useWeb3Modal()
  const discordId = router.query["discordId"]? router.query["discordId"]: getStorage("userInfo")? getStorage("userInfo").discordId: "";
  const discordUserName = router.query["discordUserName"]? router.query["discordUserName"]: getStorage("userInfo")? getStorage("userInfo").discordUserName: "";
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
    if(!discordId || !discordUserName) return
    if(!isSupportWindow()) return
    signMessage.signMessageAsync({
      message: `
purpose:\tVerify address

discordId:\t${discordId}

discordName:\t${discordUserName}

owner:\t${address}`}).then((result)=>{

  setStorage("userInfo", {discordId, discordUserName})
  console.log("result:", result)
  sign({sign:result, discordUserName, discordId, address}).then( r => {
    console.log("query result is", r)
  })
}).catch((err) => {
  console.error("err:",err)
})
  }, [isConnected, isSupportWindow, discordId, discordUserName])
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
