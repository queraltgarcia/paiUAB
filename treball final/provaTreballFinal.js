// Afegir events click als botons
document.getElementById("enviar").addEventListener("click", validarFormulari);
document.getElementById("esborrar").addEventListener("click", esborraFormulari);

// Funció validació del formulari
function validarFormulari() {
    let errors = false;

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

// Funció esborrar formulari
function esborraFormulari() {
    document.getElementById("formulari").reset();
    document.querySelectorAll(".errors").forEach(errors => errors.textContent = "");
}

// Funcions auxiliars
function majuscula() {
    const Nom = document.getElementById("nom");
    Nom.value = Nom.value
        .toLowerCase()
        .replace(/\b[a-zà-öø-ý]/g, lletra => lletra.toUpperCase());
    if (!isNaN(Nom.value) && Nom.value.trim() !== "") {
        document.getElementById("error_nom").textContent = "Escriviu un nom vàlid.";
        errors = true;
    }
}

function rangsEdat() {
    const Rangs = document.getElementById("rangs_edat");
    if (Rangs.value === "") {
        document.getElementById("error_edat").textContent = "Seleccioneu un rang d'edats.";
        errors = true;
    }
}

function codiPostal() {
    const Postal = document.getElementById("postal");
    const valor = Postal.value;
    if (valor.length !== 5 || isNaN(valor)) {
        document.getElementById("error_postal").textContent = "Escriviu un codi postal vàlid.";
        errors = true;
    }
}

function correu() {
    const Correu = document.getElementById("correu");
    const valor = Correu.value;
    const arrova = valor.split("@");
    if (arrova.length != 2) {
        document.getElementById("error_correu").textContent = "Escriviu un correu vàlid.";
        errors = true;
        return;
    }
    const text = arrova[1];
    if (!text.includes(".") || text.startsWith(".") || text.endsWith(".")) {
        document.getElementById("error_correu").textContent = "Escriviu un correu vàlid.";
        errors = true;
    }
}

function contrasenya() {
    const Contrasenya = document.getElementById("contrasenya");
    const valor = Contrasenya.value;
    if (valor.length < 8) {
        document.getElementById("error_contrasenya").textContent = "La contrasenya ha de tenir mínim 8 caràcters.";
        errors = true;
    }
    if (!/[A-Z]/.test(valor)) {
        document.getElementById("error_contrasenya").textContent = "Ha de tenir almenys una majúscula.";
        errors = true;
    }
    if (!/[a-z]/.test(valor)) {
        document.getElementById("error_contrasenya").textContent = "Ha de tenir almenys una minúscula.";
        errors = true;
    }
    if (!/\d.*\d/.test(valor)) {
        document.getElementById("error_contrasenya").textContent = "Ha de tenir almenys dos dígits.";
        errors = true;
    }
    if (!/[!@#$%^&*()_+\[\]{};:|,.<>\/?\\-=_`~]/.test(valor)) {
        document.getElementById("error_contrasenya").textContent = "Ha de tenir almenys un caràcter especial.";
        errors = true;
    }
}

function confirmarContrasenya() {
    const Contrasenya = document.getElementById("contrasenya");
    const Confirmar = document.getElementById("confirmar_contrasenya");
    if (Confirmar.value !== Contrasenya.value) {
        document.getElementById("error_confirmar_contrasenya").textContent = "Les contrasenyes no coincideixen.";
        errors = true;
    }
}

function comprovacio() {
    const Comprova = document.getElementById("privacitat");
    if (!Comprova.checked) {
        document.getElementById("error_privacitat").textContent = "Cal acceptar la política de privacitat.";
        errors = true;
    }
}
