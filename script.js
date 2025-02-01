document.getElementById("save-btn").addEventListener("click", function() {
    const resumeContent = document.getElementById("resume-output").innerHTML;

    localStorage.setItem("savedResume", resumeContent);
    alert("Resume saved successfully!");
});

// Load saved resume
document.addEventListener("DOMContentLoaded", function() {
    const savedResume = localStorage.getItem("savedResume");

    if (savedResume) {
        document.getElementById("resume-output").innerHTML = savedResume;
    }
});
