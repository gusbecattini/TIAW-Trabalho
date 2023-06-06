var flag1 = true;
var flag2 = true;
function bold() {
    // Faz o texto ficar em negrito
    let elemento = document.getElementById("textarea1");
    elemento.style.fontWeight = flag1 ? "bold" : "normal";
    flag1 = !flag1;
}



function italic() {
    //transforma o texto em itálico
    let elemento = document.getElementById("textarea1");
    elemento.style.fontStyle = flag2 ? "italic" : "normal";
    flag2 = !flag2;
}

function left() {
    //Alinha o texto à esquerda
    document.getElementById("textarea1").style.textAlign = "left";
}

function center() {
    //Centraliza o texto
    document.getElementById("textarea1").style.textAlign = "center";
}

function right() {
    //Alinha o texto à direita

    document.getElementById("textarea1").style.textAlign = "right";
}

function Clear() {
    //Limpa os inputs do usuário na caixa de texto

    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").value = ' ';
}


