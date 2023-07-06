const id = (id) => document.getElementById(id);
const className = (className) => document.getElementsByClassName(className);

// Form element
const contactForm = id('submit-form');

// Form fields
const nameValue = id('name');
const emailValue = id('email');
const subjectValue = id('subject');
const phoneValue = id('phone');
const messageValue = id('messageBox');

console.log(contactForm);

// Display errors in HTML
const alertMessageBox = className('help-block');

// Regular expression pattern to match special characters
const specialCharsPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;


// Form submission event listener
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Reset error messages
    for (let i = 0; i < alertMessageBox.length; i++) {
        alertMessageBox[i].innerText = '';
    }

    // Perform form field validation
    let isValid = true;

    // Name validation
    if (nameValue.value.trim() === '') { // if empty
        alertMessageBox[0].innerText = 'Please enter your name.';
        isValid = false;
    } else if (specialCharsPattern.test(nameValue.value)) { // if used any special character in the field
        alertMessageBox[0].innerText = 'Special characters are not allowed in the name.';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailPattern.test(emailValue.value)) { // if not email
        alertMessageBox[1].innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // Subject validation
    if (subjectValue.value.trim() === '') { // if empty
        alertMessageBox[2].innerText = 'Please enter your subject for the message.';
        isValid = false;
    } else if (specialCharsPattern.test(subjectValue.value)) { // if used any special character in the field
        alertMessageBox[2].innerText = 'Special characters are not allowed in the subject field.';
        isValid = false;
    }

    // Message validation
    if (messageValue.value.trim() === '') { // if empty
        alertMessageBox[3].innerText = 'Please enter a message.';
        isValid = false;
    } else if (specialCharsPattern.test(messageValue.value)) { // if used any special character in the field
        alertMessageBox[3].innerText = 'Special characters are not allowed in the message field.';
        isValid = false;
    }

    // Phone number validation
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneValue.value)) { // if not equal to 10 numbers
        alertMessageBox[4].innerText = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    } else if (specialCharsPattern.test(phoneValue.value)) { // if used any special character in the field
        alertMessageBox[4].innerText = 'Special characters are not allowed in the phone field.';
        isValid = false;
    }

    // Submit the form if valid
    if (isValid) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxBL8HUILCA4MDxbKbxQCceZG8txz_DYyd8mI__HOCEvm1p_S0PfNxK60l9yyUMxIjz-A/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully");
                window.location.reload();
                //window.location.href="https://google.com";
            },
            error: function (err) {
                alert("Something Error");
            }
        });
    }
});


