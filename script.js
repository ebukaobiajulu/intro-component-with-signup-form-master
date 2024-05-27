const form = document.getElementById("form");
const firstname = document.getElementById("firstName");
const lastname = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("passWord");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // to get values from the inputs

  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstnameValue === "" || firstnameValue == 'booeks') {
    //   show error
    // add error class
    setErrorFor(firstname, "First Name cannot cannot be empty");
    
  }else{
    //   add success class
    setSuccessFor(firstname);
  }

//   Last Name
  if (lastnameValue === "") {
    //   show error
    // add error class
    setErrorFor(lastname, "Last Name cannot be empty");
    
  } else {
    //   add success class
    setSuccessFor(lastname);
  }


  

//   Password

// if (passwordValue.length > 15) {
//     //     //   show error
//     //     // add error class
//         setErrorFor(password, "Password length must be less than 15 characters");
    
        
        
//       }else{
//           setSuccessFor(password)
//       }
  if (passwordValue === "") {
    //   show error
    // add error class
    setErrorFor(password, "Password cannot be empty");
    
  }else if (passwordValue.length < 8 ){
    setErrorFor(password, 'Password length must be more than 8 characters')
  }
   
    else{
    //   add success class
    setSuccessFor(password);
  }
  
//   

//   Email
  if (emailValue === "") {
    //   show error
    // add error class
    setErrorFor(email, "Email field cannot be empty");
    
  } else{
    //   add success class
    setSuccessFor(email);
  }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    // formControl.className = 'form-control error'

    formControl.classList.add('error');
    formControl.classList.remove('success');
}

function setSuccessFor (input){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = '';
    formControl.classList.add('success');
    formControl.classList.remove('error');

}