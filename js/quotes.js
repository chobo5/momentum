const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "-Walt Disney-",
    },
    {
        quote: "Life is what happens when you are busy making other plans.",
        author: "-John Lennon-",
    },
    {
        quote: "The world is book and those who do not travel read only one page.",
        author: "-Saint Augustine-",
    },
    {
        quote: "We are what we repeatedly do. Excellence, therefore, is not an act but a habit.",
        author: "-Aristotle-",        
    },
    {
        quote: "The greater danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and achieving our mark.",
        author: "-Michelangelo-",
    },
    {
        quote: "Whether you think you can, or you think you can't, you're right.",
        author: "-Henry Ford-"
    },
    {
        quote: "It is never wrong to do the right thing.",
        author: "-Mark Twain-",
    },
    {
        quote: "The best or nothing.",
        author: "-Mercedes-Benz-",
    },
    {
        quote: "Just do it.",
        author: "-Nike-",

    },
    {
        quote: "Never stop exploring.",
        author: "-The North Face-",
    }
    
];

const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

