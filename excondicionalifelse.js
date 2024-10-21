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

//14.6. - En un control d’alcoholèmia necessiten un programa que els hi digui si una persona pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25
/*let carnetConduir = prompt("Tens carnet de conduir?");
let provaAlcoholemia = parseFloat(prompt("Introdueix el valor resultant de la prova d'alcoholèmia"));
if ((carnetConduir=="Si") && (provaAlcoholemia<0.25)){
    document.write("Pot conduir");
}else{
    document.write("No pot conduir");
}*/

//14.7. - Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el resultat de restar al nombre més gran el nombre més petit.
/*let numero1 = parseInt(prompt("Introdueix el primer número"));
let numero2 = parseInt(prompt("Introdueix el segon número"));
if (numero1>numero2){
    document.write(numero1-numero2);
}else{
    document.write(numero2-numero1);
}*/

//14.8. - Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una quantitat (el que cal pagar) per teclat fent servir la instrucció prompt.
//En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que el cost total és de 30€ donat que el transport és gratis.
//En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que consistirà en l’introduït més 4.95€ en concepte de cost d’enviament. 
/*let valorCompra = parseFloat(prompt("Introdueix el valor de la compra"));
if (valorCompra>=30){
    document.write("El cost a pagar és de 30$");
}else{
    valorTotal=valorCompra+4.95;
    document.write("El cost total a pagar és de "+valorTotal+"$");
}*/

//14.9. - Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on posa dues dades:
// Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de 3.95
//Quin d’aquests sabors vol:Vainilla o Xocolata No cal afegir res; Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final; Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
//Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error dades mal introduïdes”
//Si totes les dades són correctes, escriurà el preu final.
/*let envas = prompt("Introdueix en quin envás vols el gelat");
let gelat = prompt("Introdueix el sabor de gelat que vols");
let c = 3.45;
let t = 3.95;
if (envas=="Conus"){
    if (gelat=="Vainilla"||gelat=="Xocolata"){
        document.write(c);
    }else if(gelat=="Turró"||gelat=="Menta"||gelat=="Oreo"){
        document.write(3.50);
    }else if(gelat=="Crema"||gelat=="Gerds"||gelat=="Ametlles"){
        document.write(4.45);
    }
}else{
    if (gelat=="Vainilla"||gelat=="Xocolata"){
        document.write(t);
    }else if(gelat=="Turró"||gelat=="Menta"||gelat=="Oreo"){
        document.write(4.00);
    }else if(gelat=="Crema"||gelat=="Gerds"||gelat=="Ametlles"){
        document.write(4.95);
    }
}*/