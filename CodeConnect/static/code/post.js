function bold() {
    // Faz o texto ficar em negrito

    document.getElementById("textarea1").style.fontWeight = "bold";
}

function italic() {
    //transforma o texto em itálico

    document.getElementById("textarea1").style.fontStyle = "italic";
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
