// add current date and time to header
var todaysDate = moment().format("D MMM YYYY, HH:mm:ss");
$("#time-date").text(todaysDate);

// create random quote generator button

document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const quoteButton = document.querySelector(".quote-btn");
    const quote = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote cite");
  
    async function updateQuote() {
      // Fetch a random quote from the Quotable API
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {
        // Update DOM elements
        quote.textContent = data.content;
        cite.textContent = data.author;
      } else {
        quote.textContent = "An error occured";
        console.log(data);
      }
    }
  
    // Attach an event listener to the `button`
    quoteButton.addEventListener("click", updateQuote);
  
    // call updateQuote once when page loads
    updateQuote();
  });
  
  // trigger event when 'add item' button clicked
$("#small").on("click", function(event) {

  event.preventDefault();
  // grab text from the input box
  var item = $("small").val();
  // view city in console
  console.log(item)
  //console title city value:
  console.log("additemsmall:", item);
  
  })

  // add item to local storage

//   document.getElementById("small").addEventListener("click", myFunction);

// function myFunction() {
//   localStorage.setItem('myCat', 'Tom');

//     const cat = localStorage.getItem('myCat');
//     console.log()
// }




//API key
// let APIKey = "d0736665d026d198ed2e5a4eedc5ac57";

// // search history 
// let searchHistory = []
// // search history section
// let searchHistorySection = $('#history');
// //search box form

// //search text input
// let searchInput = $('#search-input');

// // trigger event when search button clicked
// $("#search-button").on("click", function(event) {

//     event.preventDefault();
//     // grab text from the input box
//     var city = $("#search-input").val().trim();
//     // view city in console
//     console.log(city)
//     //console title city value:
//     console.log("City value:", city);
//     apiCall(city)
    
//     })

// //call information from api
// function apiCall(city){
//   let queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
// fetch(queryURL)
// .then(response=>response.json())
// .then((data)=>{
//  var url=`http://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${APIKey}&units=metric`
// displayCurrentWeather(data)

// fetch(url)
// .then(response=>response.json())
// .then((data)=>{
//   console.log(data, "forecast")
// displayForecast(data.list)
// })
// })
// }

// function displayCurrentWeather(weather){
//   console.log(weather, "from display current weather function");
//   $(".weather-card").empty()
//   //create and add response to html elements

//   var output =`
//   <div class='card-header'>
//   <h3 class=card-title>${weather.name}<span><img src='https://openweathermap.org/img/wn/${weather.weather[0].icon}.png'</span></div>
//   <div class='card-body'>
//   <p class='weather-detail'>Temperature: ${weather.main.temp} Celsius</p>
//   <p class='weather-detail'>Humidity: ${weather.main.humidity} %</p>
//   <p class='weather-detail'>Wind Speed: ${weather.wind.speed} KPH</p>
  
//   </div>
//   </div>
//   `
// // add todays weather to page
// $(".weather-card").append(output)
  
// }

// //create api call for forecast
// function displayForecast(weather){
//   $('.forecast-row').text('')
//   for(let i=0; i<5;i++){
//     var skip= i *8 +4
//     var day= new Date(weather[skip].dt*1000).toDateString()
    
//   //   console.log(weather, "from display forecast function");
//     var forecast=`
//     <div class=card>
//     <div class='card-header'>
//     <h3 class=card-title>${day}<span><img src='https://openweathermap.org/img/wn/${weather[i].weather[0].icon}.png'</span></div>
//     <div class='card-body'>
//     <p class='weather-detail'>Temperature: ${weather[i].main.temp} Celsius</p>
//     <p class='weather-detail'>Humidity: ${weather[i].main.humidity} %</p>
//     <p class='weather-detail'>Wind Speed: ${weather[i].wind.speed} KPH</p>
    
//     </div>
//     </div>
//     </div>
//     `
//     // add five day forecast to page
//     $(".forecast-row").append(forecast)

//     }}








