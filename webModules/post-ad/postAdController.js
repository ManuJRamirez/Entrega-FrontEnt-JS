import { postAd } from "./postAdModel.js";
import { printEvent } from "../tools/printEvent.js"

export const postAdController = (adForm) =>{
    adForm.addEventListener('submit', async(event) => {
        event.preventDefault();

        const formData = new FormData(adForm);
        console.log(formData);

        try {
            printEvent('adCreationPrintLoader', null, adForm);
            await postAd(formData);
            printEvent('adCreation', {notificationType: 'success', message:'¡Felicidades!¡Anuncio creado correctamente'}, adForm);
            setTimeout(() => {
                window.location = "../index.html"
            },2000);
        } catch (error) {
            printEvent('adCreation', {notificationType: 'error', message: 'Error al crear el anuncio. Intentelo de nuevo, por favor'}, adForm);
        } finally{
            printEvent('adCreationHideLoader', null, adForm);
        }
    });
};