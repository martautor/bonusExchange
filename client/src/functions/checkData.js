// import 'dotenv/config'
export default async function checkData(phone) {
    const number = phone.substring(1)
    const formattedNumber = number.replace(/\D/g, "");
    console.log(formattedNumber)
    return await fetch(`${process.env.SERVER_HOST}/api/findData?phone=${formattedNumber}`)
    .then(res => res.json())
    // if(response.status !== 200) {
    //     let msg = await response.json()
    //     throw new Error(await msg.message)
    // }
}