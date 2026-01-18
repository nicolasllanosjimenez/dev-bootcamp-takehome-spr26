const card = document.querySelector(".card");
const symbols = document.querySelectorAll(".symbols span");
const chaosBtn = document.getElementById("chaosBtn");

/* Scroll-based movement */
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    symbols.forEach((symbol, i) => {
        symbol.style.transform = `
            translateY(${scrollY * (0.1 + i * 0.05)}px)
            rotate(${scrollY * 0.05}deg)
        `;
    });

    if (scrollY > 120) {
        card.classList.add("distort");
    } else {
        card.classList.remove("distort");
    }
});

/* Button-triggered chaos */
chaosBtn.addEventListener("click", () => {
    card.style.background =
        Math.random() > 0.5 ? "#fff" : "#ffe600";

    card.style.boxShadow = `
        ${Math.random() * 20}px
        ${Math.random() * 20}px
        0 black
    `;
});
