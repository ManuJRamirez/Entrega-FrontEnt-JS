import { sparrestApi } from "../tools/sparrestApi.js";

export const postAd = async (formData) => {
    const endpoint = "api/commercial"
    const dateNow = new Date();
    const date = dateNow.toString();

    const body = {
        name: formData.get("name"),
        price: formData.get("price"),
        opType: formData.get("operationType"),
        description: formData.get("description"),
        date: date
        //photo: formData.get("file")
    }

    await sparrestApi().createAd(endpoint,body);
};