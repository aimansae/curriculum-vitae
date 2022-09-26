const { EmailJSResponseStatus } = require("@emailjs/browser");

function sendMail(contactForm){
    emailjs.send('gmail', 'rosie', {
        //nams from the form
        'from_name': contactForm.name.value,
        'from_name': contactForm.name.value,
        'project_request': contactForm.projectsummary.value,
    } )
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
     return false;  // To block from loading a new page
    }