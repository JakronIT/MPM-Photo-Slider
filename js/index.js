document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("text1").classList.remove("invisibility");
    document.getElementById("text2").classList.add("invisibility");
    document.getElementById("text3").classList.add("invisibility");

    document.getElementById("btn1").classList.add("underline");
    document.getElementById("btn2").classList.remove("underline");
    document.getElementById("btn3").classList.remove("underline");
})

document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("text1").classList.add("invisibility");
    document.getElementById("text2").classList.remove("invisibility");
    document.getElementById("text3").classList.add("invisibility");

    document.getElementById("btn1").classList.remove("underline");
    document.getElementById("btn2").classList.add("underline");
    document.getElementById("btn3").classList.remove("underline");
})

document.getElementById("btn3").addEventListener("click", function () {
    document.getElementById("text1").classList.add("invisibility");
    document.getElementById("text2").classList.add("invisibility");
    document.getElementById("text3").classList.remove("invisibility");

    document.getElementById("btn1").classList.remove("underline");
    document.getElementById("btn2").classList.remove("underline");
    document.getElementById("btn3").classList.add("underline");
})