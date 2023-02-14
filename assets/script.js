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
      const response = await fetch("https://api.quotable.io/random?maxLength=80");
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

    // Attach an event listener to the button
    quoteButton.addEventListener("click", updateQuote);
  
    // call updateQuote once when page loads
    updateQuote();
    console.log(localStorage)
  });

  // save small, medium and large buttons to local storage

  // small
  document.getElementById("small").addEventListener("click", functionOne);

   function functionOne() {
   localStorage.setItem('Small', '£20.00');
  
   const customSmall = localStorage.getItem('Small', '£20.00');
   console.log(customSmall)
  
   // add shirt to basket at bottom of page
   document.getElementById("customSinfo").textContent = 'Custom Quote Shirt - Size Small: £20';
   $('.customS').html($('.blockquote').html())


  }
  

  // medium button
  document.getElementById("medium").addEventListener("click", functionTwo);

  function functionTwo() {
  localStorage.setItem('Medium', '£20.00');
 
  const customMed = localStorage.getItem('Medium', '£20.00');
  console.log(customMed)

  // add shirt to basket at bottom of page
  document.getElementById("customM").textContent = 'Custom Quote Shirt- Size Medium: £20';
  $('.customS').html($('.blockquote').html())
 }

 // large button 
 document.getElementById("large").addEventListener("click", functionThree);

 function functionThree() {
 localStorage.setItem('Large', '£20.00');

 // add shirt to basket at bottom of page
 const customLarge = localStorage.getItem('Large', '£20.00');
 console.log(customLarge)

 document.getElementById("customL").textContent = 'Custom Quote Shirt- Size Large: £20';
 $('.customS').html($('.blockquote').html())
}


  //add first shirt on click button to local storage and console

  document.getElementById("small1").addEventListener("click", functionHopeShirtSmall);

function functionHopeShirtSmall() {
  localStorage.setItem('Free Hope Tshirt- Size Small', '£20.00');

    const shirt1Sml = localStorage.getItem('Free Hope Tshirt- Size Small', '£20.00');
    console.log(shirt1Sml)
}


document.getElementById("medium1").addEventListener("click", myFunction);

function myFunction() {
  localStorage.setItem('Free Hope Tshirt- Size Medium', '£20.00');

    const shirt1Med = localStorage.getItem('Free Hope Tshirt- Size Medium', '£20.00');
    console.log(shirt1Med)
}

document.getElementById("large1").addEventListener("click", myFunction);

function myFunction() {
  localStorage.setItem('Free Hope Tshirt- Size Large', '£20.00');

    const shirt1Lrg = localStorage.getItem('Free Hope Tshirt- Size Large', '£20.00');
    console.log(shirt1Lrg)
}

  //add second shirt on click button to local storage and console


  document.getElementById("small2").addEventListener("click", myFunction);

function myFunction() {
  localStorage.setItem('Down The Rabbit Hole... Tshirt- Size Small', '£20.00');

    const shirt2Sml = localStorage.getItem('Down The Rabbit Hole... Tshirt- Size Small', '£20.00');
    console.log(shirt2Sml)
}

document.getElementById("medium2").addEventListener("click", myFunction);

function myFunction() {
  localStorage.setItem('Down The Rabbit Hole...Tshirt- Size Medium', '£20.00');

    const shirt2Med = localStorage.getItem('Down The Rabbit Hole... Tshirt- Size Medium', '£20.00');
    console.log(shirt2Med)
}

document.getElementById("large2").addEventListener("click", myFunction);

function myFunction() {
  localStorage.setItem('Down The Rabbit Hole...Tshirt- Size Large', '£20.00');

    const shirt2Lrg = localStorage.getItem('Down The Rabbit Hole...- Size Large', '£20.00');
    console.log(shirt2Lrg)
}

  //add third shirt on click button to local storage and console

  document.getElementById("small3").addEventListener("click", myFunction);

  function myFunction() {
    localStorage.setItem('Magestically Awkward Tshirt- Size Small', '£20.00');
  
      const shirt3Sml = localStorage.getItem('Magestically Awkward Tshirt- Size Small', '£20.00');
      console.log(shirt3Sml)
  }

  document.getElementById("medium3").addEventListener("click", myFunction);

function myFunction() {
  localStorage.setItem('Magestically Awkward Tshirt- Size Medium', '£20.00');

    const shirt3Med = localStorage.getItem('Magestically Awkward Tshirt- Size Medium', '£20.00');
    console.log(shirt3Med)
}

document.getElementById("large3").addEventListener("click", myFunction);

function myFunction() {
  localStorage.setItem('Magestically Awkward Tshirt- Size Large', '£20.00');

    const shirt3Lrg = localStorage.getItem('Magestically Awkward- Size Large', '£20.00');
    console.log(shirt3Lrg)
}












const items = { ...localStorage };
var shoppingBasket=`
<div>Items In Shopping Basket</div>
<p class='shirtItem'>${items}</p>
`



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








