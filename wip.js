
// Main title text shift

var words = ["making", "creating", "community", 'learning', 'climbing'];
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
setInterval("_changeText()", 2200);

// loading animation

document.addEventListener('DOMContentLoaded', () => {

    // delay + duration for loader (in milliseconds)
    
    const loaderDuration = 3000; // 3 seconds

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


