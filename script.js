// script.js
console.log("Script loaded!");

const generateBtn = document.getElementById("generate-btn");

if (generateBtn) {
  console.log("Button found!");
  generateBtn.addEventListener("click", () => {
    console.log("Button clicked!");
    alert("Button works!");
  });
} else {
  console.error("Button NOT found!");
}
