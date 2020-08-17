$("#quote").on("click", function(event) { //#jokes
event.preventDefault();

var jokeURL = "https://official-joke-api.appspot.com/jokes/general/random";

$.ajax({
url: jokeURL,
method: "GET"
    }).then(function(response) {
    console.log(response)
    console.log(response[0].setup);
    console.log(response[0].punchline);
    }) 
})


$("#laughs").on("click", function(event) { //#gifs
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

