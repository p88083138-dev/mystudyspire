// Test button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("clickMeBtn").addEventListener("click", function () {
        alert("Hello from MyStudySpire!");
    });
});

// Notes download function
function downloadNotes(subject) {
    if (subject === "Maths") {
        window.open("https://www.africau.edu/images/default/sample.pdf", "_blank");
    } else if (subject === "Science") {
        window.open("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "_blank");
    } else if (subject === "English") {
        window.open("https://file-examples.com/storage/fe7f66a3e5d04e7b8bdf5fc/2017/10/file-sample_150kB.pdf", "_blank");
    }
}

