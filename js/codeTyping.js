
window.BASE_URL = '/Users/Júlio%20Paulo/Desktop/radar';

document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = `${window.BASE_URL}/login/loginindex.html`; // Usando o BASE_URL no caminho de redirecionamento
});

const codeDisplayContainer = document.getElementById('codeDisplayContainer');
// Código para ser exibido
const codeLines = [
    "const codeDisplayContainer = document.getElementById('codeDisplayContainer');",
    "",
    "function displayCode(index) {",
    "    const codeLine = document.createElement('div');",
    "    codeLine.textContent = codeLines[index % codeLines.length];",
    "    codeDisplayContainer.appendChild(codeLine);",
    "    codeDisplayContainer.scrollTop = codeDisplayContainer.scrollHeight;",
    "    setTimeout(() => {",
    "        displayCode(index + 1);",
    "    }, 1000);",
    "}",
    "",
    "displayCode(0);",
    "",
    "const radarCanvas = document.getElementById('radarCanvas');",
    "const radarCtx = radarCanvas.getContext('2d');",
    "",
    "function resizeRadarCanvas() {",
    "    radarCanvas.width = radarCanvas.clientWidth;",
    "    radarCanvas.height = radarCanvas.clientHeight;",
    "}",
    "",
    "window.addEventListener('resize', resizeRadarCanvas);",
    "resizeRadarCanvas();",
    "",
    "let angle = 0;",
    "const fadeOffRate = 0.03;",
    "const shadowAngleFactor = 2.0;",
    "",
    "function drawRadar() {",
    "    const centerX = radarCanvas.width / 2;",
    "    const centerY = radarCanvas.height / 2;",
    "    const radius = Math.min(centerX, centerY) - 10;",
    "    ",
    "    radarCtx.clearRect(0, 0, radarCanvas.width, radarCanvas.height);",
    "    ",
    "    radarCtx.strokeStyle = 'green';",
    "    radarCtx.lineWidth = 2;",
    "    for (let i = 1; i <= 5; i++) {",
    "        const circleRadius = radius * i / 5;",
    "        radarCtx.beginPath();",
    "        radarCtx.arc(centerX, centerY, circleRadius, 0, 2 * Math.PI);",
    "        radarCtx.stroke();",
    "        ",
    "        radarCtx.beginPath();",
    "        radarCtx.moveTo(centerX - circleRadius, centerY);",
    "        radarCtx.lineTo(centerX + circleRadius, centerY);",
    "        radarCtx.stroke();",
    "",
    "        radarCtx.beginPath();",
    "        radarCtx.moveTo(centerX, centerY - circleRadius);",
    "        radarCtx.lineTo(centerX, centerY + circleRadius);",
    "        radarCtx.stroke();",
    "    }",
    "",
    "",
    "    radarCtx.fillStyle = 'rgba(0, 255, 0, 0.1)';",
    "    radarCtx.beginPath();",
    "    radarCtx.moveTo(centerX, centerY);",
    "    radarCtx.arc(centerX, centerY, radius, angle, angle + shadowAngleFactor * (Math.PI / 6));",
    "    radarCtx.closePath();",
    "    radarCtx.fill();",
    "",
    "",
    "    radarCtx.strokeStyle = 'red';",
    "    radarCtx.beginPath();",
    "    radarCtx.moveTo(centerX, centerY);",
    "    radarCtx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));",
    "    radarCtx.stroke();",
    "",
    "",
    "    radarCtx.fillStyle = 'rgba(0, 255, 0, 0.1)';",
    "    radarCtx.fillRect(0, 0, radarCanvas.width, radarCanvas.height);",
    "    angle -= fadeOffRate;",
    "",
    "    if (angle < 0) {",
    "        angle = 2 * Math.PI;",
    "    }",
    "",
    "    requestAnimationFrame(drawRadar);",
    "}",
    "",
    "drawRadar();"
];

// Função para exibir o código como se estivesse sendo redigido automaticamente
function displayCode(index) {
    const codeLine = document.createElement('div');
    codeLine.textContent = codeLines[index % codeLines.length];
    codeDisplayContainer.appendChild(codeLine);
    codeDisplayContainer.scrollTop = codeDisplayContainer.scrollHeight;
    setTimeout(() => {
        displayCode(index + 1);
    }, 500); // Tempo de espera entre cada linha (em milissegundos)
}

// Iniciar a exibição do código
displayCode(0);
