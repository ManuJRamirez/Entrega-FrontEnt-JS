import { createrAccount } from "./signupModel.js";


export const signupController = ( signupData ) =>{
    signupData.addEventListener("submit", (event) => dataChecking(event, signupData));
}

const dataChecking = async ( event , signupData ) => {
    event.preventDefault();

    const email = signupData.querySelector('#email');
    const password = signupData.querySelector('#password');
    const passwordConfirmation = signupData.querySelector('#passwordConfirmation');

    try {
        if(isDataOk( email, password, passwordConfirmation )){
            await createrAccount( email.value, password.value );
        }
    } catch (error) {
        throw error; 
    }
};

const isEmailOk = ( email ) => {
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    let result = true;

    if(!emailRegExp.test(email.value)){
        throw 'Introduzca un correo electrónico correcto';
    }
    return result;
};

const isPasswordOk = ( password, passwordConfirmation ) => {
    const passwordRegExp = new RegExp(/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/);
    let result = true;

    if(!passwordRegExp.test(password.value)) {
        throw 'Introduzca una contraseña correcta (min:8 caract max:15 caract, 1 letra, 1 letra mayúsculas, 1 número, 1 signo, sin espacios)'
    }

    if(password.value !== passwordConfirmation.value){
        throw 'Las contraseñas no son iguales'
    }
    return result; 
};

const isDataOk = ( email, password, passwordConfirmation ) => {
    return isEmailOk(email) && isPasswordOk(password, passwordConfirmation);
}