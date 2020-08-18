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
        //var saveBtn = $("<button>").text("Save").attr("save");
        var jokeSetup = response[0].setup;
        var jokePunch = response[0].punchline; 

        newDiv.text(jokeSetup + " " + jokePunch)
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
    var gifSearchParameters = "&tag=laughing&rating=pg&SameSite=Secure" //Need a laugh? Potentially update HTML
    $.ajax({
        url: gifURL + gifapi_key + gifSearchParameters,
        method: "GET"
    }).then(function (response) {
        var newImg = $("<img>");
        var gif = response.data.images.original.url
        
       newImg.attr("src", gif);
        $("#results").append(newImg);

        console.log(response);
      //  console.log(gif); 
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

$("#close").on("click", function (event) {
    //$("#modal").removeAttr("class");
    $("#gifModal").removeAttr("class");
    $("#gifModal").attr("class", "modal")
})

$("#closeJoke").on("click", function (event) {
    //$("#modal").removeAttr("class");
    $("#jokeModal").removeAttr("class");
    $("#jokeModal").attr("class", "modal");
})

$("#closeQuoteAdvice").on("click", function (event) {
    //$("#modal").removeAttr("class");
    $("#quoteAdviceModal").removeAttr("class");
    $("#quoteAdviceModal").attr("class", "modal");
})


