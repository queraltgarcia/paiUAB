//13.1. - Escriu un programa que donat un número llegit amb prompt escrigui el missatge "el número llegit és negatiu" si el número és més petit que zero.
/*let numeroNegatiu = parseInt(prompt("Introdueix un número negatiu"));
if(numeroNegatiu<0){
    document.write("El número llegit és negatiu");
}*/

//13.2. - Escriu un programa que donat un número llegit amb prompt escrigui el missatge "el número llegit és parell" si el número és parell.
/*let numeroParell = parseInt(prompt("Introdueix un número"));
if ((numeroParell%2)==0){
    document.write("El número llegit és parell");
}*/

//13.3. - Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if per cada cas.
/*let numero = parseInt(prompt("Introdueix un número"));
if ((numero%2)==0){
    document.write("El número llegit és parell");
}
if ((numero%2)!=0){
    document.write("El número llegit és senar");
}*/

//13.4. - Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més gran que el segon i l’altre per comprovar si el segon número és més gran que el primer.
/*let numero1 = parseInt(prompt("Introdueix el primer número"));
let numero2 = parseInt(prompt("Introdueix el segon número"));
if (numero1>numero2){
    document.write(numero1);
}
if (numero1<numero2){
    document.write(numero2);
}*/

//13.5. - Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola el més gran dels tres. Pista: fes servir tres if cadascun d’ells per comprovar si un dels números és el més gran.
/*let numero1 = parseInt(prompt("Introdueix el primer número"));
let numero2 = parseInt(prompt("Introdueix el segon número"));
let numero3 = parseInt(prompt("Introdueix el tercer número"));
if ((numero1>numero2)&&(numero1>numero3)){
    document.write(numero1);
}
if ((numero1<numero2)&&(numero2>numero3)){
    document.write(numero2);
}
if ((numero1<numero3)&&(numero2<numero3)){
    document.write(numero3);
}*/

//13.6. - Fent servir només if, escriure un programa que donat amb prompt un número de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon
/*let numeroMes = parseInt(prompt("Introdueix un número"));
if (numeroMes==1){
    document.write("Gener");
}
if (numeroMes==2){
    document.write("Febrer");
}
if (numeroMes==3){
    document.write("Març");
}
if (numeroMes==4){
    document.write("Abril");
}
if (numeroMes==5){
    document.write("Maig");
}
if (numeroMes==6){
    document.write("Juny");
}
if (numeroMes==7){
    document.write("Juliol");
}
if (numeroMes==8){
    document.write("Agost");
}
if (numeroMes==9){
    document.write("Setembre");
}
if (numeroMes==10){
    document.write("Octubre");
}
if (numeroMes==11){
    document.write("Novembre");
}
if (numeroMes==12){
    document.write("Desembre");
}*/