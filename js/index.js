let form = document.querySelector('form');
let fname = document.getElementById('full-name');
let email = document.getElementById('email-address');
let message = document.getElementById('message');
let btn = document.getElementById('submit');

let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateForm(){

   console.clear();

      let dataCollector = {};
      let error = [];

      fname.value = fname.value.trim();
      email.value = email.value.trim();
      message.value = message.value.trim();


      if (fname.value !== ''){
         dataCollector.fullName = fname.value;
      } else {
         error.push('Please enter your Full Name');
      }

      if (email.value !== ''){
         if(validEmail.test(email.value)){
            dataCollector.emailInput = email.value;
         } else {
            error.push('Invalid Email')
         }

      } else {
         error.push('Please enter your Email');
      }

      if (message.value !== ''){
         dataCollector.messageInput = message.value;
      } else {
         error.push('Please enter your Message');
      }

      if (error.length === 0){
         console.log(dataCollector);
         form.reset();
      } else {
         console.log(error);
      }
};

btn.addEventListener('click', validateForm);
