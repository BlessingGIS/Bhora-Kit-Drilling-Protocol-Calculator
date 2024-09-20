function applyConditions() {
  const implant = document.getElementById("value1").value;
  const diameter = document.getElementById("value2").value;
  const imageLabel = document.getElementById("imageLabel");  // Label for the image

  // Log values for debugging
  console.log(`Implant: ${implant}, Diameter: ${diameter}`);

  // Hide all images initially
  document.querySelectorAll("#imagesContainer img").forEach(img => {
      img.style.display = "none";
  });
  // Clear the label
  imageLabel.innerHTML = "";
  // Show default image if no selection is made
  if (!implant || !diameter) {
    document.getElementById("Kit").style.display = "block";
    return;
  }
  // Conditions based on implant and diameter
  if (implant === "IP-8.5" && diameter === "3") {
      document.getElementById("IP-8.5 Regular").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } 
  else if (implant === "IP-10" && diameter === "3") {
      document.getElementById("IP-10 Regular").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } 
  else if (implant === "IP-11.5" && diameter === "3") {
      document.getElementById("IP-11.5 Regular").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  }
  else if (implant === "IP-13" && diameter === "3") {
    document.getElementById("IP-13 Regular").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
} 
else if (implant === "IP-15" && diameter === "3") {
    document.getElementById("IP-15 Regular").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
}
else if (implant === "IBNT-8.5" && diameter === "3.25") {
  document.getElementById("IBNT-8.5 Regular").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
} 
else if (implant === "IBNT-10" && diameter === "3.25") {
  document.getElementById("IBNT-10 Regular").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
}
else if (implant === "IBNT-11.5" && diameter === "3.25") {
document.getElementById("IBNT-11.5 Regular").style.display = "block";
imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
} 
else if (implant === "IBNT-13" && diameter === "3.25") {
document.getElementById("IBNT-13 Regular").style.display = "block";
imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
}
else if (implant === "IBNT-15" && diameter === "3.25") {
  document.getElementById("IBNT-15 Regular").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  }
  else if (implant === "IBT-8.5" && diameter === "4") {
    document.getElementById("IBT-8.5 Regular").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } 
  else if (implant === "IBT-10" && diameter === "4") {
    document.getElementById("IBT-10 Regular").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  }
  else if (implant === "IBT-11.5" && diameter === "4") {
  document.getElementById("IBT-11.5 Regular").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } 
  else if (implant === "IBT-13" && diameter === "4") {
  document.getElementById("IBT-13 Regular").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  }
  else if (implant === "IBT-15" && diameter === "4") {
    document.getElementById("IBT-15 Regular").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
    }
    else if (implant === "BAT-8.5" && diameter === "5") {
      document.getElementById("BAT-8.5 Regular").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
    } 
    else if (implant === "BAT-10" && diameter === "5") {
      document.getElementById("BAT-10 Regular").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
    }
    else if (implant === "BAT-11.5" && diameter === "5") {
    document.getElementById("BAT-11.5 Regular").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
    } 
    else if (implant === "BAT-13" && diameter === "5") {
    document.getElementById("BAT-13 Regular").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
    }
    else if (implant === "BAT-15" && diameter === "5") {
      document.getElementById("BAT-15 Regular").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
      }        
  // Add other conditions similarly...

  // Error handling condition if none of the previous conditions are met
  else {
      alert("Error: Your Implant and Diameter Combination is Incorrect.");
  }
}


  