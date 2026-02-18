function goNext(page) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = page;
  }, 800);
}

function sadEffect() {
  createEmojiRain("💔");
  alert("Mujhe pata hai tum abhi gussa ho... par main sincerely wait karunga 🥺");
}

function loveExplosion() {
  document.getElementById("finalMessage").innerHTML =
    "Thank you Palak 🥺💖<br>Promise: kabhi hurt nahi karunga ✨💕";

  createEmojiRain("💖");
  createEmojiRain("✨");

  setTimeout(() => {
    window.location.href = "https://www.instagram.com/_.osr._official._";
  }, 1800);
}

function hugMessage() {
  document.getElementById("finalMessage").innerHTML =
    "Theek hai... main tumhara patiently wait karunga 🤍💗";
  createEmojiRain("🌸");
}

/* Emoji Rain Animation */
function createEmojiRain(emoji) {
  for (let i = 0; i < 40; i++) {
    let el = document.createElement("div");
    el.innerHTML = emoji;
    el.style.position = "fixed";
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = "-10vh";
    el.style.fontSize = 20 + Math.random() * 20 + "px";
    el.style.animation = `fall ${3 + Math.random() * 3}s linear forwards`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 6000);
  }
}

const dynamicStyle = document.createElement("style");
dynamicStyle.innerHTML = `
.fade-out {
  animation: fadeOut 0.8s forwards;
}

@keyframes fall {
  0% {
    transform: translateY(-10vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}`;
document.head.appendChild(dynamicStyle);
