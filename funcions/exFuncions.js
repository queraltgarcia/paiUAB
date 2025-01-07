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
function notaFinal (notaAC, notaPract, notaExam){
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
}