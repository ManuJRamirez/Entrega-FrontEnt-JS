import { postAd } from "./postAdModel.js";
import { printEvent } from "../tools/printEvent.js"

export const postAdController = (adForm) =>{
    const postAdButton = document.getElementById('postAdButton');
    adForm.addEventListener('submit', async(event) => {
        postAdButton.disabled = true;
        event.preventDefault();

        const formData = new FormData(adForm);
        const fileInput = adForm.querySelector('#image');

        try {
            printEvent('adCreationPrintLoader', null, adForm);
            await postAd(formData, fileInput.files[0]);
            printEvent('adCreation', {notificationType: 'success', message:'¡Felicidades!¡Anuncio creado correctamente'}, adForm);
            setTimeout(() => {
                window.location = "../index.html"
            },2000);
        } catch (error) {
            printEvent('adCreation', {notificationType: 'error', message: 'Error al crear el anuncio. Intentelo de nuevo, por favor'}, adForm);
            postAdButton.disabled = false; 
        } finally{
            printEvent('adCreationHideLoader', null, adForm);
        }
    });
    
};
