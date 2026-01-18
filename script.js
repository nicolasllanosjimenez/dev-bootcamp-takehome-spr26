const cd = document.querySelector(".cd");
const button = document.getElementById("toggleSpin");
const symbolsContainer = document.querySelector(".symbols");

let spinning = false;

/* Toggle animation state */
button.addEventListener("click", () => {
    spinning = !spinning;

    button.textContent = spinning ? "PAUSE" : "PLAY";
    button.setAttribute("aria-pressed", spinning);

    cd.classList.toggle("spin", spinning);

    document.querySelectorAll(".sym").forEach(sym => {
        sym.style.animationPlayState = spinning ? "running" : "paused";
    });
});

/* =========================
   SYMBOL GENERATION
========================= */

const symbolTypes = ["♕", "♪", "♫", "X"];
const numRaw = 20;
const numForeground = 60;

/* Background RAW symbols */
for (let i = 0; i < numRaw; i++) {
    const sym = document.createElement("span");
    sym.className = "sym";
    sym.textContent = "RAW";

    sym.style.top = Math.random() * 70 + "%";
    sym.style.left = Math.random() * 95 + "%";
    sym.style.opacity = 0.03 + Math.random() * 0.05;
    sym.style.fontSize = 30 + Math.random() * 60 + "px";
    sym.style.zIndex = -3;

    const duration = 8 + Math.random() * 12;
    sym.style.animation = `drift ${duration}s linear infinite`;

    symbolsContainer.appendChild(sym);
}

/* Foreground symbols */
for (let i = 0; i < numForeground; i++) {
    const sym = document.createElement("span");
    sym.className = "sym";

    sym.textContent = symbolTypes[Math.floor(Math.random() * symbolTypes.length)];

    sym.style.top = Math.random() * 80 + "%";
    sym.style.left = Math.random() * 95 + "%";
    sym.style.opacity = 0.05 + Math.random() * 0.25;
    sym.style.fontSize = 40 + Math.random() * 140 + "px";

    const duration = 3 + Math.random() * 7;
    sym.style.animation = `drift ${duration}s linear infinite`;

    symbolsContainer.appendChild(sym);
}