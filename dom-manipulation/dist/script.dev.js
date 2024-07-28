"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// document.addEventListener('DOMContentLoaded', function(){
//     let quotes = [
//     {text:"Everything you've ever wanted is sitting on the other side of fear", category:"Motivational" },
//     {text:"Technology will never replace great teachers but technology in the hands of great teachers is transformational.", category:"Technological"},
//     {text:"It takes courage to grow up and become who you really are.", category:"Inspirational"}
// ];
// function showRandomQuote(){
//     const randomIndex = Math.floor(Math.random()* quotes.length);
//     const randomQuote = quotes[randomIndex];
//     const quoteDisplay = document.getElementById('quoteDisplay');
//     if (quoteDisplay){
//     quoteDisplay.innerHTML = `<p><strong>${randomQuote.text}</strong-${randomQuote.category}</p>`;
// }
// }
// function addQuote(){
//     const newQuoteText = document.getElementById('newQuoteText').value;
//     const newQuoteCategory = document.getElementById('newQuoteCategory').value;
//     if (newQuoteText && newQuoteCategory){
//         const newQuote = { text: newQuoteText, category: newQuoteCategory};
//         quotes.push(newQuote);
//         showRandomQuote();
//         alert("New quote added succesfully");
//     }  else {
//         alert("please enter both the quote and the category.");
//     }
// }
// function createAddQuoteForm(){
//     const formContainer = document.createElement('div');
//     formContainer.innerHTML = `
//     <input id ="newQuoteText" type="text" placeholder="Enter a new quote"/>
//     <input id ="newQuoteCatagory" type="text" placeholder="Enter a new catagory"/>
//     <button onClick="addQuote()">Add Quote</button>`;
//     document.body.appendChild(formContainer);
// }
//    const newQuoteBtn =document.getElementById('newQuoteBtn');
//    if (newQuoteBtn){
//     newQuoteBtn.addEventListener('click',function() {
//         showRandomQuote();
//         createAddQuoteForm();
// });
//   } 
// showRandomQuote();
// });
///
// document.addEventListener('DOMContentLoaded', function() {
//     let quotes = JSON.parse(localStorage.getItem('quotes')) || [];
//     function saveQuotes() {
//         localStorage.setItem('quotes', JSON.stringify(quotes));
//     }
//     function showRandomQuote() {
//         const randomIndex = Math.floor(Math.random() * quotes.length);
//         const randomQuote = quotes[randomIndex];
//         const quoteDisplay = document.getElementById('quoteDisplay');
//         if (quoteDisplay) {
//             quoteDisplay.innerHTML = `<p><strong>${randomQuote.text}</strong> - ${randomQuote.category}</p>`;
//         }
//     }
//     function addQuote() {
//         const newQuoteText = document.getElementById('newQuoteText').value;
//         const newQuoteCategory = document.getElementById('newQuoteCategory').value;
//         if (newQuoteText && newQuoteCategory) {
//             const newQuote = { text: newQuoteText, category: newQuoteCategory };
//             quotes.push(newQuote);
//             saveQuotes();
//             showRandomQuote();
//             alert("New quote added successfully");
//         } else {
//             alert("Please enter both the quote and the category.");
//         }
//     }
//     function exportToJSON() {
//         const data = JSON.stringify(quotes);
//         const blob = new Blob([data], { type: 'application/json' });
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'quotes.json';
//         a.click();
//         URL.revokeObjectURL(url);
//     }
//     function importFromJsonFile(event) {
//         const fileReader = new FileReader();
//         fileReader.onload = function(event) {
//             const importedQuotes = JSON.parse(event.target.result);
//             quotes.push(...importedQuotes);
//             saveQuotes();
//             alert('Quotes imported successfully!');
//         };
//         fileReader.readAsText(event.target.files[0]);
//     }
//     showRandomQuote();
// });
//1
// let quotes = [
//     { text: "Everything you've ever wanted is sitting on the other side of fear", category: "Motivational" },
//     { text: "Technology will never replace great teachers but technology in the hands of great teachers is transformational.", category: "Technological" },
//     { text: "It takes courage to grow up and become who you really are.", category: "Inspirational" }
// ];
// function showRandomQuote() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const randomQuote = quotes[randomIndex];
//     const quoteDisplay = document.getElementById('quoteDisplay');
//     if (quoteDisplay) {
//         quoteDisplay.innerHTML = `<p><strong>${randomQuote.text}</strong> - ${randomQuote.category}</p>`;
//     }
// }
// document.getElementById('newQuote').addEventListener('click', showRandomQuote);
// function addQuote() {
//     const newQuoteText = document.getElementById('newQuoteText').value;
//     const newQuoteCategory = document.getElementById('newQuoteCategory').value;
//     if (newQuoteText && newQuoteCategory) {
//         const newQuote = { text: newQuoteText, category: newQuoteCategory };
//         quotes.push(newQuote);
//         alert("New quote added successfully!");
//     } else {
//         alert("Please enter both the quote and the category.");
//     }
// }
//2
// let quotes = [
//     { text: "Everything you've ever wanted is sitting on the other side of fear", category: "Motivational" },
//     { text: "Technology will never replace great teachers but technology in the hands of great teachers is transformational.", category: "Technological" },
//     { text: "It takes courage to grow up and become who you really are.", category: "Inspirational" }
// ];
// function displayQuotes(quotesArray) {
//     const quoteDisplay = document.getElementById('quoteDisplay');
//     if (quoteDisplay) {
//         quoteDisplay.innerHTML = '';
//         quotesArray.forEach(quote => {
//             const quoteElement = document.createElement('p');
//             quoteElement.innerHTML = `<strong>${quote.text}</strong> - ${quote.category}`;
//             quoteDisplay.appendChild(quoteElement);
//         });
//     }
// }
// function populateCategories() {
//     const categories = [...new Set(quotes.map(quote => quote.category))]; // Extract unique categories
//     const categoryFilter = document.getElementById('categoryFilter');
//     categories.forEach(category => {
//         const option = document.createElement('option');
//         option.value = category;
//         option.textContent = category;
//         categoryFilter.appendChild(option);
//     });
// }
// function filterQuotes() {
//     const selectedCategory = document.getElementById('categoryFilter').value;
//     const filteredQuotes = selectedCategory === 'all' ? quotes : quotes.filter(quote => quote.category === selectedCategory);
//     displayQuotes(filteredQuotes);
//     localStorage.setItem('selectedCategory', selectedCategory);
// }
// function addQuote() {
//     const newQuoteText = document.getElementById('newQuoteText').value;
//     const newQuoteCategory = document.getElementById('newQuoteCategory').value;
//     if (newQuoteText && newQuoteCategory) {
//         const newQuote = { text: newQuoteText, category: newQuoteCategory };
//         quotes.push(newQuote);
//         saveQuotes();
//         populateCategories();
//         alert("New quote added successfully!");
//     } else {
//         alert("Please enter both the quote and the category.");
//     }
// }
// function saveQuotes() {
//     localStorage.setItem('quotes', JSON.stringify(quotes));
// }
// function loadQuotes() {
//     const storedQuotes = localStorage.getItem('quotes');
//     if (storedQuotes) {
//         quotes = JSON.parse(storedQuotes);
//     }
// }
// const savedCategory = localStorage.getItem('selectedCategory');
// if (savedCategory) {
//     document.getElementById('categoryFilter').value = savedCategory;
// }
// populateCategories();
// displayQuotes(quotes);
// Array to store quotes
var quotes = [{
  id: 1,
  text: "Everything you've ever wanted is sitting on the other side of fear",
  category: "Motivational"
}, {
  id: 2,
  text: "Technology will never replace great teachers but technology in the hands of great teachers is transformational.",
  category: "Technological"
}, {
  id: 3,
  text: "It takes courage to grow up and become who you really are.",
  category: "Inspirational"
}]; // Function to display quotes

