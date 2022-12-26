const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInput();
}
);

function checkInput(){
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	// username
	if(usernameValue === ''){
		setError(username,'Username Can not Be Blank');
	}
	else{
		setSuccess(username);
	}
	
	//email
	if(emailValue === ''){
		setError(email,'Email Can not Be Blank');
	}
	else if(!isEmail(emailValue)){
		setError(email,'Not a Valid Email')
	}
	else{
		setSuccess(email); 
	}

	function isEmail(email){
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)[a-zA-Z]{2,}))$/.test(email);
	}
	 
	//password
	if(passwordValue === ''){
		setError(password,"Password Can not Be Blank");
	} 
	else{
		setSuccess(password);
	}
	
	//Password2
	if(password2Value === ""){
		setError(password2,"Password Can not Be Blank");
	}
	else if(passwordValue !== password2Value){
		setError(password2,"Password Can not Be Blank");
	}
	else{
		setSuccess(password2);
        form.submit()
    };
}	

	function setError(input, message){
		const formcontrol = input.parentElement;
		const small = formcontrol.querySelector("small");
		formcontrol.className = 'form-control error';
		small.inneText = message;
	}
	function setSuccess(input){
		const formcontrol = input.parentElement;
		formcontrol.className = 'form-control success';
	}
    

// const form = document.getElementById("form"); 
//  const username = document.getElementById("username"); 
//  const email = document.getElementById("email"); 
//  const password = document.getElementById("password"); 
//  const password2 = document.getElementById("password2"); 
  
//  form.addEventListener("submit", (e) => { 
//      e.preventDefault(); 
//      checkInput(); 
//  }); 
  
//  function checkInput() { 
//      const usernamevalue = username.value.trim(); 
//      const emailvalue = email.value.trim(); 
//      const passwordvalue = password.value.trim(); 
//      const password2value = password2.value.trim(); 
  
//  // username 
  
//  if (usernamevalue == "") { 
//      setError(username, "UserName Cannot Be Blank"); 
//  }  
//  else { 
//      setSuccess(username); 
//  } 
  
//  // email 
  
//  if (emailvalue == "") { 
//      setError(email, "Email Cannot Be Blank"); 
//  }  
//  else if (!isEmail(emailvalue)) { 
//      setError(email, "Not a Valid Email"); 
//  }  
//  else { 
//      setSuccess(email); 
//  } 
  
//  // password 
  
//  if (passwordvalue == "") {  
//      setError(password, "Password Cannot Be Blank"); 
//  }  
//  else { 
//      setSuccess(password); 
//  } 
  
//  // confirm password 
  
//  if (password2value == "") { 
//      setError(password2, "Password Cannot Be Blank"); 
//  }  
//  else if (passwordvalue !== password2value) { 
//      setError(password2, "Password Dose Not Match"); 
//  }  
//  else { 
//      setSuccess(password2); 
//  } 
//  } 
  
//  // error function 
  
//  function setError(input, message){ 
//      const formControl = input.parentElement; 
//      const small = formControl.querySelector("small"); 
//      formControl.className = "form-control error"; 
//      small.innerText = message; 
//  } 
  
//  // success function 
  
//  function setSuccess(input){   
//      const formControl = input.parentElement; 
//      formControl.className = "form-control success"; 
//  } 
  
//  // email function 
   
//  function isEmail(email) { 
//      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email); 
//  }