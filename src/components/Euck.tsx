import { useSignMessage } from 'wagmi'

function Fuck(props: any) {

    const signMessage = useSignMessage()

    useSignMessage({
        message: `
          purpose:
  Verify address
  discordId:${props.discordId}
  discordName:${props.discordUserName}
  owner:
  ${props.address}`,
        onError: function (error: any) {
          console.error(error)
        },
        onSettled(data, error, variables, context) {
          console.log('onSettled')
          console.log(data)
          console.log(error)
          console.log(variables)
          console.log(context)
        },
        onMutate(variables) {
          console.log('onMutate:', variables)
        },
        onSuccess(data, variables, context) {
          console.log('onSuccess')
          console.log(data)
          console.log(variables)
          console.log(context)
        },
      })
  return (
    <div>
    <button className={props.isConnected?"visible":"hidden"}>
      <a>Sign</a>
    </button>
    </div>
  )
}

export default Fuck
