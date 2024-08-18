//script.js

function calculateTrigFun() {
    const angleInput = parseFloat(document.getElementById('angleInput').value);  // Taking input from HTML input tag with id="angleInput" and converts it into numeric value using JavaScript parseFloat() method

    // parseFloat() returns first number of the parsed value. If the first character cannot be converted then NaN(Not a Number) is returned.

    //Check angleInput is NaN or not
    if (isNaN(angleInput)) {
      document.getElementById('output').innerText = 'Please enter a valid angle.';
      return;
    }
  
    //Calculation
    const angleInRadians = angleInput * (Math.PI / 180); // Convert the angleInput which is degrees into Radians

    const sine = Math.sin(angleInRadians); // Calculate sine value

    const cosine = Math.cos(angleInRadians);// Calculate cosine value

    const tangent = Math.tan(angleInRadians);// Calculate tangent value
  
    // Using the string interpolation ${} to show values
    // The toFixed(4) is rounds off the vlaue up to 4 decimal places
    // Calculate the values of cosecant, secant, and cotangent by using the formulas 1/sine, 1/cosine, and 1/tangent respectively 
    const outputText = `Sine: ${sine.toFixed(4)}, Cosine: ${cosine.toFixed(4)}, Tangent: ${tangent.toFixed(4)}, Cosecant: ${(1/sine).toFixed(4)}, Secant: ${(1/cosine).toFixed(4)}, Cotangent: ${(1/tangent).toFixed(4)}`
    
    //Dispaly the output
    document.getElementById('output').innerText = outputText;

    
    
  }
  