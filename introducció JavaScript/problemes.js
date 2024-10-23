//12.1. - Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt() escrigui a la consola el doble, el triple i el quadrat del número llegit.
/*let num = parseInt(prompt("Introdueix un número"));
let doble = num*num;
let triple = num*num*num;
let quadrat = num*num*num*num;
console.log("El doble és: "+doble);
console.log("El triple és: "+triple);
console.log("El quadrat és: "+quadrat);*/

//12.2. - Fes un programa en JavaScript que calculi el perímetre i l’àrea d’un rectangle de 20 i 80 metres de costat. 
//Modifica el programa perquè els valors dels costats es demanin amb prompt(). 
/*let costat1 = parseInt(prompt("Introdueix el valor del primer costat"));
let costat2 = parseInt(prompt("Introdueix el valor del segon costat"));
let perimetre = (costat1*2)+(costat2*2);
let area = costat1*costat2;
console.log("El perímetre és: "+perimetre);
console.log("L'área és: "+area);*/

//12.3. - Fes un programa que, donat el radi d’una circumferència, calculi, a una nova variable i escrigui a la consola, la longitud de la circumferència i l’àrea del cercle.
/*let pi = 3.141593;
let radi = parseInt(prompt("Introdueix el radi de la circumferència"));
let longitud = 2*pi*radi;
let area = pi*(radi*radi);
console.log("La longitud de la ircumferència és: "+longitud);
console.log("L'área de la circumferència és: "+area);*/

//12.4. - Escriu un programa en JavaScript que calculi el sou mensual a partir del nombre d’hores treballades (160 hores) i el preu per hora treballada (12€).
/*let hores = parseInt(prompt("Introdueix el nombre d'hores treballades"));
let preu = parseInt(prompt("Introdueix el preu per hora treballada"));
let dinersTotals = hores*preu;
console.log("Els diners totals son: "+dinersTotals);*/

//12.5. - Fes un programa en JavaScript que, donades dues variables x i y, intercanviï els seus valores de manera que x acabi tenint el valor de y i y acabi tenint el valor de x.
/*let x = prompt("Introdueix la primera variable");
let v = propmt("Introdueix la segona variable");
let guardar = x;
let x = v;
let v = guardar;
console.log(x,v);*/

//12.6. - Fes un programa que escrigui a la consola el cub d’un número llegit per teclat (amb el prompt()).
/*let num = parseInt(prompt("Introdueix un número"));
let cub = num*num;
console.log("El cub d'aquest número és: "+cub);*/

//12.7. - scriu un programa d’una sola línia que faci que aparegui a la pantalla un alert que digui “Hello World”. 
/*prompt("Hello World");*/

//12.8. - Escriu un programa de dues línies que demani el nom de l’usuari amb un prompt() i escrigui un text a la consola que digui “Hola nomUsuari.
/*let nomUsuari = prompt("Escriu el teu nom d'usuari");
console.log("Hola "+nomUsuari);*/

//Exercicis per mirar "què s'escriuria a la consola":

/*let a="Hola";
let b="Adéu";
let c=a+b //Es posicionen les dues cadenes al costat.
console.log(c);*/

/*let a=true;
let b=false;
let c1=true===false;
let c2=true==1;
let c3=true===1;
console.log(c1,c2,c3);*/

/*let a=5; b=7;
let c=5 ; d="5";
let e1= a==b;
let e2= c==d;
let e3= c===d;
console.log(e1,e2,e3);*/