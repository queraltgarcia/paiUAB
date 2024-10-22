//17.1. - Escriu, fent servir la instrucció while, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”
/*let i=1;
while (i<=10){
    console.log("Estem fent bucles while.");
    i+=1;
}*/

//17.2. - Escriu, fent servir la instrucció while, un programa que escrigui a la consola tots els nombres del 5 al 20.
/*let i=5;
while(i<=20){
    console.log(i);
    i++
}*/

//17.3. - Escriu un programa, fent servir la instrucció while, que, donat un número N, escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1.
/*let n= parseInt(prompt("Introdueix un número"));
while(n>=1){
    console.log(n);
    n--;
}*/

//17.5. -  Escriu un programa que, donats dos números N i M, escrigui en la consola la llista de multiplicacions N*1, N*2, N*3, N*4,...,N*M
//Per evitar problemes per la mida del resultat (en cas que N o M siguin molt grans) l’escriptura de multiplicacions s’ha d’aturar si el resultat és més gran que 999999
/*let N = parseInt(prompt("Introdueix el primer número"));
let M = parseInt(prompt("Introdueix el segon número"));
let i=0;
let multiplicacio=0;
while(i<=M){
    multiplicacio=N*i;
    if(multiplicacio>999999){
        break;
    }
    console.log(multiplicacio);
    i++;
}*/