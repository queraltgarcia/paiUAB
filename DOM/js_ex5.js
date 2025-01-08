/****** Exercici 5.1 ******/
// a.	Número d'enllaços que hi ha a la pàgina
function e51a(){
	alert("Número d'enllços: " + document.links.length);
}

// b.	Adreça (URL) del penúltim enllaç
function e51b(){
	alert("Adreça del penúltim enllaç: " + document.links[document.links.length - 2].href);
}

//c.	Numero d'enllaços que ho fan a http://www.uab.cat
function e51c(){
	var comptador = 0;
	for (var i = 0; i < document.links.length; i++){
		if (document.links[i].href === "http://www.uab.cat"){
			comptador++;
		}
	}
	alert("El nombre total d'enllaços que ho fan és de: " + comptador);
}

//d.	Número d'enllaços al tercer paràgraf.
function e51d(){
	var paragraf = document.getElementsByTagName("p");
	var enllaços = paragraf[2].getElementsByTagName("a");
	alert("Número d'enllaços del 3r paràgraf és de: " + enllaços.length);
}

/****** Exercici 5.2 ******/
// a. Al final de dels paràgrafs existents.
function e52a(){ 
	var nouParagraf = document.createElement("p");
	var text = document.createTextNode("Hola món!");
	nouParagraf.appendChild(text);
	document.body.appendChild(nouParagraf);
}

// b. Entre el segon i el tercer paràgraf.
function e52b(){
	var totsParagrafs = document.getElementsByTagName("p");
	var nouParagraf = document.createElement("p");
	var text = document.createTextNode("Hola món!");
	nouParagraf.appendChild(text);
	totsParagrafs[1].appendChild(nouParagraf);
}

/****** Exercici 5.3 ******/
// Afegir "Salve Mundi!" a la llista en penúltima posició. 
function e53a(){	
	var llista = document.getElementsById("llista");
	var numElements = llista.childNodes.length;
	var novLlista = document.createElement("LI");
	var text = document.createTextNode("Salve mundi!");
	novLlista.appendChils(text);
	llista.childNodes[numElements - 4].appendChild(novLlista);
}

// Canviar l'estil de la llista
function e53b(){
	document.getElementById("llista").style.listStyle = "none";
}

/****** Exercici 5.4 ******/
// Amagar el 2on paràgraf
function e54(){
	var paragrafs = document.getElementsByTagName("p");
	var boto = document.getElementById("mostraAmaga");
	if (paragrafs[1].style.display != "none"){
		paragrafs[1].style.display = "none";
		boto.innerHTML = "Mostra paràgraf";
	}else{
		paragrafs[1].style.display = "";
		boto.innerHTML = "Amagar paràgraf";
	}
}