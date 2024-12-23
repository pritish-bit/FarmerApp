// Diagnose Plant (Fake Example)
function diagnosePlant() {
    const result = document.getElementById("diagnosisResult");
    result.textContent = "Example Diagnosis: Healthy Plant!";
}

// Get Crop Suggestions (Fake Example)
function getSuggestions() {
    const pH = document.getElementById("pH").value;
    const moisture = document.getElementById("moisture").value;
    const result = document.getElementById("suggestionsResult");

    if (!pH || !moisture) {
        result.textContent = "Please enter both pH and moisture levels.";
        return;
    }

    if (pH > 6 && pH < 7.5 && moisture > 40) {
        result.textContent = "Suggested Crop: Wheat, Rice.";
    } else {
        result.textContent = "Suggested Crop: Check with an expert.";
    }
}
