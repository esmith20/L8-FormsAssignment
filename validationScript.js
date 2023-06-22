//by Emily Smith
//WEB 115-0003
//June 18, 2023
//Forms Assignment .js file
		
// JavaScript code for form validation
		
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve input field element
  var input = document.getElementById('inputField');
  var form = document.getElementById('myForm');

  // event listener for submit event
  form.addEventListener('submit', function(event) {
    // Prevents form from submitting if input data is invalid
    event.preventDefault();

    // Retrieve the input field value
    var inputValue = input.value.trim();
    // validate input via regex for alphanumeric input
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (!alphanumericRegex.test(inputValue)) {
      // Display error message
      displayError('Input must be alphanumeric');
    } else {
      // Submit the form
      displayConfirmation();
      form.submit();
    }
  });

  // Function to display error message
  function displayError(errorMessage) {
    var errorElement = document.getElementById('error-message');
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.id = 'error-message';
      errorElement.style.color = 'red';
      form.insertBefore(errorElement, form.lastElementChild);
    }
    errorElement.textContent = errorMessage;
  }

  // Function to display confirmation if valid input entry
  function displayConfirmation() {
    alert('Form submitted successfully!');
  }
});
