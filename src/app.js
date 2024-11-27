import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Generador de dominio
window.onload = function() {
  document.querySelector("#nombres").innerHTML = nombres();
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#nombres").innerHTML = nombres();
  });
};

function nombres() {
  let pronouns = ["I", "you", "he", "she", "it", "we", "they"];
  let adjetives = [
    "happy",
    "sad",
    "strong",
    "beautiful",
    "fast",
    "smart",
    "angry"
  ];
  let nouns = ["dog", "cat", "pencil", "phone", "glass", "teacher", "computer"];
  let extensions = [".com", ".net", ".us", ".io", ".org"];

  let pronombre = Math.floor(Math.random() * pronouns.length);
  let adjetivos = Math.floor(Math.random() * adjetives.length);
  let sustantivos = Math.floor(Math.random() * nouns.length);
  let extensiones = Math.floor(Math.random() * extensions.length);

  return (
    pronouns[pronombre] +
    adjetives[adjetivos] +
    nouns[sustantivos] +
    extensions[extensiones]
  );
}
