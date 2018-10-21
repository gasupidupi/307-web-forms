$(document).ready(function(event){

  sessionStorage.setItem("currentdocument", "index");
  var articleNames = JSON.parse(localStorage.getItem("articleNames")) || [];

  console.log(articleNames);
  for(var i = 0; i < articleNames.length; i++){
    $("#articleList").append(function (){
      article = JSON.parse(localStorage.getItem("article." + articleNames[i]));
      console.log(articleNames[i]);
      // return '<li><a id="' + articleNames[i] + '" href="pages/detail.html">' + articleNames[i] + '</a></li>';
      return '<div class="card" style="width: 20rem;"><div class="card-body"><h4 class="card-title">' + articleNames[i] + '</h4><a href="pages/detail.html" class="goTo btn btn-light" id="' + articleNames[i] + '">Go to Article</a></div></div><br>';
    })
  }

  $(".goTo").click(function(event){
    var article = event.target.id;
    console.log("Clicked:", article);
    sessionStorage.setItem("currentdocument", article);
  })



  $("#loginDropdownContainer").html(function (){
    return '<span id="loginDropdown" class="dropdown white btn"><img src="img/dropdown.png"></span>'
  })

  $("#loginDropdownContainer").on("click", function(event){
    if(sessionStorage.getItem("currentuser")==null){
      $("#loginDropdownContainer").html(function (){
        return '<div id="loginBox"><ul><li class="indexJump">index</li><li class="loginJump">login</li><li class="registerJump">register</li>';
      });
    }
    else{
      $("#loginDropdownContainer").html(function (){
        return '<div id="loginBox"><ul><li class="indexJump">index</li><li class="registerJump">register</li><li class="logOut">logout</li>';
      });
    }
    $(".loginJump").on("click", function(event){
      window.location = "pages/login.html";
      return false;
    })
    $(".indexJump").on("click", function(event){
      window.location.reload();
      return false;
    })

    $(".registerJump").on("click", function(event){
      window.location = "pages/register.html";
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
      return '<span id="loginDropdown" class="dropdown white btn"><img src="img/dropdown.png"></span>';
    });
    return false;
  })



})
