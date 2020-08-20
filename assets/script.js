var sippyArray = [jokes, quotes, advice];
var jeffQuoteObjArr = [
    {
        quote: "It's like Mary Poppins.",
        quoteAuthor: ["-Jeff"],
    },
    {
        quote: "Go home and sharpen your axe, don't beat at a tree for hours with a dull axe.",
        quoteAuthor: ["-Jeff"],
    },
    {
        quote: "When you go home today after class.",
        quoteAuthor: ["-Jeff"],
    },
    {
        quote: "Computers are, DUMB!",
        quoteAuthor: ["-Jeff"],
    },
    {
        quote: "Oops, it opened in the wrong browser.",
        quoteAuthor: ["-Jeff"],
    },
    {
        quote: "There's no such thing as a stupid question.",
        quoteAuthor: ["-Jeff"],
    },
];

function jokes() {
    event.preventDefault();
    var jokeURL = "https://official-joke-api.appspot.com/jokes/general/random";
    $.ajax({
        url: jokeURL,
        method: "GET"
    }).then(function (response) {
        $("#jokeModal").attr("class", "modal is-active");
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
        $("#gifModal").attr("class", "modal is-active");
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
        $("#quoteModal").attr("class", "modal is-active");
        $("#quoteText").text('"' + text + '"');
        $("#author").text(" - " + author);
    })
}
function advice() {
    event.preventDefault();
    var adviceURL = "https://api.adviceslip.com/advice"
    $.ajax({
        url: adviceURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        response = JSON.parse(response)
        $("#adviceModal").attr("class", "modal is-active");
        $("#advice").text(response.slip.advice);
    })
}
function masterTimer(jokePunch) {
    setTimeout(function () {
        $("#jokePunchline").text(jokePunch)
        setTimeout(function () {
            console.log("here")
            $("#jokeModal").removeAttr("class");
            $("#jokeModal").attr("class", "modal");
            $("#jokePunchline").empty()

            gifs()
        }, 3500)
    }, 2700)
}

function jEE() {
    event.preventDefault();
    var jeffquote = Math.floor(Math.random() * jeffQuoteObjArr.length)

    var author = jeffQuoteObjArr[jeffquote].quoteAuthor;
    var text = jeffQuoteObjArr[jeffquote].quote;

    $("#jeffModal").attr("class", "modal is-active");
    $("#jeffQuoteText").text('"' + text + '"');
    $("#Author").text(author);
}

$("#jeff").on("click", function (event) {
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
    advice()
})
$("#close").on("click", function (event) {
    $("#gifModal").removeAttr("class");
    $("#gifModal").attr("class", "modal")
})
$("#closeAdvice").on("click", function (event) {
    $("#adviceModal").removeAttr("class");
    $("#adviceModal").attr("class", "modal");
})
$("#closeQuote").on("click", function (event) {
    $("#quoteModal").removeAttr("class");
    $("#quoteModal").attr("class", "modal");
})
$("#closeJeffQuote").on("click", function (event) {
    $("#jeffModal").removeAttr("class");
    $("#jeffModal").attr("class", "modal");
})