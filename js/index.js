$(function(){
    $("#opis").load("./html/opis_zasole.html");
    $("#mapa").load("./html/mapa_zasole.html");  
    $("#zdjecia").load("./html/zdjecia_zasole.html");
  });

document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("opis").classList.remove("invisibility");
    document.getElementById("mapa").classList.add("invisibility");
    document.getElementById("zdjecia").classList.add("invisibility");

    document.getElementById("btn1").classList.add("underline");
    document.getElementById("btn2").classList.remove("underline");
    document.getElementById("btn3").classList.remove("underline");
})

document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("opis").classList.add("invisibility");
    document.getElementById("mapa").classList.remove("invisibility");
    document.getElementById("zdjecia").classList.add("invisibility");

    document.getElementById("btn1").classList.remove("underline");
    document.getElementById("btn2").classList.add("underline");
    document.getElementById("btn3").classList.remove("underline");
})

document.getElementById("btn3").addEventListener("click", function () {
    document.getElementById("opis").classList.add("invisibility");
    document.getElementById("mapa").classList.add("invisibility");
    document.getElementById("zdjecia").classList.remove("invisibility");

    document.getElementById("btn1").classList.remove("underline");
    document.getElementById("btn2").classList.remove("underline");
    document.getElementById("btn3").classList.add("underline");
})