function downloadNotes(subject) {
    alert(subject + " notes downloading...");

    if (subject === "Maths") {
        // Apke GitHub repo me jo "notes.pdf" file hai uska path
        window.open("notes.pdf", "_blank");
    }
}
