function convert() {
    // Get input values
    var input = parseFloat(document.getElementById("input").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    
    // Conversion logic
    var result;
    
    if (from === "cm" && to === "m") {
      result = input / 100;
    } else if (from === "cm" && to === "km") {
      result = input / 100000;
    } else if (from === "m" && to === "cm") {
      result = input * 100;
    } else if (from === "m" && to === "km") {
      result = input / 1000;
    } else if (from === "km" && to === "cm") {
      result = input * 100000;
    } else if (from === "km" && to === "m") {
      result = input * 1000;
    } else {
      result = input; // If no conversion needed
    }
    
    // Display result
    document.getElementById("result").textContent = "Result: " + result + " " + to;
  }

