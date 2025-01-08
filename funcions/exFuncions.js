//3.1. - Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat una cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció.
/*function nombre (parametre){
    let resultat = "";
    if (parametre%2 === 0){
        resultat = "El nombre és parell";
    }else{
        resultat = "El nombre és imparell";
    }
    return resultat;
}*/ 

//3.2. - Escriu un script que comprovi si un any donat és de traspàs. Un any és de traspàs si és múltiple de 4, excloent els que siguin múltiples de 100, però no els que siguin múltiples de 400. 
/*function traspas (any){
    let resultat = "";
    if (any%4 === 0){
        resultat = True;
    }else if (any%100 === 0 && any%400 !== 0){
        resultat = False;
    }
    return resultat;
}*/

//3.3. - Feu un script que inclogui una funció que, donat un enter N, retorni ∑ (1 / n2 ) per a 0 < n ≤ N.
/*function sumatori (N){
    let suma = 0;
    for (let i=1; i<=N; i++){
        suma = suma+1 / (i*i);
    }
    return suma;
}*/

//3.4. - Feu una funció que calculi la nota final d'un alumne.
//L'script ha de rebre per teclat el següent:  Nota final d’avaluació continuada, Nota de pràctiques i Nota d’examen,
//i es mostrarà per pantalla la nota final en base a les formules donades.
/*function notaFinal (notaAC, notaPract, notaExam){
    let notaFi = 0;
    let notaFiEscrit = "";
    if (notaAC >= 5){
        notaFi = 0.2*notaAC + 0.4*notaPract + 0.4*notaExam;
    }else{
        notaFi = 0.4*notaPract + 0.6*notaExam;
    }
    if (notaFi < 5){
        notaFiEscrit = "D";
    }else if(5 <= notaFi < 6.5){
        notaFiEscrit = "C";
    }else if(6.5 <= notaFi < 8){
        notaFiEscrit = "B";
    }else if(8 <= notaFi < 10){
        notaFiEscrit = "A";
    }else if(notaFi === 10){
        notaFiEscrit = "H"
    }
    return notaFiEscrit;
}*/

//3.5. - Hem organitzat un concurs a Twitter que consisteix en fer relats curs (màxim 280 caràcters) amb el màxim número de paraules de 5 caràcters.
// Per poder donar el premi, el que volem fer és classificar tots  els tuits segons el nombre de paraules de 5 caràcters que tenen i, per tant,
// necessitem una funció que, donada una frase, ens retorni el número de paraules de 5 caràcters que té.
/*function concurs (frase, numLletres){
    let lletres = 0;
    let paraules5Lletres = 0;
    let i = 0;
    while (frase[i] !== "."){
        if (frase[i] === " "){
            if(lletres === numLletres){
                paraules5Lletres++;
            }
            lletres = 0;
        }else if(frase[i] !== ","){
            lletres++;
        }
        i++;
    }
    if (lletres === numLletres){
        paraules5Lletres++;
    }
    return paraules5Lletres;
}*/

//19.1. - Crea una funció que rebi un nombre i retorni aquest nombre elevat al quadrat.
/*function quadrat (num){
    elevat = num * num;
    return elevat;
}*/

//19.2. - Crea una funció que rebi un nombre i retorni aquest nombre elevat al cub.
/*function cub (num){
    elevat = num * num * num;
    return elevat;
}*/

//19.3. - Crea una funció que rebi dos nombres i retorni el primer nombre elevat al segon.
/*function elevat (num1, num2){
    return Math.pow(num1, num2);
}*/

//19.4. - Crea una funció que donat un valor en milles retorni la seva equivalència en metros.
/*function equivalencia (num){
    return num * 1853;
}*/

//19.5. - Crea una funció que, donat un nombre del 0 al 10 retorni una cadena de caràcters amb el nom del nombre donat. 
/*function nombres (num){
    if (0 < num < 10){
        if (num === 0){
            return "Zero";
        }else if (num === 1){
            return "Un";
        }else if (num === 2){
            return "Dos";
        }else if (num === 3){
            return "Tres";
        }else if (num === 4){
            return "Quatre";
        }else if (num === 5){
            return "Cinc";
        }else if (num === 6){
            return "Sis";
        }else if (num === 7){
            return "Set";
        }else if (num === 8){
            return "Vuit";
        }else if (num === 9){
            return "Nou";
        }else if (num === 10){
            return "Deu";
        }
    }else{
        return "El nombre no és entre 0 i 10";
    }
}*/

//19.6. -  Crea una funció que, rebut un nombre de segons retorni una cadena de caràcters on es digui quantes hores minuts i segons són.
/*function conversio (segons){
    let minuts = segons / 60;
    let hores = minuts / 60;
    return "Són " + minuts + " minuts i " + hores + " hores.";
}*/

