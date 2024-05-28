// import 'dotenv/config'
export default async function findData(phone) {
    const number = phone.substring(1)
    const formattedNumber = number.replace(/\D/g, "");
    console.log(formattedNumber)
    return await fetch(`${process.env.REACT_APP_SERVER_HOST}/api/findData?phone=${formattedNumber}`)
    .then(res => res.json())
}