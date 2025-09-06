// script.js
const generateBtn = document.getElementById("generate-btn");
const quoteElement = document.getElementById("quote");

generateBtn.addEventListener("click", async () => {
  quoteElement.innerText = "Generating your motivational quote... ✨";

  try {
    const response = await fetch("/.netlify/functions/generate-quote");
    const data = await response.json();

    if (data.quote) {
      quoteElement.innerText = `"${data.quote}"`;
    } else {
      quoteElement.innerText = "Oops! Couldn't generate a quote. Try again.";
    }
  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteElement.innerText = "Error! Please try again later.";
  }
});
