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
    const anyAccidents = document.getElementById("any");
    document.getElementById("resultats").textContent = "El nombre total d'accidents l'any " + anyAccidents + " és de " + nombreTotalAccidents; 
}

//Dia de la setmana en que s'han produit més accidents
/*function exercici02() {
    const setmana = {
        "Dilluns" = 0;
        "Dimarts" = 0;
        "Dimecres" = 0;
        "Dijous" = 0;
        "Divendres" = 0;
        "Dissabte" = 0;
        "Diumenge" = 0;
    }
    for obj 

}*/


function exercici03() {
 
}


function exercici04() {
    creaFormulari();
}