//19.10. -  Crea una funció en la que donat un text, indiqui si és o no un palíndrom. 
/*function palindrom (text){
    let textRevers = text.split('').reverse().join('');
    if (textRevers === text){
        return "El text introduït és un palíndrom";
    }else{
        return "El text introduït no és un palíndrom";
    }
}*/

//19.11. -  Crea una funció que rebi una cadena de caràcters i retorni aquesta cadena codificada segons les següents regles: 
//Es posaran les paraules en l’ordre invers  
//Els caràcters que conformen les paraules també s’han d’invertir. 
//Les vocals que apareguin s’han de canviar pel seu número equivalent (a=1, e=2, i=3, o=4 i u=5) 
/*function codificacio (cadena){
    let cadenaRevers = cadena.split('').reverse().join('');
    let vocals = {'a':'1', 'e':'2', 'i':'3', 'o':'4', 'u':'5', 'A':'1', 'E':'2', 'I':'3', 'O':'4', 'U':'5' };
    let resultat = '';
    for (let i = 0; i < cadena.length; i++){
        let caracter = cadenaRevers[i];
        resultat = resultat + vocals[caracter] || caracter;
    }
    return resultat;
}*/

//19.12. - Crea una funció que rep els tres paràmetres següents: 2 nombres i un dels següents valors "+", "-", "*", "/", "%", "pot" i retorni el resultat de l'operació realitzada.
/*function calculadora (num1, num2, valor){
    let resultat;
    switch(valor){
        case "+":
            resultat = num1 + num2;
            break;
        case "-":
            resultat = num1 - num2;
            break;
        case "*":
            resultat = num1 * num2;
            break;
        case "/":
            resultat = num1 / num2;
            break;
        case "%":
            resultat = num1 % num2;
            break;
        case "pot":
            resultat = Math.pow(num1, num2);
            break;
        default:
            resultat = "No has posat cap valor corresponent.";
    }
    return "El resultat de l'operació triada és: " + resultat;
}*/

//19.13. -  Crea una funció que rebi un nombre i retorni cert si aquest nombre és primer o fals en cas contrari.
/*function comprovarNombre (num){
    if (num % 2 === 0){
        return "El nombre no és primer";
    }else{
        return "El nombre és primer";
    }
}*/

//19.14. - Crea una funció que donat un nombre N, retorni en una taula tots els nombres primers des d'1 fins a N. 
/*let taula = [];
let primer;
let index = 0;
function comprovarPrimer (num){
    if (num % 2 === 0){
        primer = false;
    }else{
        primer = true;
    }
    for (let i = 2; i <= num; i++){
        if (comprovarPrimer(i)){
            taula[index] = i;
            index++;
        }
    }
    return taula;
}*/

//19.16. - Crea una funció que, donada una cadena de caràcters tipus "abcdefghijklmn." acabada sempre en punt, retorni quantes a hi ha a la cadena.
/*let comptador = 0;
function comptadorA (cadena){
    for (let i = 0; i < cadena.length; i++){
        if (cadena[i] === "a"){
            comptador++;
        }
    }
    return comptador;
}*/

//19.17. - Crea una funció que, donada una cadena de caràcters amb una frase on les paraules estan separades només per un espai en blanc i acaba en un punt, comptar quantes paraules té la frase.
/*function comptarParaules (cadena){
    if (cadena[cadena.length - 1] !== "."){
        return "La frase no acaba amb un punt.";
    }
    let espais = 0;
    for (let i = 0; i < cadena.length; i++){
        if (cadena[i] === " "){
            espais++;
        }
    }
    return espais + 1;
}*/

//19.18. - Donada una cadena de caràcters on les paraules estan separades només per un espai en blanc i acabada en un punt, comptar quantes paraules de la frase tenen la ce trencada.
/*function ceTrencada (cadena){
    let lletra = 0;
    let paraules = cadena.split (" ");
    for (let paraula of paraules){
        if (paraula.includes("ç")){
            lletra++;
        }
    }
    return lletra;
}*/

//19.19. -  Donada una taula amb números entre 0 i 9, retorni una altra taula de 10 posicions, on hi hagi guardat a cada posició el número de vegades que apareix un determinat número.
/*function creaTaulaVegades (taula){
    let novaTaula = [];
    let i = 0;
    while(i < taula.length){
        novaTaula[i] = comptaCaracter(taula, i);
        i++;
    }
    return novaTaula;
}
function comptaCaracter(taula, num){
    let i = 0;
    let cont = 0;
    while (i < taula.length){
        if (taula[i] === num){
            cont++;
        }
        i++
    }
    return cont;
}*/