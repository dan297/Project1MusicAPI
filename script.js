var artist = $(".input");
var APIKey = '272852FTBBwuqJtoUuXgJwvesHROoz66uEYbSRJQBT67Y3fbtz64KCA8'
var searchBtn = $("#search-btn")
var results = $("#button0")
var url = `https://api.happi.dev/v1/music?q=${artist.val()}&limit=10&apikey=${APIKey}&lyrics=0`
var clearBtn = $("#clear-btn")

// $("#search-btn").click(function (event) {
//     event.preventDefault();
//     artist = $("#search-btn").val();
//     console.log(event);
// });

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


    

// function getApi(queryURL) {
//     var queryURL = `https://api.happi.dev/v1/music?q=${artist}&limit=10&apikey=${APIKey}&lyrics=0`
//     fetch(queryURL)
//     .then(function (response) {
//         console.log(response);
//         if (response.status === 200) {
//             response.textContent = response.status;
//           }
//           return response.json();
//       });
//       $(".results-card").append(`<li>${response.result}</li>`)
// }

//Display required response in HTML
