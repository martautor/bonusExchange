// import 'dotenv/config'
export default async function checkData(phone) {
    const number = phone.substring(1)
    const formattedNumber = number.replace(/\D/g, "");
    console.log(formattedNumber)
    return await fetch(`http://localhost:5000/api/findData?phone=${formattedNumber}`)
    .then(res => res.json())
}