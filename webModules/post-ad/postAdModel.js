import { sparrestApi } from "../tools/sparrestApi.js";

export const postAd = async (formData) => {
    const endpoint = "api/commercial"

    const body = {
        name: formData.get("name"),
        price: formData.get("price"),
        opType: formData.get("operationType"),
        description: formData.get("description")
        //photo: formData.get("file")
    }

    await sparrestApi().createAd(endpoint,body);
};