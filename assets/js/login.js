var menuItens = document.getElementById("menuItens");

menuItens.style.maxHeight = "0px";

function menucelular(){
    if(menuItens.style.maxHeight == "0px"){
        menuItens.style.maxHeight = "200px";
    }else{
        menuItens.style.maxHeight = "0px";
    }
}

var EntrarPainel = document.getElementById("EntrarPainel");
var CadastroPainel = document.getElementById("CadastroPainel");
var indicador = document.getElementById("indicador");


function Cadastro(){
    CadastroPainel.style.transform = "translateX(0px)";
    EntrarPainel.style.transform = "translateX(0px)";
    indicador.style.transform = "translateX(100px)";
}

function Entrar(){
    CadastroPainel.style.transform = "translateX(300px)";
    EntrarPainel.style.transform = "translateX(300px)";
    indicador.style.transform = "translateX(0px)";
}