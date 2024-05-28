export default async function getCurrentNumber(card) {
    return await fetch(`${process.env.REACT_APP_SERVER_HOST}/api/getCurrentNumber?card=${card}`)
}