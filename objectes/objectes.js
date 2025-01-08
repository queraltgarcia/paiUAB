//Exemple guiat:
class Empresa{
    constructor (nom, adreca){
        // Propietats
        this.nom = nom;
        this.adreca = adreca;
        this.deute = 0; // Quan creem l'empresa té dute 0.
    }
    //Mètode
    incrementaDeute(n){
        this.deute += n;
    }
    //Mètode
    totPagat(){
        this.deute = 0;
    }
}
class Paquet{
    constructor (origen, destinacio, cost){
        //Propietats
        this.origen = origen;
        this.destinacio = destinacio;
        this.cost = cost;
        this.lliurat = false;
    }
    //Mètode
    lliuramentFet(){
        this.origen.incrementaDeute(this.cost);
        this.lliurat = true;
    }
}

//Exercicis que podeu fer vosaltres:

// Dades d'empreses
var empreses = new Array();
empreses[0] = new Empresa("Empre SA", "Aragó, 125, Barcelona");
empreses[1] = new Empresa("Sito SL", "València, 15, Barcelona");
empreses[2] = new Empresa("Car SA", "Madrid, 333", "Barcelona");

// Dades de paquets a enviar
var paquets = new Array();
paquets[0] = new Paquet(empreses[0], empreses[1], 50); // De Empre SA a Sito SL. Cost 50
paquets[1] = new Paquet(empreses[1], empreses[2], 60); // De Sito SL a Car SA. Cost 60
paquets[2] = new Paquet(empreses[0], empreses[2], 70); // De Empre SA a Car SA. Cost 70
paquets[3] = new Paquet(empreses[2], empreses[1], 60); // De Car SA a Sito SL. Cost 60

//1. - Fer un llistat de les empreses que tenen deutes pendents.
function llistatEmpreses (){
    for (var i = 0; i < empreses.length; i++){
        document.write("Empresa: "+empreses[i].nom+"Deute: "+empreses[i].deute);
    }
}

// 2. - Fer un llistat dels paquets pendents de ser lliurats.
// Ha de incloure: nom empresa origen i final, i cost que té l'enviament del paquet.
function llistatPendents (){
    for (var i = 0; i < paquets.length; i++){
        document.write("Empresa Origen: "+paquets[i].origen+"Empresa Final: "+paquets[i].destinacio+"Cost: "+paquets[i].cost);
    }
}