export default async function getFolders(tv) {
    return await fetch(`${process.env.REACT_APP_SERVER_HOST}/api/getFolders?method=${tv}`)
}