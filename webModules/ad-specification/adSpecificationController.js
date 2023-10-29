import { getOneAd, deleteOneAd } from "./adSpecificationModel.js";
import { adTemplate } from "./adSpecificationView.js";
import { printEvent } from "../tools/printEvent.js";
import { decodeToken } from "../tools/decodeToken.js";

export const adSpecificationController = async (adInfoSection, adId) => {
    try {
        printEvent('oneAdLoading', null, adInfoSection);
        const ad = await getOneAd(adId);
        printEvent('oneAdNotification', {notificationType: 'success', message: '¡Anuncio cargado correctamente!'}, adInfoSection);
        adInfoSection.innerHTML = adTemplate(ad);
        userDeleteAuthorization(ad, adInfoSection);
    } catch (error) {
        printEvent('oneAdNotification', {notificationType: 'error', message:'No se ha podido cargar el anuncio. Disculpe las molestias'}, adInfoSection);
    } finally {
        printEvent('oneAdLoadingOver', null, adInfoSection);
    }

};

const showDeleteAdButton = (ad , adInfoSection) => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar Anuncio';

    deleteButton.addEventListener('click', async () => {
        if(confirm('¿Seguro que quieres eliminar el anuncio?')) {
            await deleteOneAd(ad.id);
            window.location = 'index.html';
        }
    });
    adInfoSection.appendChild(deleteButton);
};

const userDeleteAuthorization = (ad, adInfoSection) => {
    const token = localStorage.getItem('token');

    if (token) {
        const { userId } = decodeToken(token);

        if (userId === ad.userId) {
            showDeleteAdButton(ad, adInfoSection);
        }
    }
};