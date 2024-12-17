// Inicialitzar el formulari: desactivar tots els camps excepte el Nom
document.addEventListener("DOMContentLoaded", () => {
    const inputs = ["rangs_edat", "postal", "correu", "contrasenya", "confirmar_contrasenya", "privacitat", "enviar"];
    inputs.forEach(id => document.getElementById(id).disabled = true);

    // Activar el primer camp (Nom)
    document.getElementById("nom").disabled = false;

    // Afegir validacions individuals
    document.getElementById("nom").addEventListener("blur", validarNom);
    document.getElementById("rangs_edat").addEventListener("change", validarEdat);
    document.getElementById("postal").addEventListener("blur", validarPostal);
    document.getElementById("correu").addEventListener("blur", validarCorreu);
    document.getElementById("contrasenya").addEventListener("blur", validarContrasenya);
    document.getElementById("confirmar_contrasenya").addEventListener("blur", validarConfirmacioContrasenya);
    document.getElementById("privacitat").addEventListener("change", validarPrivacitat);
});

// Funció per validar Nom
function validarNom() {
    const Nom = document.getElementById("nom");
    const errorNom = document.getElementById("error_nom");

    Nom.value = Nom.value
        .toLowerCase()
        .replace(/\b[a-zà-öø-ý]/g, lletra => lletra.toUpperCase());

    if (!Nom.value.match(/^[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*(\s[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*)*$/)) {
        errorNom.textContent = "Escriviu un nom vàlid.";
        document.getElementById("rangs_edat").disabled = true;
    } else {
        errorNom.textContent = "";
        document.getElementById("rangs_edat").disabled = false;
    }
}

// Funció per validar Rang d'Edat
function validarEdat() {
    const Rangs = document.getElementById("rangs_edat");
    const errorEdat = document.getElementById("error_edat");

    if (Rangs.value === "") {
        errorEdat.textContent = "Seleccioneu un rang d'edats.";
        document.getElementById("postal").disabled = true;
    } else {
        errorEdat.textContent = "";
        document.getElementById("postal").disabled = false;
    }
}

// Funció per validar el Codi Postal
function validarPostal() {
    const Postal = document.getElementById("postal");
    const errorPostal = document.getElementById("error_postal");
    const valor = Postal.value;

    if (valor.length !== 5 || isNaN(valor)) {
        errorPostal.textContent = "Escriviu un codi postal vàlid.";
        document.getElementById("correu").disabled = true;
    } else {
        errorPostal.textContent = "";
        document.getElementById("correu").disabled = false;
    }
}

// Funció per validar el Correu
function validarCorreu() {
    const Correu = document.getElementById("correu");
    const errorCorreu = document.getElementById("error_correu");
    const valor = Correu.value;
    const arrova = valor.split("@");

    if (
        arrova.length !== 2 ||
        !arrova[1].includes(".") ||
        arrova[1].startsWith(".") ||
        arrova[1].endsWith(".")
    ) {
        errorCorreu.textContent = "Escriviu un correu vàlid.";
        document.getElementById("contrasenya").disabled = true;
    } else {
        errorCorreu.textContent = "";
        document.getElementById("contrasenya").disabled = false;
    }
}

// Funció per validar la Contrasenya
function validarContrasenya() {
    const Contrasenya = document.getElementById("contrasenya");
    const errorContrasenya = document.getElementById("error_contrasenya");
    const valor = Contrasenya.value;

    if (
        valor.length < 8 ||
        !/[A-Z]/.test(valor) ||
        !/[a-z]/.test(valor) ||
        !/\d.*\d/.test(valor) ||
        !/[!@#$%^&*()_+\[\]{};:|,.<>\/?\\-=_`~]/.test(valor)
    ) {
        errorContrasenya.textContent = "La contrasenya no compleix els requisits.";
        document.getElementById("confirmar_contrasenya").disabled = true;
    } else {
        errorContrasenya.textContent = "";
        document.getElementById("confirmar_contrasenya").disabled = false;
    }
}

// Funció per confirmar la Contrasenya
function validarConfirmacioContrasenya() {
    const Contrasenya = document.getElementById("contrasenya");
    const Confirmar = document.getElementById("confirmar_contrasenya");
    const errorConfirmar = document.getElementById("error_confirmar_contrasenya");

    if (Confirmar.value !== Contrasenya.value) {
        errorConfirmar.textContent = "Les contrasenyes no coincideixen.";
        document.getElementById("privacitat").disabled = true;
    } else {
        errorConfirmar.textContent = "";
        document.getElementById("privacitat").disabled = false;
    }
}

// Funció per validar la Política de Privacitat
function validarPrivacitat() {
    const Privacitat = document.getElementById("privacitat");
    const errorPrivacitat = document.getElementById("error_privacitat");

    if (!Privacitat.checked) {
        errorPrivacitat.textContent = "Cal acceptar la política de privacitat.";
        document.getElementById("enviar").disabled = true;
    } else {
        errorPrivacitat.textContent = "";
        document.getElementById("enviar").disabled = false;
    }
}

// Funció per esborrar el formulari
function esborraFormulari() {
    document.getElementById("formulari").reset();
    document.querySelectorAll(".errors").forEach(error => (error.textContent = ""));
    const inputs = ["rangs_edat", "postal", "correu", "contrasenya", "confirmar_contrasenya", "privacitat", "enviar"];
    inputs.forEach(id => document.getElementById(id).disabled = true);
    document.getElementById("nom").disabled = false;
}
