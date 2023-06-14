console.log("Hello")

var submitBtn = document.getElementById('submitBtn');


// Function to handle the button click
function handleClick(event) {
    event.preventDefault(); // Prevent form submission
    
    // Display "Button clicked"
    console.log("Button clicked");
  }
  
  // Add event listener to the button's click event
  submitBtn.addEventListener('click', handleClick);
  