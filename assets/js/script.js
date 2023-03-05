// Funções para aumentar e diminuir o tamanho da fonte
function increaseFontSize() {
    const elements = document.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        let fontSize = window.getComputedStyle(element, null).getPropertyValue("font-size");
        fontSize = parseInt(fontSize) + 1 + "px";
        element.style.fontSize = fontSize;
    }
}

function decreaseFontSize() {
    const elements = document.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        let fontSize = window.getComputedStyle(element, null).getPropertyValue("font-size");
        fontSize = parseInt(fontSize) - 1 + "px";
        element.style.fontSize = fontSize;
    }
}

// Função para ativar/desativar o modo de alto contraste
function toggleHighContrast() {
    const body = document.getElementsByTagName("body")[0];
    const navbar = document.getElementsByClassName("navbar")[0];
    body.classList.toggle("high-contrast-on");
    navbar.classList.toggle("high-contrast-on");
}

// Eventos de clique nos botões de acessibilidade
document.querySelector(".font-size-plus").addEventListener("click", increaseFontSize);
document.querySelector(".font-size-minus").addEventListener("click", decreaseFontSize);
document.querySelector(".high-contrast").addEventListener("click", toggleHighContrast);
