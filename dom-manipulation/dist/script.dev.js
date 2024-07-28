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
var quotes = []; // Initialize the quotes array

function loadQuotes() {
  var storedQuotes = localStorage.getItem('quotes');

  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  }
}

function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

function showRandomQuote() {
  if (quotes.length === 0) return; // Check if there are any quotes to display

  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];
  var quoteDisplay = document.getElementById('quoteDisplay');

  if (quoteDisplay) {
    quoteDisplay.innerHTML = "<p><strong>".concat(randomQuote.text, "</strong> - ").concat(randomQuote.category, "</p>");
  }
}

function addQuote() {
  var newQuoteText = document.getElementById('newQuoteText').value;
  var newQuoteCategory = document.getElementById('newQuoteCategory').value;

  if (newQuoteText && newQuoteCategory) {
    var newQuote = {
      text: newQuoteText,
      category: newQuoteCategory
    };
    quotes.push(newQuote);
    saveQuotes();
    showRandomQuote();
    alert("Quote added successfully");
  } else {
    alert("Please enter both the quote and the category.");
  }
}

function createAddQuoteForm() {
  var formContainer = document.createElement('div');
  formContainer.innerHTML = "\n        <input id=\"newQuoteText\" type=\"text\" placeholder=\"Enter a new quote\"/>\n        <input id=\"newQuoteCategory\" type=\"text\" placeholder=\"Enter a new category\"/>\n        <button id=\"addQuoteBtn\">Add Quote</button>\n    ";
  document.body.appendChild(formContainer);
  var addQuoteBtn = document.getElementById('addQuoteBtn');

  if (addQuoteBtn) {
    addQuoteBtn.addEventListener('click', addQuote);
  }
}

var newQuoteBtn = document.getElementById('newQuoteBtn');

if (newQuoteBtn) {
  newQuoteBtn.addEventListener('click', function () {
    createAddQuoteForm();
  });
}

function exportToJson() {
  var quotesJson = JSON.stringify(quotes, null, 2);
  var blob = new Blob([quotesJson], {
    type: 'application/json'
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'quotes.json';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a); // Clean up the link element
}

function importFromJsonFile(event) {
  var fileReader = new FileReader();

  fileReader.onload = function (event) {
    try {
      var _quotes;

      var importedQuotes = JSON.parse(event.target.result);

      (_quotes = quotes).push.apply(_quotes, _toConsumableArray(importedQuotes));

      saveQuotes();
      showRandomQuote();
      alert('Quotes imported successfully!');
    } catch (e) {
      alert('Failed to import quotes: Invalid JSON');
    }
  };

  fileReader.readAsText(event.target.files[0]);
}

var importFileInput = document.getElementById('importFile');

if (importFileInput) {
  importFileInput.addEventListener('change', importFromJsonFile);
}

var exportBtn = document.getElementById('exportBtn');

if (exportBtn) {
  exportBtn.addEventListener('click', exportToJson);
}

loadQuotes();
showRandomQuote();