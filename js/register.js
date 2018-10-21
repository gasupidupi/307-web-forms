$(document).ready(function(event){

  $("#passwordError").html(function (){
    return '<p>Password complexity</p>';
  });

  $("#password").keyup(function(event){
    var passwordInput = $(this).serializeArray();
    var registerItems = $(registerForm).serializeArray();
    console.log(passwordInput);
    console.log(registerItems);
    console.log(passwordInput[0].value);

    var passwordString = passwordInput[0].value;

    console.log("passwordString: " + passwordString);
    console.log("passwordString.length: " + passwordString.length);
    if(passwordString.length < 5){
      console.log(passwordInput[0].length);
      $("#passwordError").html(function (){
        return '<p style="color:red">Too short.</p>';
      });
    } else if(passwordInput[0].value==registerItems[2].value||passwordInput[0].value=="123456"||passwordInput[0].value=="Password"||passwordInput[0].value=="12345678"||passwordInput[0].value=="qwerty"||passwordInput[0].value=="12345"||passwordInput[0].value=="123456789"){
      $("#passwordError").html(function (){
        return '<p style="color:red">Very weak.</p>';
      });
    } else{
      $("#passwordError").html(function (){
        return '<p style="color:green">Good.</p>';
      });
    }
  })

  $("#registerForm").on("submit", function(event){
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
    console.log("newUserString: " + newUserString);
    // localStorage.setItem("username."+registerItems.username,newUserString);
    if(documentName =="index"){
      window.location = "../index.html";
    }
    window.location = "detail.html";
  }
  })


})
