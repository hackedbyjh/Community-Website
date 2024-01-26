$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm(); // Call submitForm() function when form is valid
    }
});

function submitForm(){
    // Initialize EmailJS with your user ID
    emailjs.init("user_ZT7rBieC356W4uDwh5hOx");

    // Send form data
    emailjs.send("service_xet5ku4","template_f5brhbo",'#contactForm')
    .then(function(response) {
        formSuccess();
        console.log('SUCCESS!', response.status, response.text);
        alert("Form Submitted Successfully");
    }, function(error) {
        console.log('FAILED...', error);
        formError();
        submitMSG(false,error);
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Form Submitted!");
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    var msgClasses;
    if(valid){
        msgClasses = "h3 text-left tada animated text-dark";
    } else {
        msgClasses = "h3 text-left text-dark";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}