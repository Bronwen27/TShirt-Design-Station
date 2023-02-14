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

  // save custom small, medium and large buttons to local storage

  // custom shirt small button
  document.getElementById("small").addEventListener("click", functionOne);

   function functionOne() {
   localStorage.setItem('Small Custom Shirt', '£20.00');
  
   const customSmall = localStorage.getItem('Small Custom Shirt', '£20.00');
   console.log(customSmall)
  
   // add shirt to basket at bottom of page
   document.getElementById("customSinfo").textContent = 'Custom Quote Shirt - Size Small: £20';
   $('.customS').html($('.blockquote').html())


  }
  

  // custom shirt medium button
  document.getElementById("medium").addEventListener("click", functionTwo);

  function functionTwo() {
  localStorage.setItem('Medium Custom Shirt', '£20.00');
 
  const customMed = localStorage.getItem('Medium Custom Shirt', '£20.00');
  console.log(customMed)

  // add shirt to basket at bottom of page
  document.getElementById("customMinfo").textContent = 'Custom Quote Shirt- Size Medium: £20';
  $('.customM').html($('.blockquote').html())
 }

 // custom shirt large button 
 document.getElementById("large").addEventListener("click", functionThree);

 function functionThree() {
 localStorage.setItem('Large Custom Shirt', '£20.00');

 // add shirt to basket at bottom of page
 const customLarge = localStorage.getItem('Large Custom Shirt', '£20.00');
 console.log(customLarge)

 document.getElementById("customLinfo").textContent = 'Custom Quote Shirt- Size Large: £20';
 $('.customL').html($('.blockquote').html())
}


//   //add ready-made shirts on click button to local storage and console

//   //small1
//   document.getElementById("small1").addEventListener("click", functionHopeShirtSmall);

// function functionHopeShirtSmall() {
//   localStorage.setItem('Free Hope Tshirt- Size Small', '£20.00');

//     const shirt1Sml = localStorage.getItem('Free Hope Tshirt- Size Small', '£20.00');
//     console.log(shirt1Sml)

//    // add to order form at bottom of page
//     document.getElementById("readyMadeOneS").textContent = 'Free Hope Shirt- Size Small: £20';
// }

// //medium1
// document.getElementById("medium1").addEventListener("click", myFunction);

// function myFunction() {
//   localStorage.setItem('Free Hope Tshirt- Size Medium', '£20.00');

//     const shirt1Med = localStorage.getItem('Free Hope Tshirt- Size Medium', '£20.00');
//     console.log(shirt1Med)
    
//      // add to order form at bottom of page
//     document.getElementById("readyMadeOneM").textContent = 'Free Hope Shirt- Size Medium: £20';
// }

// //large1
// document.getElementById("large1").addEventListener("click", myFunction);

// function myFunction() {
//   localStorage.setItem('Free Hope Tshirt- Size Large', '£20.00');

//     const shirt1Lrg = localStorage.getItem('Free Hope Tshirt- Size Large', '£20.00');
//     console.log(shirt1Lrg)

//     // add to order form at bottom of page
//     document.getElementById("readyMadeOneL").textContent = 'Free Hope Shirt- Size Large: £20';
// }

//   //add second shirt on click button to local storage and console

// //small2
//   document.getElementById("small2").addEventListener("click", myFunction);

// function myFunction() {
//   localStorage.setItem('Down The Rabbit Hole... Tshirt- Size Small', '£20.00');

//     const shirt2Sml = localStorage.getItem('Down The Rabbit Hole... Shirt- Size Small', '£20.00');
//     console.log(shirt2Sml)

//     // add to order form at bottom of page
//     document.getElementById("readyMadeTwoS").textContent = 'Down The Rabbit Hole...Shirt- Size Small: £20';
// }

// //medium2
// document.getElementById("medium2").addEventListener("click", myFunction);

// function myFunction() {
//   localStorage.setItem('Down The Rabbit Hole...Tshirt- Size Medium', '£20.00');

//     const shirt2Med = localStorage.getItem('Down The Rabbit Hole...Shirt- Size Medium', '£20.00');
//     console.log(shirt2Med)

//  // add to order form at bottom of page
//  document.getElementById("readyMadeTwoM").textContent = 'Down The Rabbit Hole...Shirt- Size Medium: £20';
// }


// //large2
// document.getElementById("large2").addEventListener("click", myFunction);

// function myFunction() {
//   localStorage.setItem('Down The Rabbit Hole...Tshirt- Size Large', '£20.00');

