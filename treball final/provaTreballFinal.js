let errors = false;

// Funció validació del formulari
function validarFormulari() {
    errors = false;

    majuscula();
    rangsEdat();
    codiPostal();
    correu();
    contrasenya();
    confirmarContrasenya();
    comprovacio();

    // Resultats
    if (!errors) {
        document.getElementById("resultats").textContent = "Formulari enviat correctament";
    } else {
        document.getElementById("resultats").textContent = "";
    }
}

// Funcions auxiliars
function majuscula() {
    const Nom = document.getElementById("nom");
    Nom.value = Nom.value.toLowerCase().replace(/\b[a-zà-öø-ý]/g, lletra => lletra.toUpperCase());
    if (!isNaN(Nom.value.trim()) || Nom.value.trim() === "") {
        document.getElementById("error_nom").textContent = "Escriviu un nom vàlid.";
        errors = true;
    }else{
        document.getElementById("error_nom").textContent = "";
    }
}

function rangsEdat() {
    const Rangs = document.getElementById("rangs_edat");
    if (Rangs.value === "") {
        document.getElementById("error_edat").textContent = "Seleccioneu un rang d'edats.";
        errors = true;
    }else{
        document.getElementById("error_edat").textContent = "";
    }
}

function codiPostal() {
    const Postal = document.getElementById("postal");
    const valor = Postal.value;
    if (valor.length !== 5 || isNaN(valor)) {
        document.getElementById("error_postal").textContent = "Escriviu un codi postal vàlid.";
        errors = true;
    }else{
        document.getElementById("error_postal").textContent = "";
    }
}

function correu() {
    const Correu = document.getElementById("correu");
    const valor = Correu.value;
    const arrova = valor.split("@");
    const text = arrova[1];
    if (arrova.length != 2) {
        document.getElementById("error_correu").textContent = "Escriviu un correu vàlid.";
        errors = true;
        return;
    }else if (!text.includes(".") || text.startsWith(".") || text.endsWith(".")) {
        document.getElementById("error_correu").textContent = "Escriviu un correu vàlid.";
        errors = true;
    }else{
        document.getElementById("error_correu").textContent = "";
    }
}

function contrasenya() {
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

function confirmarContrasenya() {
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

function comprovacio() {
    const Comprova = document.getElementById("privacitat");
    if (!Comprova.checked) {
        document.getElementById("error_privacitat").textContent = "Cal acceptar la política de privacitat.";
        errors = true;
    }else{
        document.getElementById("error_privacitat").textContent = "";
    }
}

//Afegir elements de validació a mesura que es va escrivint o seleccionant
document.getElementById("nom").addEventListener("input", majuscula);
document.getElementById("rangs_edat").addEventListener("change", rangsEdat);
document.getElementById("postal").addEventListener("input", codiPostal);
document.getElementById("correu").addEventListener("input", correu);
document.getElementById("contrasenya").addEventListener("input", contrasenya);
document.getElementById("confirmar_contrasenya").addEventListener("input", confirmarContrasenya);
document.getElementById("privacitat").addEventListener("change", comprovacio);

// Afegir events click als botons
document.getElementById("enviar").addEventListener("click", validarFormulari);
document.getElementById("esborrar").addEventListener("click", esborraFormulari);

// Funció esborrar formulari
function esborraFormulari() {
    document.getElementById("formulari").reset();
    document.querySelectorAll(".errors").forEach(errors => errors.textContent = "");
}