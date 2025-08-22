function downloadNotes(subject) {
    alert(subject + " notes downloading...");

    // Yaha apna PDF file link dalna hoga
    if(subject === "Maths") {
        window.open("https://example.com/maths.pdf", "_blank");
    } else if(subject === "Science") {
        window.open("https://example.com/science.pdf", "_blank");
    } else if(subject === "English") {
        window.open("https://example.com/english.pdf", "_blank");
    }
}

