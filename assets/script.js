$("#laughs").on("click", function(){
    $(".smile1").attr("class", "columns is-block !important");
})
<<<<<<< HEAD
$("#jokes").on("click", function(event) { //#jokes
event.preventDefault();
var jokeURL = "https://official-joke-api.appspot.com/jokes/general/random";
=======


$("#jokes").on("click", function(event) { //#jokes
event.preventDefault();

var jokeURL = "https://official-joke-api.appspot.com/jokes/general/random";

>>>>>>> 505d1d3bda76993746521484611928d8558e5eb3
$.ajax({
url: jokeURL,
method: "GET"
    }).then(function(response) {
    console.log(response)
    console.log(response[0].setup);
    console.log(response[0].punchline);
<<<<<<< HEAD
    })
})
$("#gifs").on("click", function(event) { //#gifs
    event.preventDefault();
var gifURL = "https://api.giphy.com/v1/gifs/search?api_key="
var gifapi_key= "1sI8qnYSYJT3bcAJldPmGbL6gO1XMuOV"
var gifSearchParameters = "&q=jokes&limit=1&offset=0&rating=g&lang=en"
=======
    }) 
})


$("#gifs").on("click", function(event) { //#gifs
    event.preventDefault();
   
var gifURL = "https://api.giphy.com/v1/gifs/search?api_key="
var gifapi_key= "1sI8qnYSYJT3bcAJldPmGbL6gO1XMuOV"
var gifSearchParameters = "&q=jokes&limit=1&offset=0&rating=g&lang=en"

>>>>>>> 505d1d3bda76993746521484611928d8558e5eb3
$.ajax({
  url: gifURL + gifapi_key + gifSearchParameters,
  method: "GET"
      }).then(function(response) {
        console.log(response);
<<<<<<< HEAD
      })
})
$("#quote").on("click", function(event) {
  event.preventDefault();
=======
      }) 
})



$("#quote").on("click", function(event) {
  event.preventDefault();
 
>>>>>>> 505d1d3bda76993746521484611928d8558e5eb3
var quotesURL = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand"
$.ajax({
url: quotesURL ,
method: "GET"
    }).then(function(response) {
      console.log(response);
<<<<<<< HEAD
    })
=======
    }) 
>>>>>>> 505d1d3bda76993746521484611928d8558e5eb3
})