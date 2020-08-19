var sippyArray = [jokes, quotes, facts]

function jokes() {
    event.preventDefault();
    var jokeURL = "https://official-joke-api.appspot.com/jokes/general/random";
    $.ajax({
        url: jokeURL,
        method: "GET"
    }).then(function (response) {
        $("#jokeModal").attr("class","modal is-active");
<<<<<<< HEAD

=======
  
>>>>>>> 6a9fef5df6f35143885cea6e35f8d480c98d3c9b
        var jokeSetup = response[0].setup;
        var jokePunch = response[0].punchline;

        $("#jokeSetup").text(jokeSetup)

        masterTimer(jokePunch)

    })

}
function gifs() {
    var gifURL = "https://api.giphy.com/v1/gifs/random?"
    var gifapi_key = "api_key=1sI8qnYSYJT3bcAJldPmGbL6gO1XMuOV"
    var gifSearchParameters = "&tag=laughing&rating=pg&SameSite=Secure"
    $.ajax({
        url: gifURL + gifapi_key + gifSearchParameters,
        method: "GET"
    }).then(function (response) {
        var gif = response.data.images.original.url
        $("#gifModal").attr("class","modal is-active");
        $("#displayGIF").attr("src", gif);
    })
}
function quotes() {
    event.preventDefault();
    var quotesURL = "https://quote-garden.herokuapp.com/api/v2/quotes/random"
    $.ajax({
        url: quotesURL,
        method: "GET"
    }).then(function (response) {

        var author = response.quote.quoteAuthor;
        var text = response.quote.quoteText;

        $("#quoteAdviceModal").attr("class","modal is-active");
        $("#quoteOrAdvice").text(text + " - " + author);
    })
}
function facts() {
    event.preventDefault();
    var factsURL = "https://api.adviceslip.com/advice"
    $.ajax({
        url: factsURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        response = JSON.parse(response)
        $("#quoteAdviceModal").attr("class","modal is-active");
        $("#quoteOrAdvice").text(response.slip.advice);
    })
}
function masterTimer(jokePunch) {
    setTimeout(function() {
        $("#jokePunchline").text(jokePunch)
        setTimeout(function(){
            console.log("here")
            $("#jokeModal").removeAttr("class");
            $("#jokeModal").attr("class", "modal");
            gifs()
        }, 4000)
    }, 3000)
}

function jEE() {

}

$("#jeff").on("click", function(event) {
    jEE()
})

$("#sip").on("click", function (event) {
    event.preventDefault()
    var sippy = Math.floor(Math.random() * 3)
    sippyArray[sippy]()
})
$("#smile").on("click", function (event) {
    jokes()
})
$("#quote").on("click", function (event) {
    quotes()
})
$("#fact").on("click", function (event) { 
    facts()
})
$("#close").on("click", function (event) {
    $("#gifModal").removeAttr("class");
    $("#gifModal").attr("class", "modal")
})
$("#closeJoke").on("click", function (event) {
    $("#jokeModal").removeAttr("class");
    $("#jokeModal").attr("class", "modal");
})
$("#closeAdvice").on("click", function (event) {
    $("#adviceModal").removeAttr("class");
    $("#adviceModal").attr("class", "modal");
})
$("#closeQuote").on("click", function (event) {
    $("#quoteModal").removeAttr("class");
    $("#quoteModal").attr("class", "modal");
})