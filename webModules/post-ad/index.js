import { loaderController } from "../tools/loader/loaderController.js";
import { notificationController } from "../tools/notifications/notificationsController.js" 
import { postAdController } from "./postAdController.js";
import { closeByButtonController } from "../tools/notifications/closeByButton.js"

const token = localStorage.getItem('token');

if(!token) {
    window.location = '../index.html';
}

document.addEventListener('DOMContentLoaded', () => {

    const adCreation = document.querySelector('#adForm');
    console.log(adCreation);
    const notificationSection = document.querySelector('#notification');
    const loaderSection = document.querySelector('#loader');
    const { printLoader, hideLoader} = loaderController(loaderSection);

    const printNotification = notificationController(notificationSection);


    adCreation.addEventListener('adCreation', (event) =>{
        printNotification(event.detail.notificationType, event.detail.message);
        closeByButtonController(notificationSection);
    });
    
    adCreation.addEventListener('adCreationPrintLoader', () =>{
        printLoader();
    });

    adCreation.addEventListener('adCreationHideLoader', () =>{
        hideLoader();
    })

    postAdController(adCreation);
})