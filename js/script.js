// script.js
document.getElementById("convert-button").addEventListener("click", convertTemperature);

function convertTemperature() {
  const inputField = document.getElementById("temperature-input");
  const temperature = inputField.value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const output = document.getElementById("output");

  // Validate input as an integer
  if (!temperature || isNaN(temperature)) {
    output.textContent = "Please enter a valid number!";
    return;
  }

  const temp = parseFloat(temperature);
  let result;

  switch (unit) {
    case "Celsius":
      result = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F, Kelvin: ${(temp + 273.15).toFixed(2)} K`;
      break;
    case "Fahrenheit":
      result = `Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C, Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
      break;
    case "Kelvin":
      result = `Celsius: ${(temp - 273.15).toFixed(2)} °C, Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
      break;
    default:
      result = "Error in conversion!";
  }

  output.textContent = `Converted Temperature(s): ${result}`;
}
