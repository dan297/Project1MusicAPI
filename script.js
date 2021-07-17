 var artist = "";
var APIKey = '272852FTBBwuqJtoUuXgJwvesHROoz66uEYbSRJQBT67Y3fbtz64KCA8'
var savedArtist = $(".search-btn")

$("#search-btn").click(function (event) {
    event.preventDefault();
    artist = $("#search-btn").val();
    console.log(event);
});

function getApi(queryURL) {
    fetch(queryURL)
    
    .then(function (response) {
        console.log(response);
        if (response.status === 200) {
            responseText.textContent = response.status;
          }
          return response.json();
      });
    }

var queryURL = `https://api.happi.dev/v1/music?q=eminem&limit=10&apikey=${APIKey}&lyrics=0`
getApi(queryURL);
