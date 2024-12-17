document.getElementById("enviar").addEventListener("click", validarFormulari);
document.getElementById("esborrar").addEventListener("click", esborraFormulari);

/*Funció validació del formulari*/
function validarFormulari(){
    let errors = false;
    /*Funció comprovació majúscula i error de Nom i Cognoms*/ 
    function majuscula (nom){
        const Nom = document.getElementById("nom");
        Nom.value = Nom.value
            .toLowerCase() // Primer pas: convertir-ho tot a minúscules
            .replace(/\b[a-zà-öø-ý]/g, lletra => lletra.toUpperCase()); // Capitalitzar la primera lletra de cada paraula
        if (!Nom.value.match(/^[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*(\s[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*)*$/)){
            document.getElementById("error_nom").textContent = "Escriviu un nom vàlid.";
            errors = true;
        }else{
            document.getElementById("error_nom").textContent = "";
        }
    }
    /*Funció error de Rangs d'Edat*/
    function rangsEdat (rangs_edat){
        const Rangs = document.getElementById("rangs_edat");
        if (Rangs.value === ""){
            document.getElementById("error_edat").textContent = "Seleccioneu un rang d'edats.";
            errors = true;
        }else{
            document.getElementById("error_edat").textContent = "";
        }
    }
    /*Funció comprovació dels 5 dígits i error de Codi Postal*/
    function codiPostal (postal){
        const Postal = getElementById("postal");
        const valor = Postal.value;
        if (valor.lenght !== 5 || isNaN(valor)){ //isNaN comprova si el valor no és numèric
            document.getElementById("error_postal").textContent = "Escriviu un codi postal vàlid.";
            errors = true;
        }else{
            document.getElementById("error_postal").textContent = "";
        }
    }
    /*Funció comprovació i error del Email*/
    function correu (correu){
        const Correu = getElementById("correu");ç
        const valor = Correu.value;
        const arrova = valor.split("@");
        if (arrova.lenght != 2){
            document.getElementById("error_correu").textContent = "Escriviu un correu vàlid.";
            return;
        }
        const text = arrova[1];
        if (!text.includes(".") || text.startsWith(".") || text.endsWith(".")){
            document.getElementById("error_correu").textContent = "Escriviu un correu vàlid."; 
            errors = true;
            return;
        }
        document.getElementById("error_correu").textContent = "";
    }
    /*Funció comprovació i error Contrasenya*/
    function contrasenya (contrasenya){
        const Contrasenya = getElementById("contrasenya");
        const valor = Contrasenya.value;
        if (valor.lenght < 8){
            document.getElementById("error_contrasenya").textContent = "La contrasenya ha de tenir mínim 8 caràcters.";
            errors = true;
            return;
        }
        if (!/[A-Z]/.test(value)){
            document.getElementById("error_contrasenya").textContent = "La contrasenya ha de tenir al menys una majúscula.";
            errors = true;
            return;
        }
        if (!/[a-z]/.test(value)){
            document.getElementById("error_contrasenya").textContent = "La contrasenya ha de tenir al menys una minúscula.";
            errors = true;
            return;
        }
        if (!/\d.*\d/.test(valor)){
            document.getElementById("error_contrasenya").textContent = "La contrasenya ha de tenir al menys dos dígits.";
            errors = true;
            return;
        }
        if (!/[!@#$%^&*()_+\[\]{};:|,.<>\/?\\-=_`~]/.test(valor)){
            document.getElementById("error_contrasenya").textContent = "La contrasenya ha de tenir al menys un caràcter especial.";
            errors = true;
            return;
        }
        document.getElementById(error_contrasenya).textContent = "";
    } 
    /*Funció confirmació Contrasenya*/
    function confirmarContrasenya (confirmar_contrasenya){
        const Confirmar = document.getElementById("confirmar_contrasenya");
        if (Confirmar.value !== Contrasenya.value){ /*Contrasenya.value no correspon*/
            document.getElementById("error_confirmar_contrasenya").textContent = "Les contrasenyes no coincideixen.";
            errors = true;
        }else{
            document.getElementById("error_confirmar_contrasenyes").textContent = "";
        }
    }
    /*Funció comprovació política de privacitat*/
    function comprovacio (privacitat){
    const Comprova = document.getElementById("privacitat");
    if (!Comprova.checked){
        document.getElementById("error_privacitat").textContent = "Cal acceptar la políitica de privacitat.";
        errors = true;
    }else{
        document.getElementById("error_privacitat").textContent = "";
    }

    /*Resultats*/
    if (!errors){
        document.getElementById("resultats").textContent = "Formulari enviat correctament";
    }else{
        document.getElementById("resultats").textContent = "";
    }
}

/*Funció esborra formulari*/
function esborraFormulari(){
    document.getElementById("formulari").reset();
    document.querySelectorAll(".errors").forEach(errors => errors.textContent = "");
}







