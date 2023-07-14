nameError = document.getElementById('name-err');
phoneError = document.getElementById('phone-err');
emailError = document.getElementById('email-err');
messageError = document.getElementById('message-err');
submitError = document.getElementById('submit-err');


function nameValidation(){
	var name = document.getElementById('name-space').value;
	
	if(name.length == 0){
		nameError.innerHTML = 'Name is Required';
		return false;
	}
	if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
		nameError.innerHTML = 'Write full name';
		return false;
	}
	nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
	return true;
}
// console.log(formValidation())

function phoneValidation(){
	var phone = document.getElementById('phone-space').value;
	if(phone.length==0){
		phoneError.innerHTML= 'Phone no is Required';
		return false;
	}
	if(phone.length !== 11){
		phoneError.innerHTML= 'Phone number should be 11 digits';
		return false;
	}
	if(!phone.match(/^[0-9]{11}$/)){
		phoneError.innerHTML= 'only phone digits Please';
		return false;
	}

	phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
	return true;
}

function emailValidation(){
	var email = document.getElementById('email-space').value;

	if(email.length==0){
		emailError.innerHTML= 'Email is Required';
		return false;
	}
	if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
		emailError.innerHTML = 'Email is not correct';
		return false;
	}
	emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
	return true;
}


function messageValidation(){
	var message = document.getElementById('message-space').value;
	var required = 30;
	var left = required - message.length;

	if(left>0){
		messageError.innerHTML = left+' '+ 'Add more Characters';
		return false;
	}
	messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
	return true;
}


function formValidation(){
	if(!nameValidation() || !phoneValidation() || !emailValidation() || !messageValidation()){
		submitError.style.display='block';
		submitError.innerHTML = 'Please fill all cells correctly';
		setTimeout(function(){submitError.style.display='none';},3000);

		// setTimeout(()=>{
		// 	submitError.style.display='none';
		// },3000)
		return false;
	}
}