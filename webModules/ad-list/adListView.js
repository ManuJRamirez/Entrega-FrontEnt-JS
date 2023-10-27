export const emptyAdListTemplate = () => {
    return `No hay anuncios disponibles para mostrar. Inténtelo de nuevo mas tarde`; 
}

export const adListTemplate = (ad) => {
    return `
        <a href="../ad-specification.html?id=${ad.id}">
            <span>${ad.name}</span>
            <span>${ad.price}</span>
            <span>${ad.opType}</span>
            <p>${ad.description}</p>
            <span>${ad.date}</p>
        </a>
    `;
}