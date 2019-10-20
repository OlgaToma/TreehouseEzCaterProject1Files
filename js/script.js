/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/***
 Create the array of 5 quote objects containing quote and source properties, 
 one object containing quote, source and year properties and one object 
 containing quote, source and citation properties. 
 ***/

var quotes = [
  {
      quote:"You don’t have to be great to start, but you have to start to be great.",
      source: "Zig Ziglar"
  },
  {
      quote: "Nothing will work unless you do.",
      source: "Maya Angelou"
  },
  {
      quote: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
      source: "Earl Nightingale"
  },
  {
      quote: "Anyone who stops learning is old, whether at twenty or eighty.",
      source: "Henry Ford"
  },
  {
      quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      source: "Mahatma Gandhi"
  },
  {
      quote: "An investment in knowledge pays the best interest.",
      source: "Benjamin Franklin",
      year: "1758"
  },
  {
      quote: "Education is what remains after one has forgotten what one has learned in school.",
      source: "Albert Einstein",
      citation: "https://www.brainyquote.com/topics/learning-quotes"
  },
];

/***
 Create the "getRandomQuote" function to return a random quote from the quotes array. 
 ***/
function getRandomQuote() {
  var randomQuoteIndex = Math.floor((Math.random()) * quotes.length);
  return (quotes[randomQuoteIndex]);
};

/***
 Create the "printQuote" function,
 which stores the result of the "getRandomQuote" function in a new variable,
 and builds an HTML string. It checks for the presence of additional "year" and
 "citation" properties in the quote object and replaces the content of the 
 "quote-box" element with the quote objects data.
 ***/

function printQuote() {
  var quote = getRandomQuote();
  var html = '';
  html = '<p class="quote">' + quote.quote + '</p>';
  html += '<p class="source">' + quote.source;
  if (quote.citation) {
    html += '<span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year) {
    html += '<span class="year">' + quote.year + '</span>';
  }
  html += '</p>';
  document.getElementById("quote-box").innerHTML = html;
};

// Create event listener to call the printQuote function.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


