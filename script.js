// Function to apply conditions and display the correct image
function applyConditions() {
  const implantSystem = document.getElementById("value2").value;
  const diameter = document.getElementById("value3").value;
  const implant = document.getElementById("value1").value;
  const imageLabel = document.getElementById("imageLabel");

  // Log values for debugging
  console.log(`Implant System: ${implantSystem}, Diameter: ${diameter}, Implant: ${implant}`);

  // Hide all images initially
  document.querySelectorAll("#imagesContainer img").forEach(img => {
      img.style.display = "none";
  });

  // Clear the label
  imageLabel.innerHTML = "";

  // Show default image if no selection is made
  if (!implantSystem || !diameter || !implant) {
      document.getElementById("Kit").style.display = "block";
      return;
  }

  // Conditions based on implant system, diameter, and implant
  if (implant === "IP-8.5" && diameter === "3(IP)") {
      document.getElementById("IP-8.5 Regular").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "IP-10" && diameter === "3(IP)") {
      document.getElementById("IP-10 Regular").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "IP-11.5" && diameter === "3(IP)") {
      document.getElementById("IP-11.5 Regular").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "IP-13" && diameter === "3(IP)") {
        document.getElementById("IP-13 Regular").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "IP-15" && diameter === "3(IP)") {
        document.getElementById("IP-15 Regular").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "IBNT-8.5" && diameter === "3.25(IBN)") {
        document.getElementById("IBNT-8.5 Regular").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "IBNT-10" && diameter === "3.25(IBN)") {
        document.getElementById("IBNT-10 Regular").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "IBNT-11.5" && diameter === "3.25(IBN)") {
          document.getElementById("IBNT-11.5 Regular").style.display = "block";
          imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "IBNT-13" && diameter === "3.25(IBN)") {
          document.getElementById("IBNT-13 Regular").style.display = "block";
          imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "IBNT-15" && diameter === "3.25(IBN)") {
            document.getElementById("IBNT-15 Regular").style.display = "block";
            imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "IBT-8.5" && diameter === "4(IB)") {
            document.getElementById("IBT-8.5 Regular").style.display = "block";
            imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "IBT-10" && diameter === "4(IB)") {
              document.getElementById("IBT-10 Regular").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "IBT-11.5" && diameter === "4(IB)") {
              document.getElementById("IBT-11.5 Regular").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "IBT-13" && diameter === "4(IB)") {
              document.getElementById("IBT-13 Regular").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "IBT-15" && diameter === "4(IB)") {
              document.getElementById("IBT-15 Regular").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "BAT-8.5" && diameter === "5(BA)") {
                document.getElementById("BAT-8.5 Regular").style.display = "block";
                imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "BAT-10" && diameter === "5(BA)") {
                document.getElementById("BAT-10 Regular").style.display = "block";
                imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;                              
  } else if (implant === "BAT-11.5" && diameter === "5(BA)") {
                document.getElementById("BAT-11.5 Regular").style.display = "block";
                imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "BAT-13" && diameter === "5(BA)") {
                document.getElementById("BAT-13 Regular").style.display = "block";
                imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } else if (implant === "BAT-15" && diameter === "5(BA)") {
                  document.getElementById("BAT-15 Regular").style.display = "block";
                  imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked in RED to be used only if bone is hard`;
  } 
  // Add other conditions as per your requirement
  else {
      alert("Error: You have Selected Invalid Combinations-RECHECK.");
  }
}

// Function to filter the Implant Diameter based on Implant System
function filterDiameters() {
    const implantSystem = document.getElementById("value2").value;
    const diameterDropdown = document.getElementById("value3");
    const allOptions = diameterDropdown.querySelectorAll('option');

  // Hide the dropdown initially if no implant system is selected
  if (!implantSystem) {
    diameterDropdown.style.display = "none";  // Hide dropdown if no system is selected
    return;
  }
  diameterDropdown.style.visibility = "visible";
    // Reset all options to be visible
    allOptions.forEach(option => {
        option.style.display = "block";
    });

    // Filter based on implant system selection
    if (implantSystem === "External Hex") {
        allOptions.forEach(option => {
            if (!["3(IP)", "3.25(IBN)", "4(IB)", "5(BA)"].includes(option.value)) {
                option.style.display = "none";  // Hide irrelevant options
            }
        });
    }

    // Add similar filtering logic for other implant systems
    if (implantSystem === "Deep Conical") {
        allOptions.forEach(option => {
            if (!["3(DC3)", "3.5(DC4)", "4(DC4)", "5(DC5)"].includes(option.value)) {
                option.style.display = "none";
            }
        });
    }

    if (implantSystem === "Internal Hex") {
        allOptions.forEach(option => {
            if (!["3.3(3M)", "3.75(M)", "4(M)", "4.2(M)", "5(M-P45)"].includes(option.value)) {
                option.style.display = "none";
            }
        });
    }
    if (implantSystem === "Internal Octagon") {
    allOptions.forEach(option => {
        if (!["3.3(ITC3)", "4(ITT4)", "5(ITT5)"].includes(option.value)) {
            option.style.display = "none";
        }
    });
}
    if (implantSystem === "Single Platform") {
    allOptions.forEach(option => {
        if (!["3.5(SP)", "4(SP)", "5(SP)"].includes(option.value)) {
            option.style.display = "none";
        }
    });
}
    if (implantSystem === "Tri-Nex") {
    allOptions.forEach(option => {
        if (!["3.5(L-35)", "4.3(L-43)", "5(L-50)"].includes(option.value)) {
            option.style.display = "none";
        }
    });
}      
  // You can add similar filtering logic for other implant systems
}

// Function to automatically select the implant in dropdown (value1)
function autoSelectImplant() {
  const diameter = document.getElementById("value3").value;
  const length = document.getElementById("value4").value;
  const implantDropdown = document.getElementById("value1");

  // Example logic to auto-select an implant based on diameter and length
  if (diameter === "3(IP)" && length === "8.5") {
      implantDropdown.value = "IP-8.5";
  } else if (diameter === "3(IP)" && length === "10") {
      implantDropdown.value = "IP-10";
  } else if (diameter === "3(IP)" && length === "11.5") {
        implantDropdown.value = "IP-11.5";      
  } else if (diameter === "3(IP)" && length === "13") {
        implantDropdown.value = "IP-13";
  } else if (diameter === "3(IP)" && length === "15") {
          implantDropdown.value = "IP-15";
  } else if (diameter === "3.25(IBN)" && length === "8.5") {
            implantDropdown.value = "IBNT-8.5";
  } else if (diameter === "3.25(IBN)" && length === "10") {
              implantDropdown.value = "IBNT-10";      
  } else if (diameter === "3.25(IBN)" && length === "11.5") {
              implantDropdown.value = "IBNT-11.5";
  } else if (diameter === "3.25(IBN)" && length === "13") {
                implantDropdown.value = "IBNT-13";
  } else if (diameter === "3.25(IBN)" && length === "15") {
    implantDropdown.value = "IBNT-15";
  } else if (diameter === "4(IB)" && length === "8.5") {
      implantDropdown.value = "IBT-8.5";      
  } else if (diameter === "4(IB)" && length === "10") {
      implantDropdown.value = "IBT-10";
  } else if (diameter === "4(IB)" && length === "11.5") {
        implantDropdown.value = "IBT-11.5";
  } else if (diameter === "4(IB)" && length === "13") {
          implantDropdown.value = "IBT-13";
  } else if (diameter === "4(IB)" && length === "15") {
            implantDropdown.value = "IBT-15";      
  } else if (diameter === "5(BA)" && length === "8.5") {
            implantDropdown.value = "BAT-8.5";
  } else if (diameter === "5(BA)" && length === "10") {
              implantDropdown.value = "BAT-10";
  } else if (diameter === "5(BA)" && length === "11.5") {
    implantDropdown.value = "BAT-11.5";
  } else if (diameter === "5(BA)" && length === "13") {
      implantDropdown.value = "BAT-13";      
  } else if (diameter === "5(BA)" && length === "15") {
      implantDropdown.value = "BAT-15";
}          
  
  // Add more conditions for auto-selection as needed
}