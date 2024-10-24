//15.1. - Fent servir la instrucció switch escriu un programa que donat amb prompt un número de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon
/*let mes = parseInt(prompt("Introdueix un número (1-12)"));
switch(mes){
    case 1:
        text="Gener";
        break;
    case 2:
        text="Febrer";
        break;
    case 3:
        text="Març";
        break;
    case 4:
        text="Abril";
        break;
    case 5:
        text="Maig";
        break;
    case 6:
        text="Juny";
        break;
    case 7:
        text="Juliol";
        break;
    case 8:
        text="Agost"
        break;
    case 9:
        text="Setembre";
        break;
    case 10:
        text="Octubre";
        break;
    case 11:
        text="Novembre";
        break;
    case 12:
        text="Desembre";
        break;
    default:
        text="Número no vàlid";
        break;
}
console.log(text);*/

//15.2. - Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on posa dues dades:
//Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de 3.95
//Quin d’aquests sabors vol: Vainilla o Xocolata. No cal afegir res; Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.; Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
//Fes servir la instrucció switch per fer el càlcul de l’increment de preu associat al sabor.
//Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error dades mal introduïdes”.
//Si totes les dades són correctes, escriurà el preu final.
/*let envas = prompt("Introdueix el envás en el que voldrás el gelat: Conus (c) o Terrina (t)");
let sabor = prompt("Introdueix el gust de gelat que vols");
if (envas=="c"){
    switch(sabor){
        case "Vainilla":
        case "Xocolata":
            text=3.45+"$";
            break;
        case "Turró":
        case "Menta":
        case "Oreo":
            text=3.95+"$";
            break;
        case "Crema":
        case "Gerds":
        case "Ametlla":
            text=4.45+"$";
            break;
        default:
            text="Dades no valides";
            break;
    }
}else if(envas=="t"){
    switch(sabor){
        case "Vainilla":
        case "Xocolata":
            text=3.95+"$";
            break;
        case "Turró":
        case "Menta":
        case "Oreo":
            text=4.45+"$";
            break;
        case "Crema":
        case "Gerds":
        case "Ametlla":
            text=4.95+"$";
            break;
        default:
            text="Dades no valides";
            break;
    }
}
console.log(text);*/

//15.2. - Manera més fàcil de resoldre l'exercici anterior:
/*let tipusGelat = propmt("Vols un conus (c) o una terrina (t)?");
let saborGelat = prompt("Tria un sabor: Vainilla, Xocolata, Turró, Menta, Oreo, Crema, Gerds, Ametlles");
let costBase = 0;
let increment = 0;
let costFinal = 0;
if (tipusGelat==="c"){
    costBase=3.45;
}else if (tipusGelat==="t"){
    costBase=3.95;
}else{
    console.log("Dades mal introduïdes");
}
switch(saborGelat){
    case "Vainilla":
    case "Xocolata":
        increment = 0;
        break;
    case "Turró":
    case "Menta":
    case "Oreo":
        increment = 0.5;
        break;
    case "Crema":
    case "Gerds":
    case "Ametlles":
        increment = 1;
        break;
    default:
        console.log("Dades mal introduïdes");
        break;
}
if (costFinal>0 && increment>=0){
    costFinal = costBase+increment;
    console.log("El preu final del teu gelat és: "+costFinal+" $");
}*/

//15.3. - Escriu un programa, que donat una lletra que representa un dia de la setmana (l -dilluns, m - dimarts, x - dimecres, j - dijous, …) escrigui a la consola si el dia és laborable o festiu. Són laborables de dilluns a divendres. Fes servir la instrucció switch.
/*let diaSetmana = prompt("Escriu el dia de la setmana: l-dilluns, m-dimarts, x-dimecres, j-dijous, v-divendres, s-dissabte, g-diumenge");
switch(diaSetmana){
    case "l":
    case "m":
    case "x":
    case "j":
    case "v":
        text="Dia laborable";
        break;
    case "s":
    case "g":
        text="Dia festiu";
        break;
    default:
        text="Dades no vàlides";
        break;
}
console.log(text);*/