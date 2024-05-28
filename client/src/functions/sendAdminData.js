// import 'dotenv/config'
export default async function sendAdminData(data) {
    return await fetch(`${process.env.REACT_APP_SERVER_HOST}/api/admin`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(e => console.error(e.message))
}