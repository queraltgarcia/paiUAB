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
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let mida = taula.length;
let suma = 0;
for (let i=0; i<mida; i++){
    suma = suma + taula[i];
}
let mitjana = suma / taula.length;
console.log(mitjana);