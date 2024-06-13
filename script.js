
// Main title text shift

var words = ["making", "creating", "community", 'learning', 'climbing', 'reading', 'writing', 'traveling'];
var i = 0;
var text = "learning";

function _getChangedText() {
    i = (i + 1) % words.length;
    return text.replace(/learning/, words[i]);
}

function _changeText() {
    var txt = _getChangedText();
    document.getElementById("changer").innerHTML = txt;
}
setInterval("_changeText()", 2500);

// loading animation

document.addEventListener('DOMContentLoaded', () => {

    // delay + duration for loader (in milliseconds)
    
    const loaderDuration = 2500;

    // Get references to the loader and main heading elements
    const loader = document.getElementById('loader');
    const mainHeading = document.getElementById('heading');
    const contentMain = document.getElementById('content');
    const centerMain = document.getElementById('center');

    // Set a timer to hide the loader and show the main heading
    setTimeout(() => {
        loader.style.display = 'none';
        centerMain.style.display = 'none';
        mainHeading.style.display = 'flex';
        contentMain.style.display = 'flex';
    }, loaderDuration);

});


// random font generation

document.addEventListener("DOMContentLoaded", function() {
    // List of fonts
    const fonts = [
        "Brush Script MT, cursive",
        "Tiny5, sans-serif",
        "Workbench, sans-serif",
        "Pirata one, sans-serif",
        "Mynerve, cursive",
        "Tilt Prism, sans-serif",
        "DynaPuff, system-ui",
        "Tapestry, serif"
    ];

    function getRandomFont() {
        return fonts[Math.floor(Math.random() * fonts.length)];
    }

    // Select a random font for the first element
    const randomFont1 = getRandomFont();
    const element1 = document.getElementById("randomFont1");
    if (element1) {
        element1.style.fontFamily = randomFont1;
    }

    // Select a random font for the second element
    const randomFont2 = getRandomFont();
    const element2 = document.getElementById("randomFont2");
    if (element2) {
        element2.style.fontFamily = randomFont2;
    }
});

