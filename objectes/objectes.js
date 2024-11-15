//Exemple guiat:
/*class Empresa{
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
}*/

//Exercicis que podeu fer vosaltres:

//1. - Fer un llistat de les empreses que tenen deutes pendents.
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

// 2. - Fer un llistat dels paquets pendents de ser lliurats.
// Ha de incloure: nom empresa origen i final, i cost que té l'enviament del paquet.