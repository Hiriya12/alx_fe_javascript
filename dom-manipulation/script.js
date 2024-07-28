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

let quotes = []; // Initialize the quotes array

function loadQuotes() {
    const storedQuotes = localStorage.getItem('quotes');
    if (storedQuotes) {
        quotes = JSON.parse(storedQuotes);
    }
}

function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

function showRandomQuote() {
    if (quotes.length === 0) return; // Check if there are any quotes to display

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const quoteDisplay = document.getElementById('quoteDisplay');

    if (quoteDisplay) {
        quoteDisplay.innerHTML = `<p><strong>${randomQuote.text}</strong> - ${randomQuote.category}</p>`;
    }
}

function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;

    if (newQuoteText && newQuoteCategory) {
        const newQuote = { text: newQuoteText, category: newQuoteCategory };
        quotes.push(newQuote);
        saveQuotes();
        showRandomQuote();
        alert("Quote added successfully");
    } else {
        alert("Please enter both the quote and the category.");
    }
}

function createAddQuoteForm() {
    const formContainer = document.createElement('div');
    formContainer.innerHTML = `
        <input id="newQuoteText" type="text" placeholder="Enter a new quote"/>
        <input id="newQuoteCategory" type="text" placeholder="Enter a new category"/>
        <button id="addQuoteBtn">Add Quote</button>
    `;

    document.body.appendChild(formContainer);

    const addQuoteBtn = document.getElementById('addQuoteBtn');
    if (addQuoteBtn) {
        addQuoteBtn.addEventListener('click', addQuote);
    }
}

const newQuoteBtn = document.getElementById('newQuoteBtn');
if (newQuoteBtn) {
    newQuoteBtn.addEventListener('click', function() {
        createAddQuoteForm();
    });
}

function exportToJson() {
    const quotesJson = JSON.stringify(quotes, null, 2);
    const blob = new Blob([quotesJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a); // Clean up the link element
}

function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
        try {
            const importedQuotes = JSON.parse(event.target.result);
            quotes.push(...importedQuotes);
            saveQuotes();
            showRandomQuote();
            alert('Quotes imported successfully!');
        } catch (e) {
            alert('Failed to import quotes: Invalid JSON');
        }
    };
    fileReader.readAsText(event.target.files[0]);
}

const importFileInput = document.getElementById('importFile');
if (importFileInput) {
    importFileInput.addEventListener('change', importFromJsonFile);
}

const exportBtn = document.getElementById('exportBtn');
if (exportBtn) {
    exportBtn.addEventListener('click', exportToJson);
}

loadQuotes();
showRandomQuote();
