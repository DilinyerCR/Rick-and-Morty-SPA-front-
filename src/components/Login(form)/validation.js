const validator = (inputsDataLogin) => {
    let errors = {}

    if(!/^[^\s@<>()[\]\\.,;:\s@\”]+@[^\s@<>()[\]\\.,;:\s@\”]+\.[^\s@<>()[\]\\.,;:\s@\”]{2,}$/.test(inputsDataLogin.email)) {
        errors.e1 = "Ingrese un email valido"
    }

    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(inputsDataLogin.password)) {
        errors.e2 = "Ingrese una contraseña valida";
    }    

    return errors;
}

export default validator;