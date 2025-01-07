//21.1. - Fes un programa que faci el següent
// Defineix una variable de tipus taula, buida. 
// Afegeixi el valor “Hola” a la posició 0. 
// Afegeixi el valor “Adeu” a la posició 1. 
// Escrigui a la consola el contingut de la taula. 
/*let array = [];
array[0] = "Hola";
array[1] = "Adeu";
console.log(array);*/

//21.2. - Al programa anterior, afegeix les instruccions necessàries:
// Afegeixi el valor “Nom” a la posició 2 de la taula. 
// Escrigui a la consola el contingut de la taula. 
// Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “ 
// Escrigui a la consola el contingut de la taula. 
/*array[2] = "Nom";
console.log(array);
array[1] = ",";
console.log(array);*/

//21.3. - Fes un programa que faci el següent: 
// Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73]. 
// Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula. 
// Guardi a la posició 6 de la taula la suma dels elements  
// Escrigui a la consola el contingut de la taula. Què passa a la posició 5?
/*let array = [];
array[0] = 23;
array[1] = 45;
array[2] = 98;
array[3] = 73;
let suma = array[0] + array[2];
console.log(suma);
array[6] = suma;
console.log(array);*/

//21.4. -  Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la taula a la consola.
/*let num = prompt("Introdueix un número: ");
let doble = num*2;
let triple = num*3;
let array = [];
array[0] = doble;
array[1] = triple;
console.log(array);*/

//21.5. - Fes un programa que, donat dos números, que demanarem per pantalla i emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la multiplicació i la divisió dels dos valors introduïts. 
/*let n1 = parseFloat(prompt("Introdueix el primer número: "));
let n2 = parseFloat(prompt("Introdueix el segon número: "));
let array = [];
array[0] = n1 + n2;
array[1] = n1 - n2;
array[2] = n1 * n2;
array[3] = n1 / n2;
console.log(array);*/

//Altra manera de fer-ho:
/*let resultats = [
    n1 + n2,
    n1 - n2,
    n1 * n2,
    n1 / n2,
];
console.log(resultats);*/

//21.6. -  Donada aquesta taula: Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició de la taula.
/*let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]; 
let primerValor = taula[0];
let ultimValor = taula[taula.length - 1];
console.log("El primer valor de la taula és: " + primerValor);
console.log("El últim valor de la taula és: " + ultimValor);*/
 
//21.7. -  Fes un programa que escrigui a la consola tots els valors emmagatzemats a la taula, un a un. 
/*let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]; 
let mida = taula.length;
for (let i=0; i<mida; i++){
    console.log(taula[i]);
}*/

//21.8. -  Fes un programa que escrigui a la consola la suma tots els valors emmagatzemats a la taula.
/*let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let suma = 0;
let mida = taula.length;
for (let i=0; i<mida; i++){
    suma=suma+taula[i];
}
console.log(suma);*/

//21.9. -  Fes un programa que crei una segona taula i emmagatzemi a ella tots els valors de la taula, tot sumant-los 25. Hi haurà d'escriure la nova taula a la consola.
/*let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let taulaNova = [];
let mida = taula.length;
for (let i=0; i<mida; i++){
    taulaNova[i] = taula[i] + 25;
}
console.log(taulaNova);*/

//21.10. - Fes un programa que calculi la mitjana dels valors emmagatzemats a la taula i l’escrigui a la consola.
/*let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let mida = taula.length;
let suma = 0;
for (let i=0; i<mida; i++){
    suma = suma + taula[i];
}
let mitjana = suma / taula.length;
console.log(mitjana);*/

//21.11. -  Fes un programa que calculi i escrigui a la consola el valor més gran i més petit de la taula. 
/*let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let numGran = taula[0];
let numPetit = taula[0];
for(let i = 1; i < taula.length; i++){
    if (taula[i] > numGran){
        numGran = taula[i];
    }
    if (taula[i] < numPetit){
        numPetit = taula[i];
    }
}
console.log("El valor més gran és: " + numGran);
console.log("El valor més petit és: " + numPetit);*/

//21.12. - Fes un programa que crei una nova taula on s’emmagatzemin només els valors parells de la taula i que escrigui el contingut d’aquesta nova taula a la consola.
/*let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let novaTaula = [];
let mida = taula.length;
for (let i=0; i<mida; i++){
    if (taula[i]%2===0){
        taulaNova[i]= taula[i];
    }
}
console.log(taulaNova);*/

//21.13. - Fes un programa que demani a l’usuari un valor (fent servir prompt()) i escrigui a la consola quants cops apareix aquest valor a la taula. 
/*let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let num = parseInt(prompt("Introdueix un nombre: "));
let contador = 0;
for (let i = 0; i < taula.length; i++){
    if (taula[i] === num){
        contador++;
    }
}
console.log("El número total de vegades que surt el nombre introduït a la taula és de: " + contador);*/

//21.14. - Fes un programa que, donats dos arrays de números:
//Comprovi si tots dos tenen el mateix número d’elements i, si és així:
//Crei una nova taula que contingui la suma de cada element que es trobi a la mateixa posició als dos arrys.
/*let arrayPrimer = [1,2,3];
let arraySegon = [2,3,4];
if (arrayPrimer.length === arraySegon.length){
    arraySuma = [];
    for (let i = 0; i < arrayPrimer.length; i++){
        arraySuma[i] = arrayPrimer[i] + arraySegon[i];
    }
}
console.log(arraySuma);*/

//21.15. - Fes un programa que, donats una taula amb números, guardi a una nova taula els valors de la primera però donant-li la volta. 
/*let array = [1,2,3,4,5];
let arrayVolta =[];
for (let i = 0; i < array.length; i++){
    arrayVolta[array.length - 1 - i] = array[i];
}
console.log(arrayVolta);*/

//21.16. - Fes un programa que demani un número a l’usuari (fent servir prompt()) i escrigui a la consola si es troba o no a la taula.
/*let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let num = parseInt(prompt("Introdueix un nombre: "));
let i = 0;
let trobat = false;
while (i < taula.length){
    if (num === taula[i]){
        console.log("El número es troba a la taula");
        trobat = true;
        break;
    }
    i++
}
if (trobat === false){
    console.log("El número no es troba a la taula");
}*/

//21.17. - Fes un programa que demani un número a l’usuari (fent servir prompt()) i escrigui a la consola si hi ha algun valor més gran a la taula.
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let num = parseInt(prompt("Introdueix un nombre: "));
let i = 0;
let varMesGran = false;
while (i < taula.length){
    if (num < taula[i]){
        console.log("Hi ha un valor més gran a la taula");
        varMesGran = true;
        break;
    }
    i++;
}
if (varMesGran === false){
    console.log("No hi ha cap valor més gran a la taula");
}