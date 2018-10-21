$(document).ready(function(event){



$("#articleNewForm").on("submit", function(event){
  var articleNames = JSON.parse(localStorage.getItem("articleNames")) || [];
  console.log("hello submit");
  console.log($(this).serializeArray());//this => form
  var articleItems = $(this).serializeArray();
  var article = { title: articleItems[0].value, content: articleItems[1].value};

  var articleString = JSON.stringify(article);
  localStorage.setItem("article."+ article.title, articleString);
  articleNames.push(article.title);
  localStorage.setItem("articleNames", JSON.stringify(articleNames));
  window.location = "../index.html";

  return false;
})

})
