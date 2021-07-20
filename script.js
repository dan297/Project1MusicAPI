var artist = $(".input");
var APIKey = '272852FTBBwuqJtoUuXgJwvesHROoz66uEYbSRJQBT67Y3fbtz64KCA8'
var searchBtn = $("#search-btn")
var results = $("#box1")
var url = `https://api.happi.dev/v1/music?q=${artist.val()}&limit=10&apikey=${APIKey}&lyrics=0`
var clearBtn = $("#clear-btn")

function handleSearchClick(event) {
    var searchTerm =  artist.val()
    event.preventDefault()
    requestAPI(searchTerm);
    addSearchHistory(searchTerm);
}

function requestAPI(searchValue) {
    fetch(`https://api.happi.dev/v1/music?q=${searchValue}&limit=10&apikey=${APIKey}&lyrics=0`)
        .then(response => response.json())
        .then(function (data) {
            var artistTracks = data.result;
            console.log(data);
            for (var i = 0; i < artistTracks.length; i++) {
                var trackObject = artistTracks[i];
                results.append(`<li> ${trackObject.track} ${trackObject.artist}`);
            }
        });
}

function addSearchHistory(artistName) {
    var container = document.getElementById("artist-box")
    var input = document.createElement("BUTTON")
    input.type = "text";
    input.className = "songs"
    input.innerHTML = artistName
    container.appendChild(input)
}

function callPrevious() {
    var previous = 
}

$( document ).ready(function() {
    console.log( "ready!" );
});

function clearHistory() {
    results.empty()
}

clearBtn.on("click", clearHistory)
searchBtn.on("click", handleSearchClick)
