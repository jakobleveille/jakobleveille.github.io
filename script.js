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

    document.addEventListener('DOMContentLoaded', function() {
        const quotes = [
            { text: "if it's not fun, its probably not worth doing", author: "ls"},
            { text: "it may be a problem, but problems are fixable", author: "ay" },
            { text: "fail fast. fail often. fail forward. failing is not a disgrace if you keep failing better", author: "kevin kelly" },
            { text: "in the creative world, passion beats duty", author: "bill watterson"},
            { text: "when you are right, you are learning nothing", author: "kevin kelly" },
            { text: "finding your purpose is never a static process", author: "ls"},
            { text: "if you have a good “why” to live for, no “how” will stop you", author: "kevin kelly"},
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
    });