import { loaderController } from "../tools/loader/loaderController.js";
import { notificationController } from "../tools/notifications/notificationsController.js" 
import { postAdController } from "./postAdController.js";

const token = localStorage.getItem('token');

if(!token) {
    window.location = '../index.html';
}

document.addEventListener('DOMContentLoaded', () => {

    const adCreation = document.querySelector('#adForm');
    console.log(adCreation);
    const notification = document.querySelector('#notification');
    const loaderSection = document.querySelector('#loader');
    const { printLoader, hideLoader} = loaderController(loaderSection);

    const printNotification = notificationController(notification);


    adCreation.addEventListener('adCreation', (event) =>{
        printNotification(event.detail.notificationType, event.detail.message);
        const closeNotificationByButton = document.querySelector('#close');
        closeNotificationByButton.addEventListener('click', () => {
            notification.innerHTML = '';
        })
    });
    
    adCreation.addEventListener('adCreationPrintLoader', () =>{
        printLoader();
    });

    adCreation.addEventListener('adCreationHideLoader', () =>{
        hideLoader();
    })

    postAdController(adCreation);
})