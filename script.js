var artist = $(".input");
var APIKey = '272852FTBBwuqJtoUuXgJwvesHROoz66uEYbSRJQBT67Y3fbtz64KCA8'
var searchBtn = $("#search-btn")
var results = $(".results-card")


// $("#search-btn").click(function (event) {
//     event.preventDefault();
//     artist = $("#search-btn").val();
//     console.log(event);
// });

function getResponse(event) {
    event.preventDefault()

    fetch(`https://api.happi.dev/v1/music?q=${artist.val()}&limit=10&apikey=${APIKey}&lyrics=0`)
.then(response => response.json())
.then(function (data) {
    console.log(data)
    results.append(`<li>Results: ${data.result}`)
})
}

searchBtn.on("click", getResponse)

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
