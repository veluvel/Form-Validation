const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit",e=>{
	e.preventDefault();
	checkInput();
});

function checkInput(){
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	// username
	if(usernameValue === ""){
		setError(username,"Username Can not Be Blank");
	}
	else{
		setSuccess(username);
	}
	
	//email
	if(emailValue === ""){
		setError(email,"Email Can not Be Blank");
	}
	else if(!isEmail(emailValue)){
		setError(email,"Not a Valid Email")
	};

	function isEmail(email){
		return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.(email);
	}

	
	
	//password
	if(password === ""){
		setError(password,"Password Can not Be Blank");
	}
	else{
		setSuccess(password);
	}
	
	//Password2
	if(password2 === ""){
		setError(password2,"Password Can not Be Blank");
	}
	else if(password !== password2){
		setError(password2,"Password Can not Be Blank");
	}
	else{
		setSuccess(password2);
	};
}	
	
	function setError(input, message){
		const formcontrol = input.parentElement;
		const small = formcontrol.queryselector("small");
		formcontrol className = form-control .error;
		small.inneText = message;
	}
	function setSuccess(){
		const formcontrol = input.ParentElement;
		formcontrol.className = form-control .success;
	}