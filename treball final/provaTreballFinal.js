let errors = false;

// Funció validació del formulari
function validarFormulari() {
    errors = false;

    validaMajuscula();
    validaRangsEdat();
    validaCodiPostal();
    validaCorreu();
    validaContrasenya();
    validaConfirmarContrasenya();
    validaComprovacio();

    // Resultats
    if (!errors) {
        document.getElementById("resultats").textContent = "Formulari enviat correctament";
    } else {
        document.getElementById("resultats").textContent = "";
    }
}

// Funcions auxiliars
function validaMajuscula() {
    const Nom = document.getElementById("nom");
    const palabra = Nom.value.split(" ");
    Nom.value = Nom.value.toLowerCase().replace(/\b[a-zà-öø-ý]/g, lletra => lletra.toUpperCase());
    if (!isNaN(Nom.value.trim()) || Nom.value.trim() === "") {
        document.getElementById("error_nom").textContent = "Escriviu un nom vàlid.";
        errors = true;
    }else if (palabra.length >= 3){
        rangs_edat.disabled = false;
    }else{
        document.getElementById("error_nom").textContent = "";
    }
}

function validaRangsEdat() {
    const Rangs = document.getElementById("rangs_edat");
    if (Rangs.value === "") {
        document.getElementById("error_edat").textContent = "Seleccioneu un rang d'edats.";
        errors = true;
    }else{
        document.getElementById("error_edat").textContent = "";
        postal.disabled = false;
    }
}

function validaCodiPostal() {
    const Postal = document.getElementById("postal");
    const valor = Postal.value;
    if (isNaN(valor)) {
        document.getElementById("error_postal").textContent = "Escriviu un codi postal vàlid.";
        errors = true;
    }else{
        document.getElementById("error_postal").textContent = "";
        correu.disabled = false;
    }
}

function validaCorreu() {
    const email = document.getElementById("email").value.trim();
    const errorEmail = document.getElementById("error_email");

    // Comptem quantes '@' hi ha
    const numArrovas = email.split("@").length - 1;

    // Trobar el punt després de la primera '@'
    const arrovaIndex = email.indexOf("@");
    const puntDespresArrova = email.indexOf(".", arrovaIndex + 1);

    // Validacions
    if (numArrovas !== 1) {
        errorEmail.textContent = "El correu ha de contenir una sola '@'.";
    } else if (arrovaIndex === -1 || puntDespresArrova === -1) {
        errorEmail.textContent = "El correu ha de contenir un punt després de la '@'.";
    } else if (puntDespresArrova === arrovaIndex + 1) {
        errorEmail.textContent = "El punt no pot estar immediatament després de la '@'.";
    } else if (puntDespresArrova === email.length - 1) {
        errorEmail.textContent = "El punt no pot ser l'últim caràcter.";
    } else {
        errorEmail.textContent = ""; // Tot és correcte
        return true;
    }

    return false; // Si alguna validació falla
}

    /*const Correu = document.getElementById("correu");
    const valor = Correu.value;*/
    /*const arrova = valor.split("@");
    const text = arrova[1];
    if (arrova.length != 2 && !text.includes(".") || text.startsWith(".") || text.endsWith(".")) {
        document.getElementById("error_correu").textContent = "Escriviu un correu vàlid.";
        errors = true;
        return;
    /*}else if (!text.includes(".") || text.startsWith(".") || text.endsWith(".")) {
        document.getElementById("error_correu").textContent = "Escriviu un correu vàlid.";
        errors = true;*/
    /*}else{
        document.getElementById("error_correu").textContent = "";
    }*/


function validaContrasenya() {
    document.getElementById("mostrar_contrasenya").addEventListener("change", function () {
        const inputContrasenya = document.getElementById("contrasenya");
        if (this.checked) {
            inputContrasenya.type = "text";
        } else {
            inputContrasenya.type = "password";
        }
    });
    const Contrasenya = document.getElementById("contrasenya");
    const valor = Contrasenya.value;
    const caractersEspecials = "!@#$%^&*()_+{};:|,.<>?-=_`~";
    let errors = false;
    let conteCaracterEspecial = false;
    for (let i = 0; i < valor.length; i++) {
        if (caractersEspecials.indexOf(valor[i]) !== -1) {
            conteCaracterEspecial = true;
            break;
        }
    }
    if (valor.length < 8) {
        document.getElementById("error_contrasenya").textContent = "La contrasenya ha de tenir mínim 8 caràcters.";
        errors = true;
    }else if (!/[A-Z]/.test(valor)) {
        document.getElementById("error_contrasenya").textContent = "Ha de tenir almenys una majúscula.";
        errors = true;
    }else if (!/[a-z]/.test(valor)) {
        document.getElementById("error_contrasenya").textContent = "Ha de tenir almenys una minúscula.";
        errors = true;
    }else if (!/\d.*\d/.test(valor)) {
        document.getElementById("error_contrasenya").textContent = "Ha de tenir almenys dos dígits.";
        errors = true;
    }else if (!conteCaracterEspecial) {
        document.getElementById("error_contrasenya").textContent = "Ha de tenir almenys un caràcter especial.";
        errors = true;
    }else{
        document.getElementById("error_contrasenya").textContent = "";
    }
    if(errors){
        return false;
    }
    return true;
}

function validaConfirmarContrasenya() {
    document.getElementById("mostrar_confirmar_contrasenya").addEventListener("change", function () {
        const inputConfirmarContrasenya = document.getElementById("confirmar_contrasenya");
        if (this.checked) {
            inputConfirmarContrasenya.type = "text";
        } else {
            inputConfirmarContrasenya.type = "password";
        }
    });
    const Contrasenya = document.getElementById("contrasenya");
    const Confirmar = document.getElementById("confirmar_contrasenya");
    if (Confirmar.value !== Contrasenya.value) {
        document.getElementById("error_confirmar_contrasenya").textContent = "Les contrasenyes no coincideixen.";
        errors = true;
    }else{
        document.getElementById("error_confirmar_contrasenya").textContent = "";
    }
}

function validaComprovacio() {
    const Comprova = document.getElementById("privacitat");
    if (!Comprova.checked) {
        document.getElementById("error_privacitat").textContent = "Cal acceptar la política de privacitat.";
        errors = true;
    }else{
        document.getElementById("error_privacitat").textContent = "";
    }
}

//Afegir elements de validació a mesura que es va escrivint o seleccionant
document.getElementById("nom").addEventListener("input", validaMajuscula);
document.getElementById("rangs_edat").addEventListener("change", validaRangsEdat);
document.getElementById("postal").addEventListener("input", validaCodiPostal);
document.getElementById("correu").addEventListener("input", validaCorreu);
document.getElementById("contrasenya").addEventListener("input", validaContrasenya);
document.getElementById("confirmar_contrasenya").addEventListener("input", validaConfirmarContrasenya);
document.getElementById("privacitat").addEventListener("change", validaComprovacio);

// Afegir events click als botons
document.getElementById("enviar").addEventListener("click", validarFormulari);
document.getElementById("esborrar").addEventListener("click", esborraFormulari);

// Funció esborrar formulari
function esborraFormulari() {
    document.getElementById("formulari").reset();
    document.querySelectorAll(".errors").forEach(errors => errors.textContent = "");
}