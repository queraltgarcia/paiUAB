// Treballarem sempre amb una variable global, obj, què és una taula on estan 
// guardats tots els accidents de l'any. Qualsevol altre variable que necessitem
// haurà de ser, necessàriament, una variable local.

// Com que al document html no hi ha controladors d'esdeveniments, els haurem de crear aquí:

document.getElementById("exer01").addEventListener("click", exercici01);
document.getElementById("exer02").addEventListener("click", exercici02);
document.getElementById("exer03").addEventListener("click", exercici03);
document.getElementById("exer04").addEventListener("click", exercici04);

// Teniu ja definides les funcions de cada exercici (menys del cinquè), només cal
// que ompliu el codi necessari.

//Nombre total d'accidents que es produeixen a l'any seleccionat
function exercici01() { 
    const nombreTotalAccidents = obj.length; //Retorna el nombre total d'elements que conté
    document.getElementById("resultats").innerHTML = ""; //Borra qualsevol tipus de resultat anterior
    document.getElementById("resultats").textContent = "El nombre total d'accidents és de " + nombreTotalAccidents; 
}

//Dia de la setmana en que s'han produit més accidents
function exercici02() {
    const setmana = { //Creació d'objecte on cada clau correspon a un dia de la setmana inicialitzat a 0
        "Dilluns" : 0,
        "Dimarts" : 0,
        "Dimecres" : 0,
        "Dijous" : 0,
        "Divendres" : 0,
        "Dissabte" : 0,
        "Diumenge" : 0,
    }
    for (const accident of obj){ //Recorrer tots els elements de l'array obj i per cada accident fa una cosa
        const diaSet = accident.diaSet.trim(); //Agafa el dia de la setmana de l'objecte accident i elimina espais abans i després del dia
        if (setmana.hasOwnProperty(diaSet)){ //Mirar si el dia existeix en l'objecte setmana
            setmana[diaSet]++; //Incrementar el valor de la clau corresponent al dia trobat
        }
    }
    let diaMax = "";
    let maxAccidents = 0;
    for (const [dia, count] of Object.entries(setmana)){ //Transforma l'objecte en un array de parells
        if (count > maxAccidents){ //Comprova si el nombre d'accidents en un dia és superior al màxim actual
            maxAccidents = count; //Actualització del nou màxim d'accidents
            diaMax = dia; //Actualització del nou dia amb màxim d'accidents
        }
    }
    document.getElementById("resultats").innerHTML = "";
    document.getElementById("resultats").textContent = "El dia de la setmana en que s'han produït més accidents és el " + diaMax;
}

//Accidents per districte
function exercici03() {
    const districtes = { //Creació d'objecte on cada clau correspon al número de cada districte inicialitzat a 0
        "-1" : 0,
        "1" : 0,
        "2" : 0,
        "3" : 0,
        "4" : 0,
        "5" : 0,
        "6" : 0,
        "7" : 0,
        "8" : 0,
        "9" : 0,
        "10" : 0,
    }
    for(const accident of obj){ //Recorre tots els elements de l'array obj
        const nDist = accident.nDist; //Número del districte
        if (districtes.hasOwnProperty(nDist)){ //Comprovació de l'existència del districte en l'objecte creat
            districtes[nDist]++; //Incrementa el comptador d'accidents per aquell districte
        }
    }
    const ul = document.createElement("ul"); //Creació d'una llista desordenada
    for (const [districte, accidents] of Object.entries(districtes)){ //Transforma l'objecte en una llista de parells
        const li = document.createElement("li");
        const nomDistricte = districte === "-1" ? "Altres" : `Districte ${districte}`; //Si el districte és -1 se li asigna el nom Altres
        li.textContent = `${nomDistricte}: ${accidents} accidents`; //L'ordre que volem que surtin els elements de la llista
        ul.appendChild(li); //Per afegir a la llista desordenada els elements que es vagin creant
    }
    document.getElementById("resultats").innerHTML = "";
    document.getElementById("resultats").appendChild(ul);
}


function exercici04() {
    creaFormulari();
    const selectElement = document.getElementById("districtes");
    selectElement.addEventListener("change", function(){ //L'usuari tria l'opció que vulgui
        const districteSeleccionat = this.value //Obtenim el distrecte que s'ha seleccionat
        calculAccidentsDistricte(districteSeleccionat);
    })
    function calculAccidentsDistricte(districteSeleccionat){ //Calculem i mostrem el nombre d'accidents en el districte seleccionat
        const nDistricte = districteSeleccionat === "Altres" ? -1 : obj.find(element => element.districte === districteSeleccionat)?.nDist; //Si es selecciona altres es pregunta si correspon a -1 per a poder buscar-ho en el CSV de manera correcte
        const accidentsEnDistricte = obj.filter(accident => accident.nDist === nDistricte).length; //Comptar el nombre d'accidents per al districte seleccionat
        const resultats = document.getElementById("resultats");
        resultats.innerHTML = `El nombre d'accidents al districte seleccionat (${districteSeleccionat}) és de ${accidentsEnDistricte}`;
    }
}
    

