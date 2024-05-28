export default async function getFolders() {
    return await fetch(`${process.env.REACT_APP_SERVER_HOST}/api/getFolders`)
}