function displayQuotes(quotesArray) {
  var quoteDisplay = document.getElementById('quoteDisplay');

  if (quoteDisplay) {
    quoteDisplay.innerHTML = '';
    quotesArray.forEach(function (quote) {
      var quoteElement = document.createElement('p');
      quoteElement.innerHTML = "<strong>".concat(quote.text, "</strong> - ").concat(quote.category);
      quoteDisplay.appendChild(quoteElement);
    });
  }
} // Populate categories in the dropdown


function populateCategories() {
  var categories = _toConsumableArray(new Set(quotes.map(function (quote) {
    return quote.category;
  }))); // Extract unique categories


  var categoryFilter = document.getElementById('categoryFilter');
  categories.forEach(function (category) {
    var option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
} // Filter quotes based on selected category


function filterQuotes() {
  var selectedCategory = document.getElementById('categoryFilter').value;
  var filteredQuotes = selectedCategory === 'all' ? quotes : quotes.filter(function (quote) {
    return quote.category === selectedCategory;
  });
  displayQuotes(filteredQuotes);
  localStorage.setItem('selectedCategory', selectedCategory);
} // Function to add a new quote


function addQuote() {
  var newQuoteText = document.getElementById('newQuoteText').value;
  var newQuoteCategory = document.getElementById('newQuoteCategory').value;

  if (newQuoteText && newQuoteCategory) {
    var newId = quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 1;
    var newQuote = {
      id: newId,
      text: newQuoteText,
      category: newQuoteCategory
    };
    quotes.push(newQuote);
    saveQuotes();
    populateCategories();
    alert("New quote added successfully!");
  } else {
    alert("Please enter both the quote and the category.");
  }
} // Save quotes to localStorage


function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
} // Load quotes from localStorage


function loadQuotes() {
  var storedQuotes = localStorage.getItem('quotes');

  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  }
} // Restore last selected category filter


