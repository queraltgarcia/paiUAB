/*Funció comprovació majúscula i error de Nom i Cognoms*/ 
function majuscula (nom){
    const Nom = document.getElementById("nom");
    if (!Nom.value.match(/^[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*(\s[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*)+$/)){
        /*Ficar que es canvi sola la primera lletra de cada paraula en majúscula*/
        document.getElementById("error_nom").textContent = "Escriviu un nom vàlid.";
    }else{
        document.getElementById("error_nom").textContent = "";
    }
}

/*Funció error de Rangs d'Edat*/
function rangsEdat (rangs_edat){
    const Rangs = document.getElementById("rangs_edat");
    if (Rangs.value === ""){
        document.getElementById("error_edat").textContent = "Seleccioneu un rang d'edats.";
    }else{
        document.getElementById("error_edat").textContent = "";
    }
}

/*Funció comprovació dels 5 dígits i error de Codi Postal*/
function codiPostal (postal){
    const Postal = getElementById("postal");
    if (!Postal.value.match(/^\d{5}$/)){
        /*Ficar que es comprovi que hi ha només 5 dígits*/
        document.getElementById("error_postal").textContent = "Escriviu un codi postal vàlid.";
    }else{
        document.getElementById("error_postal").textContent = "";
    }
}

/*Funció comprovació i error del Email*/
function correu (correu){
    const Correu = getElementById("correu");
    if (!Correu.value.match(/^[^@]+@[^@]+\.[a-z]{2,}$/i)){
        /*Ficar que comprovi si hi ha una @ i un .*/
        document.getElementById("error_correu").textContent = "Escriviu un correu vàlid.";
    }else{
        document.getElementById("error_correu").textContent = "";
    }
}

/*Funció comprovació i error Contrasenya*/
function contrasenya (contrasenya){
    const Contrasenya = getElementById("contrasenya");
    /*Ficar que comprovi si hi ha només 8 dígits i si hi ha al menys una majúscula, minúscula, 2 dígits i un caràcter especial*/
    if (!Contrasenya.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/)){
        document.getElementById("error_contrasenya").textContent = "Escriviu una contrasenya vàlida.";
    }else{
        document.getElementById(error_contrasenya).textContent = "";
    }
}

/*Funció confirmació Contrasenya*/
function confirmarContrasenya (confirmar_contrasenya){
    const Confirmar = document.getElementById("confirmar_contrasenya");
    if (Confirmar.value !== Contrasenya.value){ /*Contrasenya.value no correspon*/
        document.getElementById("error_confirmar_contrasenya").textContent = "Les contrasenyes no coincideixen";
    }else{
        document.getElementById("error_confirmar_contrasenyes").textContent = "";
    }
}