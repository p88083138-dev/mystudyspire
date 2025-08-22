// Button click example
document.getElementById("clickMeBtn").addEventListener("click", function() {
    alert("Hello from MyStudySpire!");
});

// Notes download function
function downloadNotes(subject) {
    alert(subject + " notes downloading...");

    if (subject === "Maths") {
        window.open("https://example.com/maths.pdf", "_blank");
    } else if (subject === "Science") {
        window.open("https://example.com/science.pdf", "_blank");
    } else if (subject === "English") {
        window.open("https://example.com/english.pdf", "_blank");
    }
}

