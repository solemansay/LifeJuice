$("#jokes").on("click", function(event) {
event.preventDefault();

var jokeURL = "https://official-joke-api.appspot.com/jokes/programming/random";

$.ajax({
url: jokeURL,
method: "GET"
    }).then(function(response) {
      console.log(response);
    }) 
})


$("#gifs").on("click", function(event) {
    event.preventDefault();
   
var gifURL = "https://api.giphy.com/v1/gifs/search?api_key="
var gifapi_key= "1sI8qnYSYJT3bcAJldPmGbL6gO1XMuOV"
var gifSearchParameters = "&q=jokes&limit=1&offset=0&rating=g&lang=en"

$.ajax({
  url: gifURL + gifapi_key + gifSearchParameters,
  method: "GET"
      }).then(function(response) {
        console.log(response);
      }) 
})

