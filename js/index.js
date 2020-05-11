$(function () {
  $("#opis").load("./html/opis_zasole.html");
  $("#mapa").load("./html/mapa_zasole.html");
  $("#zdjecia").load("./html/zdjecia_zasole.html");
});

document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("opis").classList.remove("invisibility");
  document.getElementById("mapa").classList.add("invisibility");
  document.getElementById("zdjecia").classList.add("invisibility");

  document.getElementById("udl").classList.add("underline0");
  document.getElementById("udl").classList.remove("underline1");
  document.getElementById("udl").classList.remove("underline2");
});

document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("opis").classList.add("invisibility");
  document.getElementById("mapa").classList.remove("invisibility");
  document.getElementById("zdjecia").classList.add("invisibility");

  document.getElementById("udl").classList.remove("underline0");
  document.getElementById("udl").classList.add("underline1");
  document.getElementById("udl").classList.remove("underline2");
});

document.getElementById("btn3").addEventListener("click", function () {
  document.getElementById("opis").classList.add("invisibility");
  document.getElementById("mapa").classList.add("invisibility");
  document.getElementById("zdjecia").classList.remove("invisibility");

  document.getElementById("udl").classList.remove("underline0");
  document.getElementById("udl").classList.remove("underline1");
  document.getElementById("udl").classList.add("underline2");
});
