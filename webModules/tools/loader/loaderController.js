import { loaderCreator } from "./loaderView.js"

export const loaderControler = () => {
    const printLoader = () => {
        loader.classList.add('active');
        loader.innerHTML = loaderCreator();
    }

    const hideLoader = () => {
        loader.classList.remove('active');
        loader.innerHTML = '';
    }

    return {
        printLoader: printLoader,
        hideLoader: hideLoader,
    }
}