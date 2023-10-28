import { loginController } from "./loginController.js";
import { loaderController } from "../tools/loader/loaderController.js"
import { notificationController } from "../tools/notifications/notificationsController.js"

const loginFormData = document.querySelector('#login');
const loaderSection = document.querySelector('#loader');
const { printLoader, hideLoader} = loaderController(loaderSection);
const notificationSection = document.querySelector('#notification');
const printNotification = notificationController(notificationSection);
document.addEventListener('DOMContentLoaded', () => {
   
    loginFormData.addEventListener('loginNotification', (event) =>{
        printNotification(event.detail.notificationType, event.detail.message);
        const closeNotificationByButton = document.querySelector('#close');
        closeNotificationByButton.addEventListener('click', () => {
            notificationSection.innerHTML = '';
        })
    });

    loginFormData.addEventListener('printLoadLogin', () => {
        printLoader();
    });

    loginFormData.addEventListener('hideLoadLogin', () => {
        hideLoader();
    })



    loginController(loginFormData);

})