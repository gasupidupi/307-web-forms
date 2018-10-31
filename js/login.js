$(document).ready(function(event){
  $("#loginForm").on("submit", function(event){
    console.log("hello submit");
    console.log($(this).serializeArray());//this => form
    var loginItems = $(this).serializeArray();
    var inputUserName = loginItems[0].value;
    var inputPassword = loginItems[1].value;
    var user = JSON.parse(localStorage.getItem("user." + inputUserName));
    console.log(inputUserName, inputPassword, user);




    if((user)&&(inputPassword == user.password)){
      console.log("hello logged in");
      sessionStorage.setItem("currentuser", user.username);
      // sessionStorage.setItem("currentdocument", "dadalyripipidon");
      var documentName = sessionStorage.getItem("currentdocument");
      console.log("document Name: ", documentName);

        window.location = "../index.html";
}
    else{
      $("#invalidLogin").html(function (){
        return '<br><div class="alert alert-danger" role="alert">Invalid username or password</div>';
      });
    }
    return false;
  })
})
