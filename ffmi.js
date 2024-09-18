document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('ffmiChart').getContext('2d');
    const leanMassElement = document.getElementById('leanMass');
    const bodyFatPercentageElement = document.getElementById('bodyFatPercentage');
    const ffmiValueElement = document.getElementById('ffmiValue');
    const normalizedFfmiElement = document.getElementById('normalizedFfmi');

    // Initialize Chart.js with FFMI 0
    const ffmiChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [0, 30],
                backgroundColor: ['#e6e6e6', '#f44336'],
                borderWidth: 0
            }]
        },
        options: {
            circumference: Math.PI,
            rotation: -Math.PI,
            cutout: '70%',
            responsive: true,
            plugins: {
                tooltip: {
                    enabled: false
                },
                legend: {
                    display: false
                }
            }
        }
    });

    const heightFeet = document.getElementById('heightFeet');
    const heightInches = document.getElementById('heightInches');
    const weight = document.getElementById('weight');
    const bodyFat = document.getElementById('bodyFat');

    function updateFFMI() {
        const heightInMeters = ((parseInt(heightFeet.value) * 12) + parseInt(heightInches.value)) * 0.0254;
        const weightInKg = parseInt(weight.value) * 0.453592;
        const bodyFatPercentage = parseFloat(bodyFat.value);
        const leanMass = weightInKg * (1 - (bodyFatPercentage / 100));
        const ffmi = (leanMass / (heightInMeters * heightInMeters));
        const normalizedFfmi = ffmi + (6.3 * (1.8 - heightInMeters));

        // Update UI
        leanMassElement.innerText = `${(leanMass * 2.20462).toFixed(2)} lbs`;
        bodyFatPercentageElement.innerText = `${bodyFatPercentage}%`;
        ffmiValueElement.innerText = ffmi.toFixed(2);
        normalizedFfmiElement.innerText = normalizedFfmi.toFixed(2);

        // Update Chart
        const percentage = (ffmi / 30) * 100;
        const color = (ffmi >= 18.7 && ffmi <= 21) ? '#4caf50' : '#f44336';

        ffmiChart.data.datasets[0].data = [ffmi, 30 - ffmi];
        ffmiChart.data.datasets[0].backgroundColor = [color, '#e6e6e6'];
        ffmiChart.update();
    }

    // Event listeners for inputs
    [heightFeet, heightInches, weight, bodyFat].forEach(input => {
        input.addEventListener('input', updateFFMI);
    });

    // Initialize FFMI calculation
    updateFFMI();
});
