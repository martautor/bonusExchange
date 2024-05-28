// import 'dotenv/config'
export default async function checkData(formData) {
    // fetch(`${process.env.REACT_APP_SERVER_HOST}/api/checkFieldData`, {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(res => res.json())
    // .then(res => console.log(res))
    // .catch(e => console.error(e.message))
    return await fetch(`${process.env.REACT_APP_SERVER_HOST}/api/checkData`, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(e => console.error(e.message))
}