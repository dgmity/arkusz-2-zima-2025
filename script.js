function obliczanie() {
    var szerokosc = parseFloat(document.getElementById("szerokosc").value);
    var dlugosc = parseFloat(document.getElementById("dlugosc").value);

    if (isNaN(szerokosc) || isNaN(dlugosc) || szerokosc <= 0 || dlugosc <= 0) {
        document.getElementById("wyniki").innerHTML = "Wprowadź poprawne dane.";
        return; 
    }

    var pole = szerokosc * dlugosc;
    var cena = 0;

    if (document.getElementById("laminowane").checked) {
        cena = pole * 12;
    }
    else if (document.getElementById("winylowe").checked) {
        cena = pole * 14;
    }
    else if (document.getElementById("deska").checked) {
        cena = pole * 18;
    }
    else {
        document.getElementById("wyniki").innerHTML = "Wprowadź poprawne dane.";
        return; 
    }

    document.getElementById("wyniki").innerHTML = `Pole powierzchni pomieszczenia: ${pole}, koszt montażu ${cena}`;
}
