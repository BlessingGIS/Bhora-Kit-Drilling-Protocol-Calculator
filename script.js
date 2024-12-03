// Function to apply conditions and display the correct image
function applyConditions() {
  const implantSystem = document.getElementById("value2").value;
  const diameter = document.getElementById("value3").value;
  const implant = document.getElementById("value1").value;
  const imageLabel = document.getElementById("imageLabel");  
  const printButton = document.getElementById("printButton");

  // Log values for debugging
  console.log(`Implant System: ${implantSystem}, Diameter: ${diameter}, Implant: ${implant}`);

  // Hide all images initially
  document.querySelectorAll("#imagesContainer img").forEach(img => {
      img.style.display = "none";
  });
  printButton.style.display = "none"; // Hide print button by default
  imageLabel.innerHTML = ""; // Clear the label
  // Clear the label
  imageLabel.innerHTML = "";

  // Show default image if no selection is made
  if (!implantSystem || !diameter || !implant) {
      document.getElementById("Kit").style.display = "block";
      return;
  }
  // Error handling - if the combination doesn't match any condition
  let validCombination = true;
  // Conditions based on implant system, diameter, and implant
  if (implant === "IP-8.5") {
      document.getElementById("IP-8.5").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button      
  } else if (implant === "IP-10") {
      document.getElementById("IP-10").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button       
  } else if (implant === "IP-11.5") {
      document.getElementById("IP-11.5").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button      
  } else if (implant === "IP-13") {
        document.getElementById("IP-13").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button        
  } else if (implant === "IP-15") {
        document.getElementById("IP-15").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
      printButton.style.display = "inline-block"; // Show the print button         
  } else if (implant === "IBNT-8.5") {
        document.getElementById("IBNT-8.5").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button         
  } else if (implant === "IBNT-10") {
        document.getElementById("IBNT-10").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button
  } else if (implant === "IBNT-11.5") {
          document.getElementById("IBNT-11.5").style.display = "block";
          imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button          
  } else if (implant === "IBNT-13") {
          document.getElementById("IBNT-13").style.display = "block";
          imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button          
  } else if (implant === "IBNT-15") {
            document.getElementById("IBNT-15").style.display = "block";
            imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button            
  } else if (implant === "IBT-8.5") {
            document.getElementById("IBT-8.5").style.display = "block";
            imageLabel.innerHTML = `Drilling protocol for: ${implant} - Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button            
  } else if (implant === "IBT-10") {
              document.getElementById("IBT-10").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button             
  } else if (implant === "IBT-11.5") {
              document.getElementById("IBT-11.5").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button              
  } else if (implant === "IBT-13") {
              document.getElementById("IBT-13").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button             
  } else if (implant === "IBT-15") {
              document.getElementById("IBT-15").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button              
  } else if (implant === "BAT-8.5") {
                document.getElementById("BAT-8.5").style.display = "block";
                imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button
  } else if (implant === "BAT-10") {
                document.getElementById("BAT-10").style.display = "block";
                imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button                                             
  } else if (implant === "BAT-11.5") {
                document.getElementById("BAT-11.5").style.display = "block";
                imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button               
  } else if (implant === "BAT-13") {
                document.getElementById("BAT-13").style.display = "block";
                imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button               
  } else if (implant === "BAT-15") {
                  document.getElementById("BAT-15").style.display = "block";
                  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
      printButton.style.display = "inline-block"; // Show the print button              
} else if (implant === "SP3508") {
    document.getElementById("SP3508").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button       
} else if (implant === "SP3510") {
    document.getElementById("SP3510").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button      
} else if (implant === "SP3511") {
      document.getElementById("SP3511").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button        
} else if (implant === "SP3513") {
      document.getElementById("SP3513").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button         
} else if (implant === "SP3516") {
      document.getElementById("SP3516").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button         
} else if (implant === "SP4008") {
      document.getElementById("SP4008").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "SP4010") {
        document.getElementById("SP4010").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button          
} else if (implant === "SP4011") {
        document.getElementById("SP4011").style.display = "block";
        imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button          
} else if (implant === "SP4013") {
          document.getElementById("SP4013").style.display = "block";
          imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button            
} else if (implant === "SP4016") {
          document.getElementById("SP4016").style.display = "block";
          imageLabel.innerHTML = `Drilling protocol for: ${implant} - Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button            
} else if (implant === "SP5008") {
            document.getElementById("SP5008").style.display = "block";
            imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
    printButton.style.display = "inline-block"; // Show the print button             
} else if (implant === "SP5010") {
            document.getElementById("SP5010").style.display = "block";
            imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
    printButton.style.display = "inline-block"; // Show the print button              
} else if (implant === "SP5011") {
            document.getElementById("SP5011").style.display = "block";
            imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
    printButton.style.display = "inline-block"; // Show the print button             
} else if (implant === "SP5013") {
            document.getElementById("SP5013").style.display = "block";
            imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
    printButton.style.display = "inline-block"; // Show the print button              
} else if (implant === "SP5016") {
              document.getElementById("SP5016").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
    printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "DCT3009") {
              document.getElementById("DCT3009").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "DCT3011") {
              document.getElementById("DCT3011").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT3013") {
              document.getElementById("DCT3013").style.display = "block";
              imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT3015") {
                document.getElementById("DCT3015").style.display = "block";
                imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
    printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "DCT3508") {
    document.getElementById("DCT3508").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "DCT3509") {
    document.getElementById("DCT3509").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "DCT3511") {
    document.getElementById("DCT3511").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT3513") {
    document.getElementById("DCT3513").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT3515") {
      document.getElementById("DCT3515").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button   
} else if (implant === "DCT4008") {
    document.getElementById("DCT4008").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "DCT4009") {
    document.getElementById("DCT4009").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "DCT4011") {
    document.getElementById("DCT4011").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT4013") {
    document.getElementById("DCT4013").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT4015") {
      document.getElementById("DCT4015").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "DCT5009") {
    document.getElementById("DCT5009").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "DCT5011") {
    document.getElementById("DCT5011").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT5013") {
    document.getElementById("DCT5013").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "DCT5015") {
      document.getElementById("DCT5015").style.display = "block";
      imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "PRO308") {
    document.getElementById("PRO308").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "PRO310") {
  document.getElementById("PRO310").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "PRO311") {
  document.getElementById("PRO311").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "PRO313") {
  document.getElementById("PRO313").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "PRO315") {
    document.getElementById("PRO315").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "PRO408") {
    document.getElementById("PRO408").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "PRO410") {
  document.getElementById("PRO410").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "PRO411") {
  document.getElementById("PRO411").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "PRO413") {
  document.getElementById("PRO413").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "PRO415") {
    document.getElementById("PRO415").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button  
} else if (implant === "PRO508") {
    document.getElementById("PRO508").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "PRO510") {
  document.getElementById("PRO510").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "PRO511") {
  document.getElementById("PRO511").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "PRO513") {
  document.getElementById("PRO513").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "PRO515") {
    document.getElementById("PRO515").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "IM-T3708") {
    document.getElementById("IM-T3708").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IM-T3710") {
  document.getElementById("IM-T3710").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IM-T3711") {
  document.getElementById("IM-T3711").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IM-T3713") {
  document.getElementById("IM-T3713").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IM-T3715") {
    document.getElementById("IM-T3715").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button  
} else if (implant === "IM-T4208") {
    document.getElementById("IM-T4208").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IM-T4210") {
  document.getElementById("IM-T4210").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IM-T4211") {
  document.getElementById("IM-T4211").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IM-T4213") {
  document.getElementById("IM-T4213").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IM-T4215") {
    document.getElementById("IM-T4215").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "IM-T5008") {
    document.getElementById("IM-T5008").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IM-T5010") {
  document.getElementById("IM-T5010").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IM-T5011") {
  document.getElementById("IM-T5011").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IM-T5013") {
  document.getElementById("IM-T5013").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IM-T5015") {
    document.getElementById("IM-T5015").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "ITT408") {
    document.getElementById("ITT408").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "ITT410") {
  document.getElementById("ITT410").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "ITT412") {
  document.getElementById("ITT412").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "ITT414") {
  document.getElementById("ITT414").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "ITT508") {
    document.getElementById("ITT508").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "ITT510") {
  document.getElementById("ITT510").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "ITT512") {
  document.getElementById("ITT512").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "ITT514") {
  document.getElementById("ITT514").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IA-LH-35-8") {
    document.getElementById("IA-LH-35-8").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IA-LH-35-10") {
  document.getElementById("IA-LH-35-10").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IA-LH-35-11.5") {
  document.getElementById("IA-LH-35-11.5").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IA-LH-35-13") {
  document.getElementById("IA-LH-35-13").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IA-LH-35-16") {
    document.getElementById("IA-LH-35-16").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IA-LH-43-8") {
    document.getElementById("IA-LH-43-8").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IA-LH-43-10") {
  document.getElementById("IA-LH-43-10").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IA-LH-43-11.5") {
  document.getElementById("IA-LH-43-11.5").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IA-LH-43-13") {
  document.getElementById("IA-LH-43-13").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IA-LH-43-16") {
    document.getElementById("IA-LH-43-16").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IA-LH-50-8") {
    document.getElementById("IA-LH-50-8").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IA-LH-50-10") {
  document.getElementById("IA-LH-50-10").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IA-LH-50-11.5") {
  document.getElementById("IA-LH-50-11.5").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IA-LH-50-13") {
  document.getElementById("IA-LH-50-13").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IA-LH-50-16") {
    document.getElementById("IA-LH-50-16").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IV-DC30/EX30-3708") {
    document.getElementById("IV-DC30/EX30-3708").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IV-DC30/EX30-3710") {
  document.getElementById("IV-DC30/EX30-3710").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IV-DC30/EX30-3711") {
  document.getElementById("IV-DC30/EX30-3711").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-DC30/EX30-3713") {
  document.getElementById("IV-DC30/EX30-3713").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-DC30/EX30-3715") {
    document.getElementById("IV-DC30/EX30-3715").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "IV-DC35/EX35-4508") {
    document.getElementById("IV-DC35/EX35-4508").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IV-DC35/EX35-4510") {
  document.getElementById("IV-DC35/EX35-4510").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IV-DC35/EX35-4511") {
  document.getElementById("IV-DC35/EX35-4511").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-DC35/EX35-4513") {
  document.getElementById("IV-DC35/EX35-4513").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-DC35/EX35-4515") {
    document.getElementById("IV-DC35/EX35-4515").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Counterbore(Apex widening) marked by red H or M is OPTIONAL & NOT for use in soft bone`;
printButton.style.display = "inline-block"; // Show the print button 
} else if (implant === "IV-DC40/EX40-5008") {
    document.getElementById("IV-DC40/EX40-5008").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
} else if (implant === "IV-DC40/EX40-5010") {
  document.getElementById("IV-DC40/EX40-5010").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button                                             
} else if (implant === "IV-DC40/EX40-5011") {
  document.getElementById("IV-DC40/EX40-5011").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-DC40/EX40-5013") {
  document.getElementById("IV-DC40/EX40-5013").style.display = "block";
  imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button               
} else if (implant === "IV-DC40/EX40-5015") {
    document.getElementById("IV-DC40/EX40-5015").style.display = "block";
    imageLabel.innerHTML = `Drilling protocol for: ${implant} : Drill Marked by green M/H is only used in Medium/Hard bone`;
printButton.style.display = "inline-block"; // Show the print button
}
  // Add other conditions as per your requirement
  else {
    validCombination = false;
  }
  // Error handling if no valid combinations are found
  if (!validCombination) {
    alert("Error: You have selected invalid combinations. Most likely selected implant system has no such length(Do not mix up 8.5/8 and 11.5/11).");
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

    if (implantSystem === "Provata") {
        allOptions.forEach(option => {
            if (!["3.3(3M)", "4(M)", "5(M-P45)"].includes(option.value)) {
                option.style.display = "none";
            }
        });
    }
    if (implantSystem === "Internal Octagon") {
    allOptions.forEach(option => {
        if (!["4(ITT4)", "5(ITT5)"].includes(option.value)) {
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
        if (!["3.5(EL-35)", "4.3(EL-43)", "5(EL-50)"].includes(option.value)) {
            option.style.display = "none";
        }
    });
}
if (implantSystem === "M-Series") {
allOptions.forEach(option => {
    if (!["3.7(IM-T37)", "4.2(IM-T42)", "5(IM-T50)"].includes(option.value)) {
        option.style.display = "none";
    }
}); 
}
if (implantSystem === "Inverta") {
allOptions.forEach(option => {
    if (!["IV-DC30/EX30-37", "IV-DC35/EX35-45", "IV-DC40/EX40-50"].includes(option.value)) {
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
  if (diameter === "3(IP)" && length === "8.5"){
      implantDropdown.value = "IP-8.5";
  } else if (diameter === "3(IP)" && length === "8") {
        implantDropdown.value = "IP-8.5";          
  } else if (diameter === "3(IP)" && length === "10") {
      implantDropdown.value = "IP-10";
  } else if (diameter === "3(IP)" && length === "11") {
        implantDropdown.value = "IP-11.5";
  } else if (diameter === "3(IP)" && length === "11.5") {
        implantDropdown.value = "IP-11.5";         
  } else if (diameter === "3(IP)" && length === "13") {
        implantDropdown.value = "IP-13";
  } else if (diameter === "3(IP)" && length === "15") {
          implantDropdown.value = "IP-15";
  } else if (diameter === "3.25(IBN)" && length === "8.5") {
            implantDropdown.value = "IBNT-8.5";
  } else if (diameter === "3.25(IBN)" && length === "8") {
            implantDropdown.value = "IBNT-8.5";           
  } else if (diameter === "3.25(IBN)" && length === "10") {
              implantDropdown.value = "IBNT-10";      
  } else if (diameter === "3.25(IBN)" && length === "11.5") {
              implantDropdown.value = "IBNT-11.5";
  } else if (diameter === "3.25(IBN)" && length === "11") {
                implantDropdown.value = "IBNT-11.5";
  } else if (diameter === "3.25(IBN)" && length === "13") {
                implantDropdown.value = "IBNT-13";
  } else if (diameter === "3.25(IBN)" && length === "15") {
    implantDropdown.value = "IBNT-15";
  } else if (diameter === "4(IB)" && length === "8.5") {
      implantDropdown.value = "IBT-8.5";
  } else if (diameter === "4(IB)" && length === "8") {
        implantDropdown.value = "IBT-8.5";      
  } else if (diameter === "4(IB)" && length === "10") {
      implantDropdown.value = "IBT-10";
  } else if (diameter === "4(IB)" && length === "11.5") {
        implantDropdown.value = "IBT-11.5";
  } else if (diameter === "4(IB)" && length === "11") {
        implantDropdown.value = "IBT-11.5";
  } else if (diameter === "4(IB)" && length === "13") {
          implantDropdown.value = "IBT-13";
  } else if (diameter === "4(IB)" && length === "15") {
            implantDropdown.value = "IBT-15";      
  } else if (diameter === "5(BA)" && length === "8.5") {
            implantDropdown.value = "BAT-8.5";
  } else if (diameter === "5(BA)" && length === "8") {
            implantDropdown.value = "BAT-8.5";
  } else if (diameter === "5(BA)" && length === "10") {
              implantDropdown.value = "BAT-10";
  } else if (diameter === "5(BA)" && length === "11.5") {
    implantDropdown.value = "BAT-11.5";
  } else if (diameter === "5(BA)" && length === "11") {
    implantDropdown.value = "BAT-11.5";
  } else if (diameter === "5(BA)" && length === "13") {
      implantDropdown.value = "BAT-13";      
  } else if (diameter === "5(BA)" && length === "15") {
      implantDropdown.value = "BAT-15";     
  } else if (diameter === "3.5(SP)" && length === "8") {
        implantDropdown.value = "SP3508";
  } else if (diameter === "3.5(SP)" && length === "8.5") {
        implantDropdown.value = "SP3508";
  } else if (diameter === "3.5(SP)" && length === "10") {
          implantDropdown.value = "SP3510";      
  } else if (diameter === "3.5(SP)" && length === "11.5") {
          implantDropdown.value = "SP3511";
  } else if (diameter === "3.5(SP)" && length === "11") {
            implantDropdown.value = "SP3511";
  } else if (diameter === "3.5(SP)" && length === "13") {
            implantDropdown.value = "SP3513";
  } else if (diameter === "3.5(SP)" && length === "16") {
              implantDropdown.value = "SP3516";
  } else if (diameter === "4(SP)" && length === "8") {
        implantDropdown.value = "SP4008";
  } else if (diameter === "4(SP)" && length === "8.5") {
        implantDropdown.value = "SP4008";
  } else if (diameter === "4(SP)" && length === "10") {
          implantDropdown.value = "SP4010";      
  } else if (diameter === "4(SP)" && length === "11.5") {
          implantDropdown.value = "SP4011";
  } else if (diameter === "4(SP)" && length === "11") {
            implantDropdown.value = "SP4011";
  } else if (diameter === "4(SP)" && length === "13") {
            implantDropdown.value = "SP4013";
  } else if (diameter === "4(SP)" && length === "16") {
              implantDropdown.value = "SP4016";
  } else if (diameter === "5(SP)" && length === "8") {
        implantDropdown.value = "SP5008";
    } else if (diameter === "5(SP)" && length === "8.5") {
        implantDropdown.value = "SP5008";        
  } else if (diameter === "5(SP)" && length === "10") {
          implantDropdown.value = "SP5010";      
  } else if (diameter === "5(SP)" && length === "11.5") {
          implantDropdown.value = "SP5011";
  } else if (diameter === "5(SP)" && length === "11") {
            implantDropdown.value = "SP5011";
  } else if (diameter === "5(SP)" && length === "13") {
            implantDropdown.value = "SP5013";
  } else if (diameter === "5(SP)" && length === "16") {
              implantDropdown.value = "SP5016";
  } else if (diameter === "3(DC3)" && length === "9") {
        implantDropdown.value = "DCT3009";
  } else if (diameter === "3(DC3)" && length === "11") {
          implantDropdown.value = "DCT3011";
  } else if (diameter === "3(DC3)" && length === "11.5") {
            implantDropdown.value = "DCT3011";      
  } else if (diameter === "3(DC3)" && length === "13") {
          implantDropdown.value = "DCT3013";
  } else if (diameter === "3(DC3)" && length === "15") {
            implantDropdown.value = "DCT3015";
  } else if (diameter === "3.5(DC4)" && length === "9") {
        implantDropdown.value = "DCT3509";
  } else if (diameter === "3.5(DC4)" && length === "11") {
          implantDropdown.value = "DCT3511"; 
  } else if (diameter === "3.5(DC4)" && length === "11.5") {
            implantDropdown.value = "DCT3511";     
  } else if (diameter === "3.5(DC4)" && length === "13") {
          implantDropdown.value = "DCT3513";
  } else if (diameter === "3.5(DC4)" && length === "15") {
            implantDropdown.value = "DCT3515";
  } else if (diameter === "4(DC4)" && length === "9") {
        implantDropdown.value = "DCT4009";
  } else if (diameter === "4(DC4)" && length === "11") {
          implantDropdown.value = "DCT4011";
  } else if (diameter === "4(DC4)" && length === "11.5") {
            implantDropdown.value = "DCT4011";      
  } else if (diameter === "4(DC4)" && length === "13") {
          implantDropdown.value = "DCT4013";
  } else if (diameter === "4(DC4)" && length === "15") {
            implantDropdown.value = "DCT4015";
  } else if (diameter === "5(DC5)" && length === "9") {
        implantDropdown.value = "DCT5009";
  } else if (diameter === "5(DC5)" && length === "11") {
          implantDropdown.value = "DCT5011"; 
  } else if (diameter === "5(DC5)" && length === "11.5") {
            implantDropdown.value = "DCT5011";     
  } else if (diameter === "5(DC5)" && length === "13") {
          implantDropdown.value = "DCT5013";
  } else if (diameter === "5(DC5)" && length === "15") {
            implantDropdown.value = "DCT5015";
  } else if (diameter === "3.3(3M)" && length === "8.5") {
        implantDropdown.value = "PRO308";
  } else if (diameter === "3.3(3M)" && length === "8") {
        implantDropdown.value = "PRO308";
  } else if (diameter === "3.3(3M)" && length === "10") {
          implantDropdown.value = "PRO310";      
  } else if (diameter === "3.3(3M)" && length === "11.5") {
          implantDropdown.value = "PRO311";
  } else if (diameter === "3.3(3M)" && length === "11") {
            implantDropdown.value = "PRO311";
  } else if (diameter === "3.3(3M)" && length === "13") {
            implantDropdown.value = "PRO313";
  } else if (diameter === "3.3(3M)" && length === "15") {
            implantDropdown.value = "PRO315";
  } else if (diameter === "4(M)" && length === "8.5") {
        implantDropdown.value = "PRO408";
  } else if (diameter === "4(M)" && length === "8") {
        implantDropdown.value = "PRO408";
  } else if (diameter === "4(M)" && length === "10") {
          implantDropdown.value = "PRO410";      
  } else if (diameter === "4(M)" && length === "11.5") {
          implantDropdown.value = "PRO411";
  } else if (diameter === "4(M)" && length === "11") {
            implantDropdown.value = "PRO411";
  } else if (diameter === "4(M)" && length === "13") {
            implantDropdown.value = "PRO413";
  } else if (diameter === "4(M)" && length === "15") {
            implantDropdown.value = "PRO415";
  } else if (diameter === "5(M-P45)" && length === "8.5") {
        implantDropdown.value = "PRO508";
  } else if (diameter === "5(M-P45)" && length === "8") {
        implantDropdown.value = "PRO508";
  } else if (diameter === "5(M-P45)" && length === "10") {
          implantDropdown.value = "PRO510";      
  } else if (diameter === "5(M-P45)" && length === "11.5") {
          implantDropdown.value = "PRO511";
  } else if (diameter === "5(M-P45)" && length === "11") {
            implantDropdown.value = "PRO511";
  } else if (diameter === "5(M-P45)" && length === "13") {
            implantDropdown.value = "PRO513";
  } else if (diameter === "5(M-P45)" && length === "15") {
            implantDropdown.value = "PRO515";
  } else if (diameter === "3.7(IM-T37)" && length === "8") {
            implantDropdown.value = "IM-T3708";
  } else if (diameter === "3.7(IM-T37)" && length === "8.5") {
            implantDropdown.value = "IM-T3708";
  } else if (diameter === "3.7(IM-T37)" && length === "10") {
            implantDropdown.value = "IM-T3710";      
  } else if (diameter === "3.7(IM-T37)" && length === "11.5") {
            implantDropdown.value = "IM-T3711";
  } else if (diameter === "3.7(IM-T37)" && length === "11") {
            implantDropdown.value = "IM-T3711";
  } else if (diameter === "3.7(IM-T37)" && length === "13") {
            implantDropdown.value = "IM-T3713";
  } else if (diameter === "3.7(IM-T37)" && length === "15") {
            implantDropdown.value = "IM-T3715";
  } else if (diameter === "4.2(IM-T42)" && length === "8") {
            implantDropdown.value = "IM-T4208";
  } else if (diameter === "4.2(IM-T42)" && length === "8.5") {
            implantDropdown.value = "IM-T4208";
  } else if (diameter === "4.2(IM-T42)" && length === "10") {
            implantDropdown.value = "IM-T4210";      
  } else if (diameter === "4.2(IM-T42)" && length === "11.5") {
            implantDropdown.value = "IM-T4211";
  } else if (diameter === "4.2(IM-T42)" && length === "11") {
            implantDropdown.value = "IM-T4211";
  } else if (diameter === "4.2(IM-T42)" && length === "13") {
            implantDropdown.value = "IM-T4213";
  } else if (diameter === "4.2(IM-T42)" && length === "15") {
            implantDropdown.value = "IM-T4215";
  } else if (diameter === "5(IM-T50)" && length === "8") {
            implantDropdown.value = "IM-T5008";
  } else if (diameter === "5(IM-T50)" && length === "8.5") {
            implantDropdown.value = "IM-T5008";
  } else if (diameter === "5(IM-T50)" && length === "10") {
            implantDropdown.value = "IM-T5010";      
  } else if (diameter === "5(IM-T50)" && length === "11.5") {
            implantDropdown.value = "IM-T5011";
  } else if (diameter === "5(IM-T50)" && length === "11") {
            implantDropdown.value = "IM-T5011";
  } else if (diameter === "5(IM-T50)" && length === "13") {
            implantDropdown.value = "IM-T5013";
  } else if (diameter === "5(IM-T50)" && length === "15") {
            implantDropdown.value = "IM-T5015";
  } else if (diameter === "3.5(EL-35)" && length === "8.5") {
            implantDropdown.value = "IA-LH-35-8";
  } else if (diameter === "3.5(EL-35)" && length === "8") {
            implantDropdown.value = "IA-LH-35-8";  
  } else if (diameter === "3.5(EL-35)" && length === "10.5") {
            implantDropdown.value = "IA-LH-35-10";
  } else if (diameter === "3.5(EL-35)" && length === "10") {
            implantDropdown.value = "IA-LH-35-10";
  } else if (diameter === "3.5(EL-35)" && length === "12") {
            implantDropdown.value = "IA-LH-35-11.5";
  } else if (diameter === "3.5(EL-35)" && length === "11.5") {
            implantDropdown.value = "IA-LH-35-11.5";
  } else if (diameter === "3.5(EL-35)" && length === "13.5") {
            implantDropdown.value = "IA-LH-35-13";
  } else if (diameter === "3.5(EL-35)" && length === "13") {
            implantDropdown.value = "IA-LH-35-13";
  } else if (diameter === "3.5(EL-35)" && length === "16.5") {
            implantDropdown.value = "IA-LH-35-16";
  } else if (diameter === "3.5(EL-35)" && length === "16") {
            implantDropdown.value = "IA-LH-35-16";
  } else if (diameter === "4.3(EL-43)" && length === "8.5") {
            implantDropdown.value = "IA-LH-43-8"; 
  } else if (diameter === "4.3(EL-43)" && length === "8") {
            implantDropdown.value = "IA-LH-43-8"; 
  } else if (diameter === "4.3(EL-43)" && length === "10.5") {
            implantDropdown.value = "IA-LH-43-10";
  } else if (diameter === "4.3(EL-43)" && length === "10") {
            implantDropdown.value = "IA-LH-43-10";
  } else if (diameter === "4.3(EL-43)" && length === "12") {
            implantDropdown.value = "IA-LH-43-11.5";
  } else if (diameter === "4.3(EL-43)" && length === "11.5") {
            implantDropdown.value = "IA-LH-43-11.5";
  } else if (diameter === "4.3(EL-43)" && length === "13.5") {
            implantDropdown.value = "IA-LH-43-13";
  } else if (diameter === "4.3(EL-43)" && length === "13") {
            implantDropdown.value = "IA-LH-43-13";
  } else if (diameter === "4.3(EL-43)" && length === "16.5") {
            implantDropdown.value = "IA-LH-43-16";
  } else if (diameter === "4.3(EL-43)" && length === "16") {
            implantDropdown.value = "IA-LH-43-16";             
  } else if (diameter === "5(EL-50)" && length === "8.5") {
            implantDropdown.value = "IA-LH-50-8";  
  } else if (diameter === "5(EL-50)" && length === "10.5") {
            implantDropdown.value = "IA-LH-50-10";
  } else if (diameter === "5(EL-50)" && length === "12") {
            implantDropdown.value = "IA-LH-50-11.5";
  } else if (diameter === "5(EL-50)" && length === "13.5") {
            implantDropdown.value = "IA-LH-50-13";
  } else if (diameter === "5(EL-50)" && length === "16.5") {
            implantDropdown.value = "IA-LH-50-16";
  } else if (diameter === "4(ITT4)" && length === "8.5") {
            implantDropdown.value = "ITT408"; 
  } else if (diameter === "4(ITT4)" && length === "8") {
            implantDropdown.value = "ITT408"; 
  } else if (diameter === "4(ITT4)" && length === "10") {
            implantDropdown.value = "ITT410";
  } else if (diameter === "4(ITT4)" && length === "12") {
            implantDropdown.value = "ITT412";
  } else if (diameter === "4(ITT4)" && length === "14") {
            implantDropdown.value = "ITT414";
  } else if (diameter === "5(ITT5)" && length === "8.5") {
            implantDropdown.value = "ITT508"; 
  } else if (diameter === "5(ITT5)" && length === "8") {
            implantDropdown.value = "ITT508"; 
  } else if (diameter === "5(ITT5)" && length === "10") {
            implantDropdown.value = "ITT510";
  } else if (diameter === "5(ITT5)" && length === "12") {
            implantDropdown.value = "ITT512";
  } else if (diameter === "5(ITT5)" && length === "14") {
            implantDropdown.value = "ITT514";
  } else if (diameter === "IV-DC30/EX30-37" && length === "8") {
            implantDropdown.value = "IV-DC30/EX30-3708";
  } else if (diameter === "IV-DC30/EX30-37" && length === "8.5") {
            implantDropdown.value = "IV-DC30/EX30-3708";
  } else if (diameter === "IV-DC30/EX30-37" && length === "10") {
            implantDropdown.value = "IV-DC30/EX30-3710";
  } else if (diameter === "IV-DC30/EX30-37" && length === "11.5") {
            implantDropdown.value = "IV-DC30/EX30-3711";
  } else if (diameter === "IV-DC30/EX30-37" && length === "11") {
            implantDropdown.value = "IV-DC30/EX30-3711";
  } else if (diameter === "IV-DC30/EX30-37" && length === "13") {
            implantDropdown.value = "IV-DC30/EX30-3713"; 
  } else if (diameter === "IV-DC30/EX30-37" && length === "15") {
            implantDropdown.value = "IV-DC30/EX30-3715"; 
  } else if (diameter === "IV-DC35/EX35-45" && length === "8") {
            implantDropdown.value = "IV-DC35/EX35-4508";
  } else if (diameter === "IV-DC35/EX35-45" && length === "8.5") {
            implantDropdown.value = "IV-DC35/EX35-4508";
  } else if (diameter === "IV-DC35/EX35-45" && length === "10") {
            implantDropdown.value = "IV-DC35/EX35-4510";
  } else if (diameter === "IV-DC35/EX35-45" && length === "11.5") {
            implantDropdown.value = "IV-DC35/EX35-4511";
  } else if (diameter === "IV-DC35/EX35-45" && length === "11") {
            implantDropdown.value = "IV-DC35/EX35-4511";
  } else if (diameter === "IV-DC35/EX35-45" && length === "13") {
            implantDropdown.value = "IV-DC35/EX35-4513"; 
  } else if (diameter === "IV-DC35/EX35-45" && length === "15") {
            implantDropdown.value = "IV-DC35/EX35-4515"; 
  } else if (diameter === "IV-DC40/EX40-50" && length === "8") {
            implantDropdown.value = "IV-DC40/EX40-5008";
  } else if (diameter === "IV-DC40/EX40-50" && length === "8.5") {
            implantDropdown.value = "IV-DC40/EX40-5008";
  } else if (diameter === "IV-DC40/EX40-50" && length === "10") {
            implantDropdown.value = "IV-DC40/EX40-5010";
  } else if (diameter === "IV-DC40/EX40-50" && length === "11.5") {
            implantDropdown.value = "IV-DC40/EX40-5011";
  } else if (diameter === "IV-DC40/EX40-50" && length === "11") {
            implantDropdown.value = "IV-DC40/EX40-5011";
  } else if (diameter === "IV-DC40/EX40-50" && length === "13") {
            implantDropdown.value = "IV-DC40/EX40-5013"; 
  } else if (diameter === "IV-DC40/EX40-50" && length === "15") {
            implantDropdown.value = "IV-DC40/EX40-5015";                                                                                                                                                                                   
}
  // Add more conditions for auto-selection as needed  
  function printImage() {
    window.print(); 
}
}