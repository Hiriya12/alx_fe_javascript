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

let quotes = [
    { text: "Everything you've ever wanted is sitting on the other side of fear", category: "Motivational" },
    { text: "Technology will never replace great teachers but technology in the hands of great teachers is transformational.", category: "Technological" },
    { text: "It takes courage to grow up and become who you really are.", category: "Inspirational" }
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteDisplay = document.getElementById('quoteDisplay');
    if (quoteDisplay) {
        quoteDisplay.innerHTML = `<p><strong>${randomQuote.text}</strong> - ${randomQuote.category}</p>`;
    }
}

document.getElementById('newQuote').addEventListener('click', showRandomQuote);

function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;

    if (newQuoteText && newQuoteCategory) {
        const newQuote = { text: newQuoteText, category: newQuoteCategory };
        quotes.push(newQuote);
        alert("New quote added successfully!");
    } else {
        alert("Please enter both the quote and the category.");
    }
}