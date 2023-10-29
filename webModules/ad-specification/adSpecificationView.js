export const adTemplate = (ad, user) => {
    return `
        <span>${ad.name}</span></br>
        <span>${ad.price}</span></br>
        <span>${ad.opType}</span></br>
        <p>${ad.description}</p></br>
        <span>${ad.date}</p></br>
        <p>Contacto: ${ad.user.username}</p>
        
        `
    }
    /*

*/