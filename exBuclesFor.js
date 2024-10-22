//16.1. - Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.
/*for (let i=0;i<=9;i++){
    console.log("Estem fent bucles.");
}*/

//16.2. - Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els nombres del 5 al 20.
/*for (let i=5;i<=20;i++){
    console.log(i);
}*/

//16.3. - Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els nombres entre 1 i N.
/*let N = prompt("Introdueix un nombre");
let suma = 0;
for (let i=1;i<=N;i++){
    suma=suma+i;
}
console.log(suma);*/

//16.4. - Escriu un programa que, donat un nombre N, escrigui a la consola el factorial d’aquest nombre. El factorial és la multiplicació de tots els números entre 1 i N.
/*let N = prompt("Introdueix un nombre");
let multiplicacio = 1;
for (let i=1;i<=N;i++){
    multiplicacio=multiplicacio*i;
}
console.log(multiplicacio);*/

//16.5. - Escriu un programa que, donat dos números N i M (on N sempre serà menor que M) calculi la suma de tots els números entre N i M (ambdós inclosos).
/*let N = parseInt(prompt("Introdueix un número"));
let M = parseInt(prompt("Introdueix un número major que l'anterior"));
let suma = 0;
for (N;N<=M;N++){
    suma=suma+N;
}
console.log(suma);*/

//16.6. - Escriu un programa que, donat un número N, calculi la suma de tots els números parells entre 2 i N.
/*let N = parseInt(prompt("Introdueix un número"));
let suma = 0;
for (let let i=2;i<=N;i++){
    if ((i%2)==0){
        suma=suma+i;
    }
}
console.log(suma);*/

//16.7. - Escriu un programa que, donat un número N, escrigui a la consola la taula de multiplicar de N.
/*let N = parseInt(prompt("Introdueix un número"));
let multiplicacio = 1;
for (let i=0;i<=12;i++){
    multiplicacio=N*i;
    console.log(multiplicacio);
}*/

//16.8. - Escriu un programa que, donat un número N, escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1.
/*let N = parseInt(prompt("Introdueix un número"));
let resta = 0;
for (let i=0;i<N;i++){
    resta=N-i;
    console.log(resta);
}*/

//16.9. - Escriu un programa que donat un número N, escrigui N asteriscos (*)
/*let N = parseInt(prompt("Introdueix un número"));
for (let i=1;i<=N;i++){
    console.log("*");
}*/

//16.10. -  Escriu un programa que donat un número N, escrigui el següent dibuix (cas que el número introduït sigui 5).
/*let N = parseInt(prompt("Introdueix un número"));
let suma = "";
for (let i=1;i<=N;i++){
    suma=suma+"*";
    console.log(suma);
}*/

//16.11. - Escriu un programa que donat dos números N i M, crei i sumi una sèrie com la següent:
/*let N = parseInt(prompt("Introdueix un número"));
let M = parseInt(prompt("Introdueix un altre número"));
let serie = "";
let suma = 0;
for (let i=1;i<=M;i++){
    let repeticio=String(N).repeat(i);
    serie=serie+repeticio+" ";
    suma=suma+parseInt(repeticio);
    console.log(serie);
}
console.log(suma);*/