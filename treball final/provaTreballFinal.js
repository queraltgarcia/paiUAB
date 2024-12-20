let errors = false;

// Funció validació del formulari
function validarFormulari() {
    errors = false;
    //Crida de les funcions de validació de cada apartat
    validaMajuscula();
    validaRangsEdat();
    validaCodiPostal();
    validaCorreu();
    validaContrasenya();
    validaConfirmarContrasenya();
    validaComprovacio();

    // Alerta formulari
    if (!errors) { //Si no hi ha cap error envia alerta
        alert("Formulari enviat correctament");
    } else { //Si queda algún error per resoldre envia alerta
        alert("Encara hi ha algún error per resoldre");
    }

    //Resultats que apareixen un cop s'accepta l'alerta "Formulari enviat correctament"
    document.getElementById("resultats").textContent = "Resultats del formulari de validació:"
    const textNomCognoms = document.getElementById("nom").value;
    document.getElementById("resultatsNomCognom").textContent = "Nom i Gognoms: " + textNomCognoms;
    const textRangEdats = document.getElementById("rangs_edat").value;
    document.getElementById("resultatsRangEdats").textContent = "Rang d'edats: " + textRangEdats;
    const textCodiPostal = document.getElementById("postal").value;
    document.getElementById("resultatsCodiPostal").textContent = "Codi postal: " + textCodiPostal;
    const textCorreu = document.getElementById("correu").value;
    document.getElementById("resultatsCorreu").textContent = "Correu electrònic: " + textCorreu;
    const textContrasenya = document.getElementById("contrasenya").value;
    document.getElementById("resultatsContrasenya").textContent = "Contrasenya: " + textContrasenya;

    //Borrarem els textos del formulari per a que només es vegi la informació dels resultats
    document.getElementById("formulari").reset();

}

// Funcions auxiliars
function validaMajuscula() {
    const Nom = document.getElementById("nom");
    //Transforma cada primera lletra de cada paraula en majúscula
    Nom.value = Nom.value
        .toLowerCase() //Converteix text en minúscules
        .split(" ") //Divideix el text en paraules separades per espais
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) //Capitalitza la primera lletra de cada paraula
        .join(" "); //Torna a unir les paraules en una sola cadena separada per espais
    // Validació del contingut
    const nomTrim = Nom.value.trim(); //Trim treu espais al principi i al final
    function esNomValid (nom){ //Funció que verifica que el text només contingui caràcters alfabètics
        const lletresValides = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZàèìòùÀÈÌÒÙáéíóúÁÉÍÓÚçÇñÑüÜ ";
        for (let i = 0; i < nom.length; i++){
            if (!lletresValides.includes(nom[i])){
                return false; //Trobem un caràcter no vàlid
            }
        }
        return true; //Tots els caràcters són vàlids
    }
    if (!esNomValid(nomTrim) || nomTrim === "") { //Comprova si el camp és un número o esta vuit
        document.getElementById("error_nom").textContent = "Escriviu un nom vàlid.";
        errors = true; 
    }else if (nomTrim.split(" ").length >= 3) { //Comprova que el camp no passa de 3 o més paraules
        rangs_edat.disabled = false; //Proporciona abilitar el següent camp
        document.getElementById("error_nom").textContent = ""; // Esborra el missatge d'error
    } else {
        document.getElementById("error_nom").textContent = ""; // Esborra el missatge d'error si no hi ha problemes
    }
}

