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

//3


// let quotes = [
//     { id: 1, text: "Everything you've ever wanted is sitting on the other side of fear", category: "Motivational" },
//     { id: 2, text: "Technology will never replace great teachers but technology in the hands of great teachers is transformational.", category: "Technological" },
//     { id: 3, text: "It takes courage to grow up and become who you really are.", category: "Inspirational" }
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
//         const newId = quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 1;
//         const newQuote = { id: newId, text: newQuoteText, category: newQuoteCategory };
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

// loadQuotes();
// populateCategories();
// displayQuotes(quotes);

// const serverURL = 'https://jsonplaceholder.typicode.com/posts';

// async function fetchQuotesFromServer() {
//     try {
//         const response = await fetch(serverURL);
//         if (!response.ok) {
//             throw new Error('Failed to fetch data from the server');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function syncWithServer() {
//     const serverData = await fetchQuotesFromServer();
    
//    serverData.forEach(serverQuote => {
//         const localQuoteIndex = quotes.findIndex(quote => quote.id === serverQuote.id);
//         if (localQuoteIndex !== -1) {
//             quotes[localQuoteIndex] = serverQuote;
//         } else {
//             quotes.push(serverQuote);
//         }
//     });

//     saveQuotes();
    
//     alert("Data synced with the server successfully.");
// }

// setInterval(syncWithServer, 60000); 

// function handleConflictManually() {
    
// }


// function notifyUserOfConflict() {
    
//     alert("Data conflict detected. Click to resolve.");
// }

// functionHere is the continuation of the `script.js` file with the `fetchQuotesFromServer` function integrated into the existing code:


// function simulateConflict() {
//     const conflictingQuote = quotes[0];
//     conflictingQuote.text = "Updated text on the server";

//     notifyUserOfConflict();
// }

// let quotes = [
//     { id: 1, text: "Everything you've ever wanted is sitting on the other side of fear", category: "Motivational" },
//     { id: 2, text: "Technology will never replace great teachers but technology in the hands of great teachers is transformational.", category: "Technological" },
//     { id: 3, text: "It takes courage to grow up and become who you really are.", category: "Inspirational" }
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
//     categoryFilter.innerHTML = '<option value="all">All</option>'; // Add 'All' option
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
//         const newId = quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 1;
//         const newQuote = { id: newId, text: newQuoteText, category: newQuoteCategory };
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

// function notifyUserOfConflict(localQuote, serverQuote) {
//     const conflictMessage = `Conflict detected for quote with ID ${localQuote.id}:
//     Local: "${localQuote.text}" - ${localQuote.category}
//     Server: "${serverQuote.text}" - ${serverQuote.category}
//     Please resolve the conflict manually.`;
    
//     if (confirm(conflictMessage + "\n\nClick OK to use the server version, Cancel to keep the local version.")) {
      
//         Object.assign(localQuote, serverQuote);
//     }
//     saveQuotes();
//     displayQuotes(quotes);
// }

// const serverURL = 'https://jsonplaceholder.typicode.com/posts';

