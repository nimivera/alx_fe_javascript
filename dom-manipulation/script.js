// Array of quote objects
let quotes = [
  { text: "Believe you can and you're halfway there.", category: "Motivation" },
  { text: "The only way to do great work is to love what you do.", category: "Work" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Motivation" },
  { text: "Don't watch the clock; do what it does. Keep going.", category: "Productivity" },
];

// Function to display a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  if (quotes.length > 0) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.innerHTML = `<p>${randomQuote.text}</p><p>Category: ${randomQuote.category}</p>`;
  } else {
    quoteDisplay.innerHTML = "No quotes available.";
  }
}

// Function to add a new quote
function addQuote(event) {
  event.preventDefault();
  const newQuoteText = document.getElementById("newQuoteText").value.trim();
  const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
    showRandomQuote();
  } else {
    alert("Please enter both quote and category.");
  }
}

// Event listener for the "Show New Quote" button
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("newQuote").addEventListener("click", showRandomQuote);

  const addQuoteForm = document.getElementById("addQuoteForm");
  addQuoteForm.addEventListener("submit", addQuote);

  showRandomQuote();
});