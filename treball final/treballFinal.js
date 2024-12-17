/*Funció comprovació majúscula i error de Nom i Cognoms*/ 
function majuscula (nom){
    const Nom = document.getElementById("nom");
    Nom.value = Nom.value
        .toLowerCase() // Primer pas: convertir-ho tot a minúscules
        .replace(/\b[a-zà-öø-ý]/g, lletra => lletra.toUpperCase()); // Capitalitzar la primera lletra de cada paraula
    if (!Nom.value.match(/^[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*(\s[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*)*$/)){
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
    const valor = Postal.value;
    if (valor.lenght !== 5 || isNaN(valor)){ //isNaN comprova si el valor no és numèric
        document.getElementById("error_postal").textContent = "Escriviu un codi postal vàlid.";
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
        return;
    }
    if (!/[A-Z]/.test(value)){
        document.getElementById("error_contrasenya").textContent = "La contrasenya ha de tenir al menys una majúscula.";
        return;
    }
    if (!/[a-z]/.test(value)){
        document.getElementById("error_contrasenya").textContent = "La contrasenya ha de tenir al menys una minúscula.";
        return;
    }
    if (!/\d.*\d/.test(valor)){
        document.getElementById("error_contrasenya").textContent = "La contrasenya ha de tenir al menys dos dígits.";
        return;
    }
    if (!/[!@#$%^&*()_+\[\]{};:|,.<>\/?\\-=_`~]/.test(valor)){
        document.getElementById("error_contrasenya").textContent = "La contrasenya ha de tenir al menys un caràcter especial.";
        return;
    }
    document.getElementById(error_contrasenya).textContent = "";
} 

/*Funció confirmació Contrasenya*/
function confirmarContrasenya (confirmar_contrasenya){
    const Confirmar = document.getElementById("confirmar_contrasenya");
    if (Confirmar.value !== Contrasenya.value){ /*Contrasenya.value no correspon*/
        document.getElementById("error_confirmar_contrasenya").textContent = "Les contrasenyes no coincideixen.";
    }else{
        document.getElementById("error_confirmar_contrasenyes").textContent = "";
    }
}

/*Funció comprovació política de privacitat*/
function comprovacio (privacitat){
    const Comprova = document.getElementById("privacitat");
    if (!Comprova.checked){
        document.getElementById("error_confirmacio").textContent = "Cal acceptar la políitica de privacitat.";

    }
}

/*Funció esborrar formulari*/
const eliminar = document.getElementById("esborrar");
eliminar.addEventListener("click", function(){
    document.getElementById("Nom").value = "";
    document.getElementById("Postal").value = "";
    document.getElementById("Correu").value = "";
    document.getElementById("Contrasenya").value = "";
    document.getElementById("Comprova").value = "";
    document.getElementById("Rangs").selectIndex = 0;
    document.getElementById("error_nom").innerText = "";
    document.getElementById("error_edat").innerText = "";
    document.getElementById("error_postal").innerText = "";
    document.getElementById("error_correu").innerText = "";
    document.getElementById("error_contrasenya").innerText = "";
    document.getElementById("error_confirmar_contrasenya").innerText = "";
    document.getElementById("error_confirmacio").innerText = "";
})

/*Funció enviar el formulari*/
const enviar = document.getElementById("enviar");