// async function fetchQuotesFromServer() {
//     try {
//         const response = await fetch(serverURL);
//         if (!response.ok) {
//             throw new Error('Failed to fetch data from the server');
//         }
//         const data = await response.json();
//         return data.map(item => ({
//             id: item.id,
//             text: item.title,
//             category: 'Server'  
//         }));
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function syncWithServer() {
//     const serverData = await fetchQuotesFromServer();
//     if (serverData) {
//         serverData.forEach(serverQuote => {
//             const localQuoteIndex = quotes.findIndex(quote => quote.id === serverQuote.id);
//             if (localQuoteIndex !== -1) {
//                 if (quotes[localQuoteIndex].text !== serverQuote.text || quotes[localQuoteIndex].category !== serverQuote.category) {
//                     notifyUserOfConflict(quotes[localQuoteIndex], serverQuote);
//                 }
//             } else {
//                 quotes.push(serverQuote);
//             }
//         });
//         saveQuotes();
//         displayQuotes(quotes);
//         alert("Data synced with the server successfully.");
//     }
// }

// function simulateConflict() {
//     const conflictingQuote = quotes[0];
//     conflictingQuote.text = "Updated text on the server";
//     notifyUserOfConflict(conflictingQuote, { id: conflictingQuote.id, text: "Updated text on the server", category: conflictingQuote.category });
// }

// setInterval(syncWithServer, 60000);

// loadQuotes();
// const savedCategory = localStorage.getItem('selectedCategory');
// if (savedCategory) {
//     document.getElementById('categoryFilter').value = savedCategory;
// }
// populateCategories();
// displayQuotes(quotes);


// let quotes = [
//     { id: 1, text: "Everything you've ever wanted is sitting on the other side of fear", category: "Motivational" },
//     { id: 2, text: "Technology will never replace great teachers but technology in the hands of great teachers is transformational.", category: "Technological" },
//     { id: 3, text: "It takes courage to grow up and become who you really are.", category: "Inspirational" }
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
//     const categories = [...new Set(quotes.map(quote => quote.category))]; 
//     const categoryFilter = document.getElementById('categoryFilter');
//     categoryFilter.innerHTML = '<option value="all">All</option>'; 
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

// async function addQuote() {
//     const newQuoteText = document.getElementById('newQuoteText').value;
//     const newQuoteCategory = document.getElementById('newQuoteCategory').value;

//     if (newQuoteText && newQuoteCategory) {
//         const newId = quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 1;
//         const newQuote = { id: newId, text: newQuoteText, category: newQuoteCategory };
        
//         try {
//             const response = await fetch(serverURL, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(newQuote)
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to post data to the server');
//             }

//             quotes.push(newQuote);
//             saveQuotes();
//             populateCategories();
//             alert("New quote added successfully!");
//         } catch (error) {
//             console.error('Error adding quote:', error);
//             alert('Failed to add the quote. Please try again.');
//         }
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

// function notifyUserOfConflict(localQuote, serverQuote) {
//     const conflictMessage = `Conflict detected for quote with ID ${localQuote.id}:
//     Local: "${localQuote.text}" - ${localQuote.category}
//     Server: "${serverQuote.text}" - ${serverQuote.category}
//     Please resolve the conflict manually.`;
    
//     if (confirm(conflictMessage + "\n\nClick OK to use the server version, Cancel to keep the local version.")) {
      
//         Object.assign(localQuote, serverQuote);
//     }
//     saveQuotes();
//     displayQuotes(quotes);
// }

// const serverURL = 'https://jsonplaceholder.typicode.com/posts';

// async function fetchQuotesFromServer() {
//     try {
//         const response = await fetch(serverURL);
//         if (!response.ok) {
//             throw new Error('Failed to fetch data from the server');
//         }
//         const data = await response.json();
//         return data.map(item => ({
//             id: item.id,
//             text: item.title,
//             category: 'Server'  
//         }));
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function syncQuotes() {
//     const serverData = await fetchQuotesFromServer();
//     if (serverData) {
//         serverData.forEach(serverQuote => {
//             const localQuoteIndex = quotes.findIndex(quote => quote.id === serverQuote.id);
//             if (localQuoteIndex !== -1) {
//                 if (quotes[localQuoteIndex].text !== serverQuote.text || quotes[localQuoteIndex].category !== serverQuote.category) {
//                     notifyUserOfConflict(quotes[localQuoteIndex], serverQuote);
//                 }
//             } else {
//                 quotes.push(serverQuote);
//             }
//         });
//         saveQuotes();
//         displayQuotes(quotes);
//         alert("Quotes synced with server!");
//     }
// }

// function simulateConflict() {
//     const conflictingQuote = quotes[0];
//     conflictingQuote.text = "Updated text on the server";
//     notifyUserOfConflict(conflictingQuote, { id: conflictingQuote.id, text: "Updated text on the server", category: conflictingQuote.category });
// }

// setInterval(syncQuotes, 60000);

// loadQuotes();
// const savedCategory = localStorage.getItem('selectedCategory');
// if (savedCategory) {
//     document.getElementById('categoryFilter').value = savedCategory;
// }
// populateCategories();
// displayQuotes(quotes);

let quotes = [
    { id: 1, text: "Everything you've ever wanted is sitting on the other side of fear", category: "Motivational" },
    { id: 2, text: "Technology will never replace great teachers but technology in the hands of great teachers is transformational.", category: "Technological" },
    { id: 3, text: "It takes courage to grow up and become who you really are.", category: "Inspirational" }
];

function displayQuotes(quotesArray) {
    const quoteDisplay = document.getElementById('quoteDisplay');
    if (quoteDisplay) {
        quoteDisplay.innerHTML = '';
        quotesArray.forEach(quote => {
            const quoteElement = document.createElement('p');
            quoteElement.innerHTML = `<strong>${quote.text}</strong> - ${quote.category}`;
            quoteDisplay.appendChild(quoteElement);
        });
    }
}

function populateCategories() {
    const categories = [...new Set(quotes.map(quote => quote.category))]; // Extract unique categories
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.innerHTML = '<option value="all">All</option>'; // Add 'All' option
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function filterQuotes() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const filteredQuotes = selectedCategory === 'all' ? quotes : quotes.filter(quote => quote.category === selectedCategory);
    displayQuotes(filteredQuotes);
    localStorage.setItem('selectedCategory', selectedCategory);
}

async function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;

    if (newQuoteText && newQuoteCategory) {
        const newId = quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 1;
        const newQuote = { id: newId, text: newQuoteText, category: newQuoteCategory };
        
        // Post new quote to server
        try {
            const response = await fetch(serverURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newQuote)
            });

            if (!response.ok) {
                throw new Error('Failed to post data to the server');
            }

            quotes.push(newQuote);
            saveQuotes();
            populateCategories();
            alert("New quote added successfully!");
        } catch (error) {
            console.error('Error adding quote:', error);
            alert('Failed to add the quote. Please try again.');
        }
    } else {
        alert("Please enter both the quote and the category.");
    }
}

