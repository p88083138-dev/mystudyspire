function downloadNotes() {
    alert("Your notes are downloading...");
    // Yeh line repo ke andar wali file open karegi
    window.open("notes.pdf", "_blank");
}

document.getElementById("clickMeBtn").addEventListener("click", downloadNotes);

