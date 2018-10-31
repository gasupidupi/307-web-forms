function check(){

  var username = document.registerForm.username.value;
  var email = document.registerForm.email.value;
  var tel = document.registerForm.tel.value;
  var password = document.registerForm.password.value;

  var checkName = /[a-zA-ZäöüÄÖÜ ,.'-]+$/;
  var checkEmail = /[a-zA-Z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  var checkTel = /[0-9+]{10,20}$/;
  var checkPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  var empty = '<p style="color:red">This field must not be empty.</p>';

  var userNames = JSON.parse(localStorage.getItem("userNames")) || [];

  console.log(username + email + tel + password);
  console.log("validating");


  document.getElementById('usernameError').innerHTML = "";

  for(var i = 0; i < userNames.length; i++){
    user = JSON.parse(localStorage.getItem("user." + userNames[i]))
    console.log("user: ", user);
    console.log("username: ", user.username, "inputusername: ", username);
    if(username == user.username){
      document.getElementById('usernameError').innerHTML = '<p style="color:red">User already exsits.</p>';
      document.registerForm.username.focus();
      return false;
    }else {
      document.getElementById('usernameError').innerHTML = "";
    }
  }

  if (username == "") {
    document.getElementById('usernameError').innerHTML = empty;
    document.registerForm.username.focus();
    return false;

  }else {
    document.getElementById('usernameError').innerHTML = "";
  }


    if (email == "") {
      document.getElementById('emailError').innerHTML = empty;
      document.registerForm.email.focus();
      return false;

    }else {
      document.getElementById('emailError').innerHTML = "";
    }

    if (password == "") {
      document.getElementById('passwordError').innerHTML = empty;
      document.registerForm.username.focus();
      return false;

    }else {
      document.getElementById('passwordError').innerHTML = "";
    }

    if (!checkEmail.test(email)){
      document.getElementById('emailError').innerHTML = '<p style="color:red">Please use a valid email.</p>';
      document.registerForm.email.focus();
      return false;
    }else {
      document.getElementById('emailError').innerHTML = "";
    }

	if (!checkPassword.test(password)){
      document.getElementById('passwordError').innerHTML = '<p style="color:red">Password needs to contain at least eight characters, a number, one uppercase letter and one lowercase letter.</p>';
      document.registerForm.email.focus();
      return false;
    }else {
      document.getElementById('emailError').innerHTML = "";
    }

    if (!checkTel.test(tel)){
      document.getElementById('telError').innerHTML = '<p style="color:red">Please use between 10 and 20 digits and no spaces.</p>';
      document.registerForm.tel.focus();
      return false;
    }else {
      document.getElementById('telError').innerHTML = "";
    }
    return true;
}
