const display = document.getElementById("userinput");
const buttons = document.querySelectorAll("button");

let currentInput = "";

function animateDisplay() {
  display.classList.add("animate");
  setTimeout(() => {
    display.classList.remove("animate");
  }, 150);
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "AC") {
      currentInput = "";
      display.innerText = "0";
    } 
    
    else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      display.innerText = currentInput || "0";
    } 
    
    else if (value === "=") {
      try {
        let result = eval(currentInput.replace(/X/g, "*"));
        display.innerText = result;
        currentInput = result.toString();
      } catch {
        display.innerText = "Error";
        currentInput = "";
      }
    } 
    
    else {
      currentInput += value;
      display.innerText = currentInput;
    } 
  });
});