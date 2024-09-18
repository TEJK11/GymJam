document.getElementById('calorieForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const bodyFat = parseFloat(document.getElementById('bodyFat').value) || 0;
    const formula = document.getElementById('formula').value;
    
    let bmr;

    // Mifflin-St Jeor Equation
    if (formula === "mifflin") {
        if (gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }
    }

    // Revised Harris-Benedict Equation
    else if (formula === "harris") {
        if (gender === "male") {
            bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
        } else {
            bmr = 9.247 * weight + 3.098 * height - 4.330 * age + 447.593;
        }
    }

    // Katch-McArdle Formula (Requires Body Fat %)
    else if (formula === "katch") {
        if (bodyFat > 0) {
            bmr = 370 + 21.6 * (1 - (bodyFat / 100)) * weight;
        } else {
            alert('Please enter a valid Body Fat Percentage for the Katch-McArdle formula.');
            return;
        }
    }

    // Display the result
    document.getElementById('bmrResult').textContent = `BMR: ${bmr.toFixed(2)} kcal/day`;
});
