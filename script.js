
//e = enter
//o = ober
//i = imes
//a = ai
//u = ufat

function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    //i es para que afecte may y mun
    //g para toda la linea u oración
    //m para multiples lineas o párrafo
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("imagenmunieco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}


function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte may y mun
    //g para toda la linea u oración
    //m para multiples lineas o párrafo
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("imagenmunieco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
    let copiarTexto = document.getElementById("texto2").value;
    navigator.clipboard.writeText(copiarTexto);
    document.getElementById("txtCifrado").value = "";

}
