console.log("Site YouTube Pugminator chargé 🚀");

// Exemple d'interaction simple
/*document.querySelector(".btn").addEventListener("click", () => {
  alert("Merci pour ton soutien ❤️");
});*/

const container = document.getElementById("yt-particles-container");

function createYouTubeLogo(x) {
  const logo = document.createElement("div");
  logo.classList.add("youtube-particle");

  logo.innerText = "▶️";

  // position au niveau du clic
  logo.style.left = x + "px";

  const duration = Math.random() * 2 + 2;
  logo.style.animationDuration = duration + "s";

  container.appendChild(logo);

  setTimeout(() => {
    logo.remove();
  }, duration * 1000);
}

document.addEventListener("click", (e) => {
  // éviter spam trop violent si tu veux (optionnel)
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      createYouTubeLogo(e.clientX + (Math.random() * 60 - 30));
    }, i * 60);
  }
});

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});