export const adTemplate = (ad) => {
    return `
        <span>${ad.name}</span></br>
        <span>${ad.price}</span></br>
        <span>${ad.opType}</span></br>
        <p>${ad.description}</p></br>
        <span>${ad.date}</p></br>
        
        `
}
/*
    <p>Constacto: ${ad.user.username}</p>

*/