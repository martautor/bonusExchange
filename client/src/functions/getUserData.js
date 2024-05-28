export default async function getUserData(card) {
    return await fetch(`${process.env.REACT_APP_SERVER_HOST}/api/getUserData?card=${card}`)
    .then(res => res.json())
}