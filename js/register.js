$(document).ready(function(event){
  if(sessionStorage.getItem("register")=="success"){
    console.log("success");
    $("#registerResponse").html(function (){
      return '<div class="alert alert-success"><img src="../img/Checkmark_green.svg" height="24" /> You successfully registered</div>';
    });
    sessionStorage.setItem("register", "none");
  }

    console.log("registerform loaded");
    console.log(sessionStorage.getItem("currentdocument"));

  $("#passwordError").html(function (){
    return '<p>Password complexity</p>';
  });

  $("#password").keyup(function(event){

	var password = document.registerForm.password.value;
	var checkPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
	if (!checkPassword.test(password)){
      document.getElementById('passwordError').innerHTML = '<p style="color:red">Password needs to contain at least eight characters, a number, one uppercase letter and one lowercase letter.</p>';
      document.registerForm.password.focus();

    }else {
      document.getElementById('passwordError').innerHTML = '<p style="color:green">Good.</p>';
    }
  })

  $("#registerForm").on("submit", function(event){
    if(!check()) {
       return false;
    }
    var userNames = JSON.parse(localStorage.getItem("userNames")) || [];
    var registerItems = $(this).serializeArray();
    var newUserString = "";
    var newUserObject = {};
    console.log("registerItems: ", registerItems);
    console.log("registerItems[2].name: ", registerItems[2].name);
    for(var i = 0; i<registerItems.length; i=i+1){
      newUserObject[registerItems[i].name] = registerItems[i].value;
    }
    newUserString = JSON.stringify(newUserObject);
    localStorage.setItem("user." + newUserObject.username, newUserString);
    userNames.push(newUserObject.username);
    sessionStorage.setItem("register", "success");
    localStorage.setItem("userNames", JSON.stringify(userNames));
    return true;
  })



})
