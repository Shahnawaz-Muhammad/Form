// function addRowContainer() {
//     var rowContainer = document.createElement("div");
//     rowContainer.className = "row  row-row add-contact-info";

//     var mobileInputGroup = createInputGroup("MOBILE", "mobile", "3445405464", "mobileError");
//     var whatsAppInputGroup = createInputGroup("WHATSAPP NO", "whatsApp", "3154548454", "whatsAppError");
//     var residencePhoneInputGroup = createInputGroup("RESIDENCE PHONE NO", "residencePhone", "", "residencePhoneError");
//     var officePhoneInputGroup = createInputGroup("OFFICE PHONE NO", "officePhone", "", "officePhoneError");

//     rowContainer.appendChild(mobileInputGroup);
//     rowContainer.appendChild(whatsAppInputGroup);
//     rowContainer.appendChild(residencePhoneInputGroup);
//     rowContainer.appendChild(officePhoneInputGroup);

//     var mainContainer = document.getElementsByClassName("section-container")[0];
//     mainContainer.appendChild(rowContainer);
//   }

//   function createInputGroup(labelText, inputName, placeholder, errorId) {
//     var inputGroup = document.createElement("div");
//     inputGroup.className = "col-sm-12 col-md-6 col-lg-3 form-input-group";

//     var label = document.createElement("label");
//     label.setAttribute("for", inputName);
//     label.className = "form-label";
//     label.textContent = labelText;

//     var input = document.createElement("input");
//     input.id = inputName;
//     input.type = "text";
//     input.className = "form-control";
//     input.name = inputName;
//     input.value = "";
//     input.placeholder = placeholder;

//     var errorDiv = document.createElement("div");
//     errorDiv.id = errorId;
//     errorDiv.className = "error-message";

//     inputGroup.appendChild(label);
//     inputGroup.appendChild(input);
//     inputGroup.appendChild(errorDiv);

//     return inputGroup;
//   }



// ------------------------------------------------------------------------------------------------- //

// function addRowContainer() {
//     var mainContainer = document.getElementsByClassName("add-contact-info")[0];

//     var rowContainer = document.createElement("div");
//     rowContainer.className = "row row-container";

//     var mobileInputGroup = createInputGroup("MOBILE", "mobile", "3445405464", "mobileError");
//     var whatsAppInputGroup = createInputGroup("WHATSAPP NO", "whatsApp", "3154548454", "whatsAppError");
//     var residencePhoneInputGroup = createInputGroup("RESIDENCE PHONE NO", "residencePhone", "", "residencePhoneError");
//     var officePhoneInputGroup = createInputGroup("OFFICE PHONE NO", "officePhone", "", "officePhoneError");

//     rowContainer.appendChild(mobileInputGroup);
//     rowContainer.appendChild(whatsAppInputGroup);
//     rowContainer.appendChild(residencePhoneInputGroup);
//     rowContainer.appendChild(officePhoneInputGroup);

//     mainContainer.appendChild(rowContainer);
//   }

//   function createInputGroup(labelText, inputName, placeholder, errorId) {
//     var inputGroup = document.createElement("div");
//     inputGroup.className = "col-sm-12 col-md-6 col-lg-3 form-input-group";

//     var label = document.createElement("label");
//     label.setAttribute("for", inputName);
//     label.className = "form-label";
//     label.textContent = labelText;

//     var input = document.createElement("input");
//     input.id = inputName;
//     input.type = "text";
//     input.className = "form-control";
//     input.name = inputName;
//     input.value = "";
//     input.placeholder = placeholder;

//     var errorDiv = document.createElement("div");
//     errorDiv.id = errorId;
//     errorDiv.className = "error-message";

//     inputGroup.appendChild(label);
//     inputGroup.appendChild(input);
//     inputGroup.appendChild(errorDiv);

//     return inputGroup;
//   }

// function addRowContainer() {
//     var mainContainer = document.getElementsByClassName("add-contact-info")[0];

//     var rowContainer = document.createElement("div");
//     rowContainer.className = "row row-container";

