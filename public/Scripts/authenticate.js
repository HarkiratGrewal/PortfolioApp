(function (content) {
    // Local Variables
    let FullName = document.getElementById("FullName");
    let ContactNumber = document.getElementById("ContactNumber");
    let EmailAddress = document.getElementById("EmailAddress");
    let Message = document.getElementById("Message");

    function clearValidationMessages() {
        FullName.setCustomValidity("");
        ContactNumber.setCustomValidity("");
        EmailAddress.setCustomValidity("");
        Message.setCustomValidity("");
    }

    function setEventHandlersForFormElements() {

        for (const element of document.forms[0].elements) {
            if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) {
                // when the user is inputting data
                element.addEventListener("input", function () {
                    element.setCustomValidity("");
                });

                // when the user enters incorrect data
                element.addEventListener("invalid", function () {
                    switch(element.id) {
                        case "FullName":
                        element.setCustomValidity("Enter atleast 2 character");
                        break;
                        case "ContactNumber":
                        element.setCustomValidity("Pattern is ###-###-####");
                        break;
                        case "EmailAddress":
                        element.setCustomValidity("Invalid Email");
                        break;
                        case "Message":
                        element.setCustomValidity("Please enter a message!");
                        break;
                        default:
                        element.setCustomValidity("I dared you to skip!");
                        break;
                    }
                    
                });
            }

        }
    }

    function ValidateForm() {
        setEventHandlersForFormElements();
    }


    function ContactContent() {
        clearValidationMessages();

        console.log("%c Contact Content Accessed...", "font-weight:bold; font-size: 20px;");

        document.getElementsByClassName("card-title")[0].textContent = "CONTACT";

        // create a new HTML Element
        let cancelButton = document.createElement("button");
        // configure the HTML Element
        cancelButton.setAttribute("class", "btn btn-warning");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("index.html", "_parent");
        });

        // add the HTML Element to the page somewhere 
        // in this case I'm attaching a button to the first forml element
        document.forms[0].appendChild(cancelButton);


        let SendButton = document.getElementById("SendButton");
        SendButton.addEventListener("click", (event) => {
            //event.preventDefault();
            if (!document.forms[0].checkValidity()) {
                OutputFormDataToConsole();
                ValidateForm();
            }


        });

    }
    // public functions exposed to the content namespace
    content.ContactContent = ContactContent;

})(content || (content = {}));
