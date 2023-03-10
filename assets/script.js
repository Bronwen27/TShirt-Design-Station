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
   localStorage.setItem('Custom Quote Shirt - Size Small', '£25.00');
  
   const customSmall = localStorage.getItem('Custom Quote Shirt - Size Small', '£25.00');
   console.log(customSmall)
  
   // add shirt to basket at bottom of page
   document.getElementById("customSinfo").textContent = 'Custom Quote Shirt - Size Small: £' + (25);
   $('.customS').html($('.blockquote').html());

  }
  

  // custom shirt medium button
  document.getElementById("medium").addEventListener("click", functionTwo);

  function functionTwo() {
  localStorage.setItem('Custom Quote Shirt - Size Med', '£25.00');
 
  const customMed = localStorage.getItem('Custom Quote Shirt - Size Med', '£25.00');
  console.log(customMed)

  // add shirt to basket at bottom of page
  document.getElementById("customMinfo").textContent = 'Custom Quote Shirt- Size Medium: £' + (25);
  $('.customM').html($('.blockquote').html())
 }

 // custom shirt large button 
 document.getElementById("large").addEventListener("click", functionThree);

 function functionThree() {
 localStorage.setItem('Custom Quote Shirt - Size Lrg', '£25.00');

 // add shirt to basket at bottom of page
 const customLarge = localStorage.getItem('Custom Quote Shirt - Size Lrg', '£25.00');
 console.log(customLarge)

 document.getElementById("customLinfo").textContent = 'Custom Quote Shirt- Size Large: £' + (25);
 $('.customL').html($('.blockquote').html())
}

// add pre-made tshirt section with three shirt desigsn and save to local storage and favourites
function displayImages() {
  const imageCointainer = document.getElementById('image-container')

  const directory = '/assets/images/'

  const images = [
    {
      id: 1,
      title: '"Free Hope" Design Tee',
      description: 'One Size - 100% Cotton',
      filename: 'freeHopeShirt.jpg',
      price: 20
    },
    {
      id: 2,
      title: '"Down The Rabbit Hole..." Design Tee',
      description: 'One Size - 100% Cotton',
      filename: 'downRabbitHoleShirt.jpg',
      price: 20
    },
    {
      id: 3,
      title: '"Magestically Awkward" Design Tee',
      description: 'One Size - 100% Cotton',
      filename: 'awkwardShirt.jpg',
      price: 20
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
    const description = document.createElement('h4')
    description.innerText = images[index].description;
    card.appendChild(description)
    $("").addClass("saveShirt");
    const price = document.createElement('a')
    price.innerText = '£' + images[index].price;
    card.appendChild(price)
    card.classList.add("saveShirt");
    imageCointainer.appendChild(card);

    const button = document.createElement('button')
    button.innerText = 'Add To Basket';
    button.setAttribute('class', 'buttonReadyMade');

    button.addEventListener('click', function() {
      localStorage.setItem('Pre-Made Shirt Design:' + images[index].id, '£' + images[index].price)
      
    const savedItems = document.getElementById('savedItems');

    const item = document.createElement('div');
    item.classList.add('saved-item');

    const title = document.createElement('h3');
    title.innerText = images[index].title;
    item.appendChild(title);

    const price = document.createElement('a');
    price.innerText = '£' + images[index].price;
    item.appendChild(price);

    savedItems.appendChild(item);
   
     })
    card.appendChild(button)
    imageCointainer.appendChild(card)

  }
}

displayImages()



// Advice API call Shirts

document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const adviceButton = document.querySelector(".advice-btn");
  const advice = document.querySelector(".adviceReady");

  async function updateAdvice() {
    // Fetch a random quote from the Advice Slip API
    const responseTwo = await fetch("https://api.adviceslip.com/advice");
    const dataTwo = await responseTwo.json();
    if (responseTwo.ok) {
      // Update DOM elements
      advice.textContent = dataTwo.slip.advice;
    } else {
      advice.textContent = "An error occurred";
      console.log(dataTwo);
    }
  }

  // Attach an event listener to the button
  adviceButton.addEventListener("click", updateAdvice);

  // Call updateAdvice once when page loads
  updateAdvice();
  console.log(localStorage);
});


  // custom shirt small button
  document.getElementById("smallAdvice").addEventListener("click", functionAdviceOne);

   function functionAdviceOne() {
   localStorage.setItem('Custom Advice Shirt - Size Small', '£25.00');
  
   const customAdviceSmall = localStorage.getItem('Custom Advice Shirt - Size Small', '£25.00');
   console.log(customAdviceSmall);
  
   // add shirt to basket at bottom of page
   document.getElementById("customAdviceSinfo").textContent = 'Custom Quote Shirt - Size Small: £' + (25);
   $('.customAdviceS').html($('.blockAdvice').html())


  }
  

  // custom shirt medium button
  document.getElementById("mediumAdvice").addEventListener("click", functionAdviceTwo);

  function functionAdviceTwo() {
  localStorage.setItem('Custom Advice Shirt - Size Med', '£25.00');
 
  const customAdviceMed = localStorage.getItem('Custom Advice Shirt - Size Med', '£25.00');
  console.log(customAdviceMed)

  // add shirt to basket at bottom of page
  document.getElementById("customAdviceMinfo").textContent = 'Custom Quote Shirt- Size Medium: £' + (25);
  $('.customAdviceM').html($('.blockAdvice').html())
 }

 // custom shirt large button 
 document.getElementById("largeAdvice").addEventListener("click", functionAdviceThree);

 function functionAdviceThree() {
 localStorage.setItem('Custom Advice Shirt - Size Lrg', '£25.00');

 // add shirt to basket at bottom of page
 const customAdviceLarge = localStorage.getItem('Custom Advice Shirt - Size Lrg', '£25.00');
 console.log(customAdviceLarge)

 document.getElementById("customAdviceLinfo").textContent = 'Custom Quote Shirt- Size Large: £' + (25);
 $('.customAdviceL').html($('.blockAdvice').html())
}

// calculate total

let total = 0;

// Get references to the buttons and the total display element
//var buttonReadyMade = document.querySelectorAll('.buttonReadyMade');
var buttonCustomQuoteSmall = document.getElementById('small');
var buttonCustomQuoteMed = document.getElementById('medium');
var buttonCustomQuoteLarge = document.getElementById('large');
var buttonCustomAdviceSmall = document.getElementById('smallAdvice');
var buttonCustomAdviceMed = document.getElementById('mediumAdvice');
var buttonCustomAdviceLarge = document.getElementById('largeAdvice');

// Add event listeners to the buttons
$('.buttonReadyMade').on('click', () => {
  total += 20;
  updateTotalDisplay();
  console.log("shirt")
});
buttonCustomQuoteSmall.addEventListener('click', () => {
  total += 25;
  updateTotalDisplay();
});
buttonCustomQuoteMed.addEventListener('click', () => {
  total += 25;
  updateTotalDisplay();
});
buttonCustomQuoteLarge.addEventListener('click', () => {
  total += 25;
  updateTotalDisplay();
});
buttonCustomAdviceSmall.addEventListener('click', () => {
  total += 25;
  updateTotalDisplay();
});
buttonCustomAdviceMed.addEventListener('click', () => {
  total += 25;
  updateTotalDisplay();
});
buttonCustomAdviceLarge.addEventListener('click', () => {
  total += 25;
  updateTotalDisplay();
});



// Update the total display element with the current total
function updateTotalDisplay() {
  totalDisplay.innerText = "Total: £" + total + ".00";
}