//     var mobileInputGroup = createInputGroup("MOBILE", "mobile", "3445405464", "mobileError");
//     var whatsAppInputGroup = createInputGroup("WHATSAPP NO", "whatsApp", "3154548454", "whatsAppError");
//     var residencePhoneInputGroup = createInputGroup("RESIDENCE PHONE NO", "residencePhone", "", "residencePhoneError");
//     var officePhoneInputGroup = createInputGroup("OFFICE PHONE NO", "officePhone", "", "officePhoneError");

//     rowContainer.appendChild(mobileInputGroup);
//     rowContainer.appendChild(whatsAppInputGroup);
//     rowContainer.appendChild(residencePhoneInputGroup);
//     rowContainer.appendChild(officePhoneInputGroup);
    
//     // Add cross icon for deleting the row
//     var crossIcon = document.createElement("i");
//     crossIcon.className = "fa fa-times-circle delete-icon position-absolute";
//     crossIcon.addEventListener("click", function() {
//       mainContainer.removeChild(rowContainer);
//     });
//     rowContainer.appendChild(crossIcon);

//     mainContainer.appendChild(rowContainer);
//   }

//   function createInputGroup(labelText, inputName, placeholder, errorId) {
//     var inputGroup = document.createElement("div");
//     inputGroup.className = "col-sm-12 col-md-6 col-lg-3 form-input-group";

//     var label = document.createElement("label");
//     label.setAttribute("for", inputName);
//     label.className = "form-label";
//     label.textContent = labelText;

//     var input = document.createElement("input");
//     input.id = inputName;
//     input.type = "text";
//     input.className = "form-control";
//     input.name = inputName;
//     input.value = "";
//     input.placeholder = placeholder;

//     var errorDiv = document.createElement("div");
//     errorDiv.id = errorId;
//     errorDiv.className = "error-message";

//     inputGroup.appendChild(label);
//     inputGroup.appendChild(input);
//     inputGroup.appendChild(errorDiv);

//     return inputGroup;
//   }

function addRowContainer() {
    var mainContainer = document.getElementsByClassName("add-contact-info")[0];

    var rowContainer = document.createElement("div");
    rowContainer.className = "row row-container";

    var mobileInputGroup = createInputGroup("MOBILE", "mobile", "3445405464", "mobileError");
    var whatsAppInputGroup = createInputGroup("WHATSAPP NO", "whatsApp", "3154548454", "whatsAppError");
    var residencePhoneInputGroup = createInputGroup("RESIDENCE PHONE NO", "residencePhone", "", "residencePhoneError");
    var officePhoneInputGroup = createInputGroup("OFFICE PHONE NO", "officePhone", "", "officePhoneError");

    rowContainer.appendChild(mobileInputGroup);
    rowContainer.appendChild(whatsAppInputGroup);
    rowContainer.appendChild(residencePhoneInputGroup);
    rowContainer.appendChild(officePhoneInputGroup);

    mainContainer.appendChild(rowContainer);
  }

  function createInputGroup(labelText, inputName, placeholder, errorId) {
    var inputGroup = document.createElement("div");
    inputGroup.className = "col-sm-12 col-md-6 col-lg-3 form-input-group";

    var label = document.createElement("label");
    label.setAttribute("for", inputName);
    label.className = "form-label";
    label.textContent = labelText;

    var input = document.createElement("input");
    input.id = inputName;
    input.type = "text";
    input.className = "form-control";
    input.name = inputName;
    input.value = "";
    input.placeholder = placeholder;

    var errorDiv = document.createElement("div");
    errorDiv.id = errorId;
    errorDiv.className = "error-message";

    inputGroup.appendChild(label);
    inputGroup.appendChild(input);
    inputGroup.appendChild(errorDiv);

    // Add cross icon for deleting the row
    var deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-times-circle delete-icon";
    deleteIcon.addEventListener("click", function() {
      var rowContainer = this.parentNode.parentNode;
      rowContainer.parentNode.removeChild(rowContainer);
    });

    inputGroup.appendChild(deleteIcon);

    return inputGroup;
  }