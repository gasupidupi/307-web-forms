$(document).ready(function(event){
  console.log("hello detail");

  var documentName = sessionStorage.getItem("currentdocument");
  console.log("document Name: ", documentName);
  if(documentName =="index"){
    window.location = "../index.html";
  }
  var article = JSON.parse(localStorage.getItem("article."+ documentName));
  console.log(localStorage.getItem("article."+ documentName));
  console.log(article);
  var userName = sessionStorage.getItem("currentuser");
  var existingNotes = JSON.parse(localStorage.getItem("notes."+ documentName)) || [];

  $(".articleContent").html(function (){
    return article.content;
    console.log(article.content);
  });

  $(".title").html(function (){
    return article.title;
    console.log(article.title);
  });



  $("#removeNewNotePanel").off("click", function(event){
    $("#noteForm").html(function (){
      return '';
    });
    return false;
  });

  $("#noteForm").on("submit", function(event){
    console.log("hello submit");
    console.log($(this).serializeArray());//this => form
    var noteItems = $(this).serializeArray();
    var inputContent = noteItems[0].value;
    console.log(inputContent);
    existingNotes.push({ user: userName, content: inputContent, date: Date.now() });
    var noteString = JSON.stringify(existingNotes);
    localStorage.setItem("notes."+ documentName, noteString);
    window.location.reload();
    return false;
  });


  console.log(userName);
  if(userName == null){
    $("#userNameDisplay").html(function (){
      return '<p><a href="login.html">Login</a> to see notes.<p/>';
    });
  }
  else{

    $(".blockDistance").append(function (){
      return '<button id="newNote" class="addButton btn btn-dark m-3">Add new Note</button>';
    })
    for(var i = 0; i < existingNotes.length; i++){
      $("#notes").append(function (){
        var date = new Date(existingNotes[i].date);
        console.log(date.toDateString());
        return '<div class="noteCss card mt-4"><div class="card-body"><h5 class="card-title userNameDisplay">' + existingNotes[i].user + '</h5><p id="noteContentDisplay card-text">' + existingNotes[i].content + '</p><h6 class="dateDisplay card-subtitle mb-2 text-muted">' + date.toString() + '</h6></div></div>';
      }
    )
  }
}
$("#newNote").on("click", function(event){
  console.log("clicked");
  $("#noteForm").html(function (){
    return '<textarea name="noteText" class="detailNoteText"></textarea><button class="bt btn-dark" type="submit" id="#removeNewNotePanel">Submit</button>';
    console.log(article.title);
  });
  return false;
});
})
