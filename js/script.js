function myFunction() {
    var i;
    var colour = [];
    var randColour = "#";
    var colourCode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    for (i = 1; i < 7; i++) {
        var x = Math.floor((Math.random() * 16) + 0);
        colour[i] = colourCode[x];
        randColour = randColour.concat(colour[i]);
    }
    document.body.style.backgroundColor = randColour;
    document.getElementById("myInput").value = randColour;
    return randColour;
}

function copyFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}

function outCopy() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}