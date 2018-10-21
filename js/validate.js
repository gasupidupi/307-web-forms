function check(){
  var username = document.registerForm.username.value;
  var email = document.registerForm.email.value;
  var tel = document.registerForm.tel.value;
  var password = document.registerForm.password.value;

  var checkName = /[a-zA-ZäöüÄÖÜ ,.'-]+$/;
  var checkEmail = /[a-zA-Z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  var checkTel = /[0-9 +]+$/;
  var empty = '<p style="color:red">This field must not be empty.</p>';

  console.log(username + email + tel + password);

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

  if (!checkTel.test(tel)){
    document.getElementById('telError').innerHTML = '<p style="color:red">Please only use numbers and no spaces.</p>';
    document.registerForm.tel.focus();
    return false;
  }else {
    document.getElementById('telError').innerHTML = "";
  }







}
