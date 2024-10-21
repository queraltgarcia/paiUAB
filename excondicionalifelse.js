//14.1. - Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el número llegit és positiu” en cas contrari.
/*let numero = parseInt(prompt("Escriu un número"));
if (numero<0){
    document.write("El núemro llegit és negatiu");
}else{
    document.write("El número llegit és positiu");
}*/

//14.2. - Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el número es parell i “el número llegit es senar” en cas contrari.
/*let numero = parseInt(prompt("Escriu un número"));
if ((numero%2)==0){
    document.write("El número llegit és parell");
}else{
    document.write("El número llegit és senar");
}*/

//14.3. - Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola quin és el més gran. Només pots fer servir una instrucció if-else.
/*let numero1 = parseInt(prompt("Introdueix el primer número"));
let numero2 = parseInt(prompt("Introdueix el segon número"));
if (numero1>numero2){
    document.write(numero1);
}else{
    document.write(numero2);
}*/

//14.4. - Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola quin es el més gran. Pista. Comprova si el primer número llegit és el més gran. Si no és així, comprova si el més gran és el segon. Si tampoc ho és, el més gran, sens dubte, serà el tercer.
/*let numero1 = parseInt(prompt("Introdueix el primer número"));
let numero2 = parseInt(prompt("Introdueix el segon número"));
let numero3 = parseInt(prompt("Introdueix el tercer número"));
if ((numero1>numero2)&&(numero1>numero3)){
    document.write(numero1);
}else if ((numero1<numero2)&&(numero2>numero3)){
    document.write(numero2);
}else{
    document.write(numero3);
}*/

//14.5. - Escriu un programa que, donats tres números llegits amb prompt, escrigui a la consola els tres números ordenats.
/*let numero1 = parseInt(prompt("Introdueix el primer número"));
let numero2 = parseInt(prompt("Introdueix el segon número"));
let numero3 = parseInt(prompt("Introdueix el tercer número"));
if (((numero1>numero2)&&(numero1>numero3))&&(numero2>numero3)){
    document.write(numero1,numero2,numero3);
}else if (((numero1>numero2)&&(numero1>numero3))&&(numero3>numero2)){
    document.write(numero1,numero3,numero2);
}
if (((numero1<numero2)&&(numero2>numero3))&&(numero1>numero3)){
    document.write(numero2,numero1,numero3);
}else if (((numero1<numero2)&&(numero2>numero3))&&(numero3>numero1)){
    document.write(numero2,numero3,numero1);
}
if (((numero3>numero2)&&(numero3>numero1))&&(numero1>numero2)){
    document.write(numero3,numero1,numero2);
}else if (((numero3>numero2)&&(numero3>numero1))&&(numero2>numero1)){
    document.write(numero3,numero2,numero1);
}*/