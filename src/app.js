import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Generador de dominio
window.onload = function() {
  document.querySelector("#nombres").innerHTML = nombres();
  document.getElementById("nombres").innerHTML = nombres();
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
  let dominios = "";

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjetives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          dominios += `<h6> ${pronouns[i]}${pronouns[j]}${nouns[k]}${extensions[l]} </h6>`;
          console.log(pronouns[i] + adjetives[j] + nouns[k] + extensions[l]);
        }
      }
    }
  }
  return dominios;
}
