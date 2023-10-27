import { getAdverts } from "./adListModel.js";
import { adListTemplate, emptyAdListTemplate } from "./adListView.js";

export const adListController = async(adList) => {
    let adverts = [];

    try {
        adverts = await getAdverts();
    } catch (error) {
        throw error
    }

    if(adverts.length === 0) {
        adList.innerHTML = emptyAdListTemplate();
    } else {
        printAdList(adverts, adList);
    }
};




const printAdList = (adverts, adList) => {
    adverts.forEach(ad => {
        const adContainer = document.createElement('div');

        adContainer.classList.add('ad');
        adContainer.innerHTML = adListTemplate(ad);

        adList.appendChild(adContainer);
    });
    console.log(adList);
}