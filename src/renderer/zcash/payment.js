import * as Yup from 'yup'

// // TODO: remove joi and use yup since joi doesn't support browsers
const amountsSchema = Yup.array().of(
  Yup.object().shape({
    address: Yup.string().required(),
    amount: Yup.string().required(),
    memo: Yup.string()
  })
).min(1)

export default (zcashClient) => {
  const received = async (address) => zcashClient.request.z_listreceivedbyaddress(address)

  const send = async ({ from, amounts, minConfirmations = 1, fee = 0.0001 }) => {
    await amountsSchema.validate(amounts)
    return zcashClient.request.z_sendmany(from, amounts, minConfirmations, fee)
  }

  const shield = async ({
    from,
    to,
    fee = 0.0001,
    limit = 50
  }) => zcashClient.request.z_shieldcoinbase(from, to, fee, limit)

  return {
    received,
    send,
    shield
  }
}