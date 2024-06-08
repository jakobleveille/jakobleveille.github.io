
// Main title text shift

var words = ["building", "making", "creating", "community"];
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

// background stuff