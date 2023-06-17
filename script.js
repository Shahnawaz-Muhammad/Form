 // Function to validate the form fields
 function validateForm(event) {
    // Prevent the form from submitting
    event.preventDefault();

    clearErrorMessages();


    // Validate the form fields
    var plotSize = document.getElementById('plotSize').value;
    var paymentPlan = document.getElementById('paymentPlan').value;
    var title = document.getElementById('title').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var nicType = document.getElementById('nicType').value;
    var nicNumber = document.getElementById('nicNumber').value;
    var confirmNicNumber = document.getElementById('confirmNicNumber').value;
    var nicIssueDate = document.getElementById('nicIssueDate').value;
    var nicExpiryDate = document.getElementById('nicExpiryDate').value;
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;
    var mobile = document.getElementById('mobile').value;
    var whatsApp = document.getElementById('whatsApp').value;
    var residencePhone = document.getElementById('residencePhone').value;
    var officePhone = document.getElementById('officePhone').value;
    var permanentAddressOne = document.getElementById('permanentAddressOne').value;
    var permanentAddressTwo = document.getElementById('permanentAddressTwo').value;
    var permanentAddressThree = document.getElementById('permanentAddressThree').value;
    var permanentCountry = document.getElementById('permanentCountry').value;
    var permanentState = document.getElementById('permanentState').value;
    var permanentCity = document.getElementById('permanentCity').value;
    var permanentZip = document.getElementById('permanentZip').value;
    var mailingAddressOne = document.getElementById('mailingAddressOne').value;
    var mailingAddressTwo = document.getElementById('mailingAddressTwo').value;
    var mailingAddressThree = document.getElementById('mailingAddressThree').value;
    var mailingCountry = document.getElementById('mailingCountry').value;
    var mailingState = document.getElementById('mailingState').value;
    var mailingCity = document.getElementById('mailingCity').value;
    var mailingZip = document.getElementById('mailingZip').value;

    // Perform validation for each field
    var isValid = true;

    if (plotSize === 'Select Size') {
      isValid = false;
      displayErrorMessage('plotSize', 'Please select a plot size.');
    }

    if (paymentPlan === 'Select Plan') {
      isValid = false;
      displayErrorMessage('paymentPlan', 'Please select a Payment Plan.');
    }

    if (title === 'Select Title') {
        isValid = false;
        displayErrorMessage('title', 'Title should not be empty');
      }

      if (firstName === '') {
        isValid = false;
        displayErrorMessage('firstName', 'First Name not be empty');
      }

      if (lastName === '') {
        isValid = false;
        displayErrorMessage('lastName', 'Last Name not be empty');
      }

      if (nicType === 'Computorized National Identity Card') {
        isValid = false;
        displayErrorMessage('nicType', 'Please Select NIC Type');
      }

      if (nicNumber === '') {
        isValid = false;
        displayErrorMessage('nicNumber', 'NIC Number should not be empty');
      }

      if (confirmNicNumber === '') {
        isValid = false;
        displayErrorMessage('confirmNicNumber', 'CNIC not matched');
      }

      if (nicIssueDate === '') {
        isValid = false;
        displayErrorMessage('nicIssueDate', 'Please select CNIC issue date');
      }

      if (nicExpiryDate === '') {
        isValid = false;
        displayErrorMessage('nicExpiryDate', 'Please select CNIC expiry date');
      }

      if (email === '') {
        isValid = false;
        displayErrorMessage('email', 'Please fill your email');
      }

      if (confirmEmail === '') {
        isValid = false;
        displayErrorMessage('confirmEmail', 'Email not matched');
      }

      if (mobile === '') {
        isValid = false;
        displayErrorMessage('mobile', 'Please provide mobile number');
      }

      if (whatsApp === '') {
        isValid = false;
        displayErrorMessage('whatsApp', 'Please provide whatsapp number');
      }

      if (residencePhone === '') {
        isValid = false;
        displayErrorMessage('residencePhone', 'Please provide Residence Phone number');
      }

      if (officePhone === '') {
        isValid = false;
        displayErrorMessage('officePhone', 'Please provide Office Phone number');
      }

      if (permanentCountry === '') {
        isValid = false;
        displayErrorMessage('permanentCountry', 'Please Select Permanent Country');
      }

      if (permanentState === '') {
        isValid = false;
        displayErrorMessage('permanentState', 'Please Select Permanent State');
      }

      if (permanentCity === '') {
        isValid = false;
        displayErrorMessage('permanentCity', 'Please Select Permanent City');
      }

      
    function displayErrorMessage(fieldId, message) {
        var errorElement = document.getElementById(fieldId + 'Error');
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';
      }

      function clearErrorMessages() {
        var errorElements = document.getElementsByClassName('error-message');
        for (var i = 0; i < errorElements.length; i++) {
          errorElements[i].innerHTML = '';
          errorElements[i].style.display = 'none';
        }
      }

    // If all fields are valid, submit the form
    if (isValid) {
      document.getElementById('step_1_application_form').submit();
    }
  }

  // Add event listeners for focus and submit events
  document.getElementById('submitBtn').addEventListener('click', validateForm);
  document.getElementById('step_1_application_form').addEventListener('submit', validateForm);
