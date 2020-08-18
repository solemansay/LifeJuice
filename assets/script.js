$("#smile").on("click", function () {
    $(".smile1").attr("class", "columns is-block !important");
})

$("#jokes").on("click", function (event) { //#jokes
    event.preventDefault();
    var jokeURL = "https://official-joke-api.appspot.com/jokes/general/random";
    $.ajax({
        url: jokeURL,
        method: "GET"
    }).then(function (response) {
        var newDiv = $("<div>");
        var saveBtn = $("<button>").text("Save").attr("save");
        var jokeSetup = response[0].setup;
        var jokePunch = response[0].punchline; 

        newDiv.text(jokeSetup + " " + jokePunch).saveBtn

        $("#results").append(newDiv);


        console.log(response)
        console.log("Setup: " + response[0].setup);
        console.log("Punchline: " + response[0].punchline);
    })
})
$("#gifs").on("click", function (event) { //#gifs

    event.preventDefault();
    var gifURL = "https://api.giphy.com/v1/gifs/random?"
    var gifapi_key = "api_key=1sI8qnYSYJT3bcAJldPmGbL6gO1XMuOV"
    var gifSearchParameters = "&tag=laughing&rating=pg" //Need a laugh? Potentially update HTML
    $.ajax({
        url: gifURL + gifapi_key + gifSearchParameters,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.data.embed_url); 
    })
})
$("#quote").on("click", function (event) {
    event.preventDefault();
    var quotesURL = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand"
    $.ajax({
        url: quotesURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
})

$("#fact").on("click", function (event) { //advice
    event.preventDefault();
    var quotesURL = "https://api.adviceslip.com/advice"
    $.ajax({
        url: quotesURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        response = JSON.parse(response)
        console.log(response.slip.advice);
    })
})

