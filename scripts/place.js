document.addEventListener("DOMContentLoaded", function () {
    // Update Year & Last Modified Date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Ghana Country Data
    const ghanaData = {
        capital: "Accra",
        population: "32 million",
        currency: "Ghanaian Cedi (GHS)",
        language: "English"
    };

    // Insert Data into HTML
    document.getElementById("capital").textContent = ghanaData.capital;
    document.getElementById("population").textContent = ghanaData.population;
    document.getElementById("currency").textContent = ghanaData.currency;
    document.getElementById("language").textContent = ghanaData.language;

    // Function to Calculate Wind Chill
    function calculateWindChill(temp, windSpeed) {
        return (temp <= 10 && windSpeed > 4.8) 
            ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) 
            : "N/A";
    }

    // Fetch values from HTML
    let temp = parseFloat(document.getElementById("temperature").textContent);
    let windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
    
    // Display Wind Chill
    document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
});
