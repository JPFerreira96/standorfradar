const codeDisplay = document.getElementById('codeDisplay');

// Código para ser exibido
const codeLines = [
    "// Exemplo de código",
    "while (true) {",
    "    console.log('Redigindo código automaticamente...');",
    "}"
];

// Função para exibir o código como se estivesse sendo redigido automaticamente
function displayCode(index) {
    if (index < codeLines.length) {
        codeDisplay.innerText += codeLines[index] + '\n';
        setTimeout(() => {
            displayCode(index + 1);
            codeDisplay.scrollTop = codeDisplay.scrollHeight;
        }, 100); // Tempo de espera entre cada linha (em milissegundos)
    }
}

// Iniciar a exibição do código
displayCode(0);
