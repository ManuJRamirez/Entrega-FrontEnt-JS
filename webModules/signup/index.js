import { loaderControler } from "../tools/loader/loaderController.js";
import { notificationController } from "../tools/notifications/notificationsController.js";
import { signupController } from "./signupController.js";


const signupData = document.querySelector("#signup");
const notificationSection = document.querySelector("#notification")
const printNotification = notificationController(notificationSection);
const { printLoader, hideLoader } = loaderControler(loader);

document.addEventListener('DOMContentLoaded', () => {

    signupData.addEventListener('accountCreated', (event) =>{
        printNotification(event.detail.notificationType, event.detail.message)
        const closeNotificationByButton = document.querySelector("#close")
        closeNotificationByButton.addEventListener('click', () => {
            notificationSection.innerHTML = '';
        });
    });

    signupData.addEventListener('printLoadSignup', () =>{
        printLoader();
    });

    signupData.addEventListener('hideLoadSignup', () => {
        hideLoader();
    });

    signupController(signupData);
});