function validaRangsEdat() {
    const Rangs = document.getElementById("rangs_edat");
    if (!Rangs.value || Rangs.value === "") { //Comprova si el valor del camp no existeix o si el usuari no ha seleccionat res
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
    if (isNaN(valor)) { //isNaN comprova si el valor no és un número
        document.getElementById("error_postal").textContent = "Escriviu un codi postal vàlid.";
        errors = true;
    }else{
        document.getElementById("error_postal").textContent = "";
        correu.disabled = false;
    }
}

function validaCorreu() {
    const email = document.getElementById("correu").value.trim();
    const numArrovas = email.split("@").length - 1; //Comptem quantes '@' hi ha
    const arrovaIndex = email.indexOf("@"); //Retorna l'index de la primera arrova que apareix
    const puntDespresArrova = email.indexOf(".", arrovaIndex + 1); //Trobar el punt després de la primera '@'
    if (numArrovas !== 1) { //Comprova que només hi ha una arrova
        document.getElementById("error_correu").textContent = "El correu ha de contenir una sola '@'.";
    } else if (arrovaIndex === -1 || puntDespresArrova === -1) { //Comprova que hi ha un punt després del arrova
        document.getElementById("error_correu").textContent = "El correu ha de contenir un punt després de la '@'.";
    } else if (puntDespresArrova === arrovaIndex + 1) { //Comprovar que el punt no estigui just després de l'arrova
        document.getElementById("error_correu").textContent = "El punt no pot estar immediatament després de la '@'.";
    } else if (puntDespresArrova === email.length - 1) { //Comprovar que el punt no és l'últim caràcter
        document.getElementById("error_correu").textContent = "El punt no pot ser l'últim caràcter.";
    } else {
        document.getElementById("error_correu").textContent = ""; //Tot és correcte
        contrasenya.disabled = false;
        return true;
    }
    return false; //Si alguna validació falla
}

function validaContrasenya() {
    document.getElementById("mostrar_contrasenya").addEventListener("change", function () {
        const inputContrasenya = document.getElementById("contrasenya");
        if (this.checked) {
            inputContrasenya.type = "text"; //Ens mostra la contrasenya
        } else {
            inputContrasenya.type = "password"; //Ens amaga la contrasenya
        }
    });
    const Contrasenya = document.getElementById("contrasenya");
    const valor = Contrasenya.value;
    const caractersEspecials = "!@#$%^&*()_+{};:|,.<>?-=_`~";
    const caractersMajuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const caractersMinuscules = "abcdefghijklmnopqrstuvwxyz";
    const caractersNumeros = "0123456789";
    let errors = false;
    let conteCaracterEspecial = false;
    let conteMajuscula = false;
    let conteMinuscula = false;
    let conteNumeros = 0;
    for (let i = 0; i < valor.length; i++) { //Comprovació per cada caràcter de la contrasenya
        const caracter = valor[i];
        if (caractersEspecials.indexOf(caracter) !== -1) { //Comprovar si és un caràcter especial
            conteCaracterEspecial = true;
        }
        if (caractersMajuscules.indexOf(caracter) !== -1){ //Comprovar si és una majuscula
            conteMajuscula = true;
        }
        if (caractersMinuscules.indexOf(caracter) !== -1){ //Comprovar si és una minuscula
            conteMinuscula = true;
        }
        if (caractersNumeros.indexOf(caracter) !== -1){ //Comptador de numeros
            conteNumeros++;
        }
    }
    if (valor.length < 8) { //Comprovar si té mínim 8 caràcters
        document.getElementById("error_contrasenya").textContent = "La contrasenya ha de tenir mínim 8 caràcters.";
        errors = true;
    }else if (!conteMajuscula) { //Comprovar si al menys té una majúscula
        document.getElementById("error_contrasenya").textContent = "Ha de tenir almenys una majúscula.";
        errors = true;
    }else if (!conteMinuscula) { //Comprovar si té al menys una minúscula
        document.getElementById("error_contrasenya").textContent = "Ha de tenir almenys una minúscula.";
        errors = true;
    }else if (conteNumeros < 2) { //Comprovar si té al menys 2 dígits
        document.getElementById("error_contrasenya").textContent = "Ha de tenir almenys dos dígits.";
        errors = true;
    }else if (!conteCaracterEspecial) { //Comprovar si té al menys un aràcter especial
        document.getElementById("error_contrasenya").textContent = "Ha de tenir almenys un caràcter especial.";
        errors = true;
    }else{
        document.getElementById("error_contrasenya").textContent = "";
    }
    if(errors){
        return false; //Indica que la contrasenya no és vàlida
    }
    confirmar_contrasenya.disabled = false;
    return true;
}

function validaConfirmarContrasenya() {
    document.getElementById("mostrar_confirmar").addEventListener("change", function () {
        const inputConfirmarContrasenya = document.getElementById("confirmar_contrasenya");
        if (this.checked) {
            inputConfirmarContrasenya.type = "text"; //Ens mostra la contrasenya
        } else {
            inputConfirmarContrasenya.type = "password"; //No ens mostra la contrasenya
        }
    });
    const Contrasenya = document.getElementById("contrasenya");
    const Confirmar = document.getElementById("confirmar_contrasenya");
    if (Confirmar.value !== Contrasenya.value) { //Comparar contrasenyes
        document.getElementById("error_confirmar_contrasenya").textContent = "Les contrasenyes no coincideixen.";
        errors = true;
    }else{
        document.getElementById("error_confirmar_contrasenya").textContent = "";
        privacitat.disabled = false;
    }
}

function validaComprovacio() {
    const Comprova = document.getElementById("privacitat");
    if (!Comprova.checked) { //Si no està marcat el checkbox
        document.getElementById("error_privacitat").textContent = "Cal acceptar la política de privacitat.";
        errors = true;
    }else{ //Si està marcat el checkbox
        document.getElementById("error_privacitat").textContent = "";
        esborrar.disabled = false;
        enviar.disabled = false;
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
    document.getElementById("formulari").reset(); //Reseteja el formulari
    document.querySelectorAll(".errors").forEach(errors => errors.textContent = ""); //Si ha quedat algún error, el borra
}