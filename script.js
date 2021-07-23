var artist = $(".input");
var APIKey = '272852FTBBwuqJtoUuXgJwvesHROoz66uEYbSRJQBT67Y3fbtz64KCA8'
var searchBtn = $("#search-btn")
var clearBtn = $("#clear-btn")
var clearBtnImg = $("#clearImg-btn")


var searchSongBtn = $("#searchSong-btn")
var songName = $(".songInput");
var APIkeyTwo = '53cb580a1dmsh4520291ecf1aae1p1c92d2jsnacd0d4cdfb24'
var urlTwo = `https://shazam.p.rapidapi.com/search?term=${songName}&limit=10&apikey=${APIkeyTwo}`
var songresults = $("#button1")
var imageResults = $("#artist-results")
var results = $("#box1")
var url = `https://api.happi.dev/v1/music?q=${artist.val()}&limit=10&apikey=${APIKey}&lyrics=0`
var historyBtn = $("#search-history-btn")

function handleSearchClick(event) {
    var searchTerm = artist.val()
    event.preventDefault()
    requestAPI(searchTerm);
    addSearchHistory(searchTerm);
}

function handleSongSearchClick(event) {
    event.preventDefault()
    var songTerm = songName.val()
    requestAPITwo(songTerm)
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
    var artistContainer = $("#box2")
    artistContainer.append(`<li>- ${artistName}`)
}
function addSearchHistory(artistName) {
    var container = document.getElementById("artist-box")
    var input = document.createElement("BUTTON")
    input.type = "text";
    input.className = "songs"
    input.id = "search-history-btn"
    input.innerHTML = artistName
    container.appendChild(input)
}

function handleSearchClickHistory(event) {
    var searchTerm = historyBtn.val()
    event.preventDefault()
    requestAPI(searchTerm);
}

historyBtn.on("click", handleSearchClickHistory)

$( document ).ready(function() {
    console.log( "ready!" );
});

function clearHistory() {
    results.empty()
}

clearBtn.on("click", clearHistory)
searchBtn.on("click", handleSearchClick)
searchSongBtn.on("click", handleSongSearchClick)

function requestAPITwo(songName) {
    fetch(`https://shazam.p.rapidapi.com/search?term=${songName}&rapidapi-key=${APIkeyTwo}`)
    .then(response => response.json())
        .then(function (data){
        

        var hits = data.tracks.hits;
        for (let i = 0; i < hits.length; i++) {
            var hit = hits[i]

            var artistName = hit.track.subtitle;
            var artistNameImage = hit.track.images.background;

            console.log(`Entry #${i}: artist ${artistName}, img ${artistNameImage}`)

            // songresults.append(artistName);

            var artistButton = $("<button>")
            artistButton.html(artistName)
            imageResults.append(artistButton)

            var imageEl = $("<img>")
            imageEl.attr("src", artistNameImage)
            imageResults.append(imageEl)

            


        }

        function clearImage() {
            imageResults.empty()
        }

        clearBtnImg.on("click", clearImage)

    })
}


