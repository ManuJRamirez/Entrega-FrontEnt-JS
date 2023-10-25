import { sparrestApi } from "../tools/sparrestApi.js";

export const loginAccount = async ( email, password ) => {
    const endpoint = 'auth/login';

    const data = {
        username: email,
        password: password,
    }

    await sparrestApi().loginAcc(endpoint, data)
}