import { sessionController } from "./webModules/session/sessionController.js";
import { adListController } from "./webModules/ad-list/adListController.js";

document.addEventListener('DOMContentLoaded', () => {
    const sessionNav = document.getElementById('session');
    sessionController(sessionNav);

    const adList = document.getElementById('advertisement');
    adListController(adList);
})