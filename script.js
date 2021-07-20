var artist = $(".input");
var APIKey = '272852FTBBwuqJtoUuXgJwvesHROoz66uEYbSRJQBT67Y3fbtz64KCA8'
var searchBtn = $("#search-btn")
var results = $("#button0")
var url = `https://api.happi.dev/v1/music?q=${artist.val()}&limit=10&apikey=${APIKey}&lyrics=0`
var clearBtn = $("#clear-btn")

var searchSongBtn = $("#searchSong-btn")
var songName = $(".songInput");
var APIkeyTwo = '53cb580a1dmsh4520291ecf1aae1p1c92d2jsnacd0d4cdfb24'
var urlTwo = `https://shazam.p.rapidapi.com/search?term=${songName.val()}&limit=10&apikey=${APIkeyTwo}`
var songresults = $("#button1")


// $("#search-btn").click(function (event) {
//     event.preventDefault();
//     artist = $("#search-btn").val();
//     console.log(event);
// });

function handleSearchClick(event) {
    var searchTerm =  artist.val()
    var songTerm = songName.val()
    event.preventDefault()
    requestAPI(searchTerm);
    addSearchHistory(searchTerm);
    console.log('SongTerm:')
    console.log(songTerm)
    requestAPITwo(songTerm)
}





function requestAPI(searchTerm) {
    fetch(`https://api.happi.dev/v1/music?q=${searchTerm}&limit=10&apikey=${APIKey}&lyrics=0`)
        .then(response => response.json())
        .then(function (data) {
            var artistTracks = data.result;
            console.log(data);
            // results.append(`<li>Results: ${artistTracks}`)
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

$( document ).ready(function() {
    console.log( "ready!" );
});

function clearHistory() {
    results.empty()
}

clearBtn.on("click", clearHistory)
searchBtn.on("click", handleSearchClick)


function requestAPITwo(songName) {
    fetch(`https://shazam.p.rapidapi.com/search?term=${songName}&limit=10&rapidapi-key=${APIkeyTwo}`)
    .then(response => response.json())
        .then(function (data){
        var artistNameImage = data.tracks;
        console.log(data);
        console.log('artistNameImage:')
        console.log(artistNameImage)
        for (var i = 0; i < artistNameImage.length; i++) {
            var  SongObject = artistNameImage[i];
            songresults.append(`<li> ${SongObject.track.hits[0].title}`);
        }
    })
}