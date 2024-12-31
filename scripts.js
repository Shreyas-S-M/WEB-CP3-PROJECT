// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
  
    // Add click event to the button
    startButton.addEventListener("click", () => {
      // Redirect to the currency converter page
      window.location.href = "index2.html";
    });
  
    // Dynamic typing effect for the title
    const titleElement = document.getElementById("welcome-title");
    const titleText = "Welcome to Currency Converter";
    let index = 0;
  
    function typeEffect() {
      if (index < titleText.length) {
        titleElement.textContent += titleText.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
      }
    }
  
    // Start the typing effect
    titleElement.textContent = ""; // Clear initial content
    typeEffect();
  });