var savedCategory = localStorage.getItem('selectedCategory');

if (savedCategory) {
  document.getElementById('categoryFilter').value = savedCategory;
} // Load quotes and populate categories on page load


loadQuotes();
populateCategories();
displayQuotes(quotes); // Simulated server URL

var serverURL = 'https://jsonplaceholder.typicode.com/posts'; // Function to fetch data from the server

function fetchDataFromServer() {
  var response, data;
  return regeneratorRuntime.async(function fetchDataFromServer$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(serverURL));

        case 3:
          response = _context.sent;

          if (response.ok) {
            _context.next = 6;
            break;
          }

          throw new Error('Failed to fetch data from the server');

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
} // Function to update local data with data from the server and resolve conflicts


function syncWithServer() {
  var serverData;
  return regeneratorRuntime.async(function syncWithServer$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchDataFromServer());

        case 2:
          serverData = _context2.sent;
          // Simple conflict resolution: Server data takes precedence
          serverData.forEach(function (serverQuote) {
            var localQuoteIndex = quotes.findIndex(function (quote) {
              return quote.id === serverQuote.id;
            });

            if (localQuoteIndex !== -1) {
              quotes[localQuoteIndex] = serverQuote;
            } else {
              quotes.push(serverQuote);
            }
          }); // Save updated quotes to local storage

          saveQuotes(); // Notify user about successful sync

          alert("Data synced with the server successfully.");

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
} // Periodically sync data with the server


setInterval(syncWithServer, 60000); // Sync every minute
// Function to handle conflicts manually

function handleConflictManually() {} // Implement conflict resolution UI or logic here
// Allow users to manually resolve conflicts
// Function to handle conflict resolution notifications


function notifyUserOfConflict() {
  // Implement UI notifications to inform users about conflicts
  alert("Data conflict detected. Click to resolve.");
} // Function to test conflict resolution (Simulated conflict)


function simulateConflict() {
  // Simulate conflict by updatingthe same quote both locally and on the server
  var conflictingQuote = quotes[0];
  conflictingQuote.text = "Updated text on the server"; // Notify user of conflict

  notifyUserOfConflict();
}