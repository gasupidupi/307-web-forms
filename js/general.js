
$(document).ready(function(event){
   // test session storage
   try {
   sessionStorage.setItem("test", "item");
   var test = sessionStorage.getItem("test");
   if(!test) {
       alert("Third party cookies need to be activated.");
   }
  } catch(e) {
      alert("Third party cookies need to be activated.");
  }

  $("#loginDropdownContainer").html(function (){
    return '<span id="loginDropdown" class="dropdown white btn"><img src="../img/dropdown.png"></span>'
  })

  $("#loginDropdownContainer").on("click", function(event){
    if(sessionStorage.getItem("currentuser")==null){
      $("#loginDropdownContainer").html(function (){
        return '<div id="loginBox"><ul><li class="indexJump">index</li><li class="loginJump">login</li><li class="registerJump">register</li><li class="ueberUnsJump">&uuml;ber</li></ul></div>';
      });
    }
    else{
      $("#loginDropdownContainer").html(function (){
        return '<div id="loginBox"><ul><li class="indexJump">index</li><li class="registerJump">register</li><li class="logOut">logout</li><li class="ueberUnsJump">&uuml;ber</li></ul></div>';
      });
    }
    $(".loginJump").on("click", function(event){
      window.location = "login.html";
      return false;
    })
    $(".indexJump").on("click", function(event){
      window.location = "../index.html";
      return false;
    })

    $(".registerJump").on("click", function(event){
      window.location = "register.html";
      return false;
    })
	
	 $(".ueberUnsJump").on("click", function(event){
      window.location = "ueberUns.html";
      return false;
    })
	
    $(".logOut").on("click", function(event){
      if(sessionStorage.currentuser){
      sessionStorage.removeItem('currentuser');
      window.alert("You succesfully logged out.");
      console.log("clicked logout")
      window.location.reload();
      return false;
    }
    else{
      window.alert("If you could act while you don't exist, perhaps religion wouldn't be too far off after all.");
    }
    })

    return false;
  })
  $(".top").on("mouseleave", function(event){
    $("#loginDropdownContainer").html(function (){
      return '<span id="loginDropdown" class="dropdown white btn"><img src="../img/dropdown.png"></span>';
    });
    return false;
  })



  var $form = $(".needs-validation");
  $form.on('submit', function(event) {
    if (this.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.classList.add('was-validated');
    return false;
  });


})
