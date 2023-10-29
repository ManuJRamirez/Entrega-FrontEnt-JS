export const emptyAdListTemplate = () => {
    return `No hay anuncios disponibles para mostrar. Inténtelo de nuevo mas tarde`; 
}

export const adListTemplate = (ad) => {
    return `
        <a href="../ad-specification.html?id=${ad.id}">
            <span>${ad.name}</span></br>
            <span>${ad.price}€</span></br>
            <span>${ad.opType}</span></br>
            <p>${ad.description}</p></br>
            <span>${ad.date}</p></br>
        </a>
    `;
}