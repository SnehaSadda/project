// script.js

const generateBtn = document.getElementById("generate-btn");
const quoteElement = document.getElementById("quote");

generateBtn.addEventListener("click", async () => {
  console.log("Button clicked!"); // Debugging log
  quoteElement.innerText = "Generating your motivational quote... ✨";

  try {
    // Fetch request to Netlify function
    const response = await fetch("/.netlify/functions/generate-quote");
    console.log("Fetch response status:", response.status);

    const data = await response.json();
    console.log("Fetched data:", data);

    // Update quote text if response contains a quote
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