function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

function loadQuotes() {
    const storedQuotes = localStorage.getItem('quotes');
    if (storedQuotes) {
        quotes = JSON.parse(storedQuotes);
    }
}

function notifyUserOfConflict(localQuote, serverQuote) {
    const conflictMessage = `Conflict detected for quote with ID ${localQuote.id}:
    Local: "${localQuote.text}" - ${localQuote.category}
    Server: "${serverQuote.text}" - ${serverQuote.category}
    Please resolve the conflict manually.`;
    
    if (confirm(conflictMessage + "\n\nClick OK to use the server version, Cancel to keep the local version.")) {
        // Use server version
        Object.assign(localQuote, serverQuote);
    }
    saveQuotes();
    displayQuotes(quotes);
}

const serverURL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchQuotesFromServer() {
    try {
        const response = await fetch(serverURL);
        if (!response.ok) {
            throw new Error('Failed to fetch data from the server');
        }
        const data = await response.json();
        return data.map(item => ({
            id: item.id,
            text: item.title,
            category: 'Server'  // Assume a generic category for server quotes
        }));
    } catch (error) {
        console.error(error);
    }
}

async function syncQuotes() {
    const serverData = await fetchQuotesFromServer();
    if (serverData) {
        serverData.forEach(serverQuote => {
            const localQuoteIndex = quotes.findIndex(quote => quote.id === serverQuote.id);
            if (localQuoteIndex !== -1) {
                if (quotes[localQuoteIndex].text !== serverQuote.text || quotes[localQuoteIndex].category !== serverQuote.category) {
                    notifyUserOfConflict(quotes[localQuoteIndex], serverQuote);
                }
            } else {
                quotes.push(serverQuote);
            }
        });
        saveQuotes();
        displayQuotes(quotes);
        alert("Quotes synced with server!");
    }
}

function simulateConflict() {
    const conflictingQuote = quotes[0];
    conflictingQuote.text = "Updated text on the server";
    notifyUserOfConflict(conflictingQuote, { id: conflictingQuote.id, text: "Updated text on the server", category: conflictingQuote.category });
}

setInterval(syncQuotes, 60000);

loadQuotes();
const savedCategory = localStorage.getItem('selectedCategory');
if (savedCategory) {
    document.getElementById('categoryFilter').value = savedCategory;
}
populateCategories();
displayQuotes(quotes);
