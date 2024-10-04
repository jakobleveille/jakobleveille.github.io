// list hide unhide content

    $(document).ready(function() {
        $('.dropdown .nav-item').click(function() {
            console.log('Clicked'); // Debug log
            $(this).siblings('.nav-content').slideToggle();
            $(this).find('.arrow').toggleClass('down');
        });
    });

    $(document).ready(function() {
        console.log("easter egg here u go: https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      });


// quote carousel

const quotes = [
    { text: "it may be a problem, but problems are fixable", author: "AY" },
    { text: "The only way to do great work is to love what you do", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts", author: "Winston Churchill" },
];

let currentIndex = 0;

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateQuote() {
    const { text, author } = quotes[currentIndex];
    quoteText.textContent = `"${text}"`;
    quoteAuthor.textContent = `- ${author}`;
}

function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    updateQuote();
}

function prevQuote() {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    updateQuote();
}

prevBtn.addEventListener('click', prevQuote);
nextBtn.addEventListener('click', nextQuote);

// Initial quote display
updateQuote();
