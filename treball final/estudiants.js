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
    const nombreTotalAccidents = obj.length;
    document.getElementById("resultats").innerHTML = "";
    document.getElementById("resultats").textContent = "El nombre total d'accidents és de " + nombreTotalAccidents; 
}

//Dia de la setmana en que s'han produit més accidents
function exercici02() {
    const setmana = {
        "Dilluns" : 0,
        "Dimarts" : 0,
        "Dimecres" : 0,
        "Dijous" : 0,
        "Divendres" : 0,
        "Dissabte" : 0,
        "Diumenge" : 0,
    }
    for (const accident of obj){
        const diaSet = accident.diaSet.trim();
        if (setmana.hasOwnProperty(diaSet)){
            setmana[diaSet]++;
        }
    }
    let diaMax = "";
    let maxAccidents = 0;
    for (const [dia, count] of Object.entries(setmana)){
        if (count > maxAccidents){
            maxAccidents = count;
            diaMax = dia;
        }
    }
    document.getElementById("resultats").innerHTML = "";
    document.getElementById("resultats").textContent = "El dia de la setmana en que s'han produït més accidents és el " + diaMax;
}

//Accidents per districte
function exercici03() {
    const districtes = {
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
    for(const accident of obj){
        const nDist = accident.nDist; //Número del districte
        if (districtes.hasOwnProperty(nDist)){
            districtes[nDist]++;
        }
    }
    //Crear la llista desordenada i afegir-ne el districte i nombre d'accidents
    const ul = document.createElement("ul");
    for (const [districte, accidents] of Object.entries(districtes)){
        const li = document.createElement("li");
        const nomDistricte = districte === "-1" ? "Altres" : `Districte ${districte}`;
        li.textContent = `${nomDistricte}: ${accidents} accidents`; 
        ul.appendChild(li);
    }
    document.getElementById("resultats").innerHTML = "";
    document.getElementById("resultats").appendChild(ul);
}


function exercici04() {
    creaFormulari();
    const selectElement = document.getElementById("districtes");
    selectElement.addEventListener("change", function(){
        const districteSeleccionat = this.value //Obtenim el distrecte que s'ha seleccionat
        calculAccidentsDistricte(districteSeleccionat);
    })
    //Calculem i mostrem el nombre d'accidents en el districte seleccionat
    function calculAccidentsDistricte(districteSeleccionat){
        const nDistricte = districteSeleccionat === "Altres" ? -1 : obj.find(element => element.districte === districteSeleccionat)?.nDist;
        // Comptar el nombre d'accidents per al districte seleccionat
        const accidentsEnDistricte = obj.filter(accident => accident.nDist === nDistricte).length;
        // Actualitzar el resultat
        const resultats = document.getElementById("resultats");
        if (!resultats) {
            console.error("No s'ha trobat l'element amb id 'resultats'.");
            return;
        }
        resultats.innerHTML = `El nombre d'accidents al districte seleccionat (${districteSeleccionat}) és de ${accidentsEnDistricte}`;
    }
}
    