//     const shirt2Lrg = localStorage.getItem('Down The Rabbit Hole...Shirt- Size Large', '£20.00');
//     console.log(shirt2Lrg)

//     // add to order form at bottom of page
//     document.getElementById("readyMadeTwoL").textContent = 'Down The Rabbit Hole...Shirt- Size Large: £20';
// }

//   //add third shirt on click button to local storage and console

//   //small3
//   document.getElementById("small3").addEventListener("click", myFunction);

//   function myFunction() {
//     localStorage.setItem('Magestically Awkward Tshirt- Size Small', '£20.00');
  
//       const shirt3Sml = localStorage.getItem('Magestically Awkward Tshirt- Size Small', '£20.00');
//       console.log(shirt3Sml)

//       // add to order form at bottom of page
//     document.getElementById("readyMadeThreeS").textContent = 'Magestically Awkward Tshirt...- Size Small: £20';
//   }

//   //medium3
//   document.getElementById("medium3").addEventListener("click", myFunction);

// function myFunction() {
//   localStorage.setItem('Magestically Awkward Tshirt- Size Medium', '£20.00');

//     const shirt3Med = localStorage.getItem('Magestically Awkward Tshirt- Size Medium', '£20.00');
//     console.log(shirt3Med)

    
//       // add to order form at bottom of page
//       document.getElementById("readyMadeThreeM").textContent = 'Magestically Awkward Tshirt...- Size Medium: £20';
// }

// //large3
// document.getElementById("large3").addEventListener("click", myFunction);

// function myFunction() {
//   localStorage.setItem('Magestically Awkward Tshirt- Size Large', '£20.00');

//     const shirt3Lrg = localStorage.getItem('Magestically Awkward- Size Large', '£20.00');
//     console.log(shirt3Lrg)

    
//       // add to order form at bottom of page
//       document.getElementById("readyMadeThreeL").textContent = 'Magestically Awkward Tshirt...- Size Large: £20';
// }


// tutoring code
function displayImages() {
  const imageCointainer = document.getElementById('image-container')

  const directory = '/assets/images/'

  const images = [
    {
      id: 1,
      title: 'shirt 1',
      description: 'this is first img',
      filename: 'tshirt.png'
    },
    {
      id: 2,
      title: 'shirt 2',
      description: 'this is 2nd img',
      filename: 'tshirt.png'
    },
    {
      id: 3,
      title: 'shirt 1',
      description: 'this is first img',
      filename: 'tshirt.png'
    }
  ]

  for (let index = 0; index < images.length; index++) {
    const card = document.createElement('div')
    card.classList.add('card');
    const image = document.createElement('img')
    image.src = directory + images[index].filename
    card.appendChild(image)
    const title = document.createElement('h3')
    title.innerText = images[index].title;
    card.appendChild(title)
    const description = document.createElement('p')
    description.innerText = images[index].description;
    card.appendChild(description)

    const button = document.createElement('button')
    button.innerText = 'save to list'

    button.addEventListener('click', function() {
      localStorage.setItem('Shirt:' + images[index].id, images[index].filename)
    
    })
    card.appendChild(button)
    imageCointainer.appendChild(card)

  }
}

displayImages()

// write a function that gets the above saved item from local storage and adds it to array
// create html element for saved list (like we did on line image-container)
// loop through local storage array and append each saved item to the new container
// inside this func, create an empty array, andd add favoruites tothe array, not override it


// function addToLocalStorageArray(item, key) {
//   let items = JSON.parse(localStorage.getItem(key)) || []; // get the array from local storage, or initialize it to an empty array if it doesn't exist
//   if (!items.includes(item)) { // check if the item is already in the array
//     items.push(item); // add the item to the array
//     localStorage.setItem(key, JSON.stringify(items)); // store the updated array in local storage
//   }
// }

function save(){
  
  let items = JSON.parse(localStorage.getItem(key)) || [];
  if (!items.includes(items)) {
    items.push(items);
    localStorage.setItem(key, JSON.stringify(items));

  for (let index = 0; index < items.length; index++) {
    const list = document.createElement('div')
    list.classList.add('shirts');
    const title = document.createElement('h3')
    title.innerText = items[index].title;
    list.appendChild(title)
    const description = document.createElement('p')
    description.innerText = items[index].description;
    list.appendChild(description)

  
    }
    list.appendChild(button)
    list.appendChild(savedItems)

  }}


save()







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








