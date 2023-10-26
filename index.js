import { sessionController } from "./webModules/session/sessionController.js";

document.addEventListener('DOMContentLoaded', () => {
    const sessionNav = document.getElementById('session');
    sessionController(sessionNav);
})