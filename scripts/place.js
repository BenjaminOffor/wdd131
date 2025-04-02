document.addEventListener("DOMContentLoaded", function () {
    // Update year and last modified date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Country Data
    const countryData = {
        name: "Ghana",
        capital: "Accra",
        population: "32 million",
        currency: "Ghanaian Cedi (GHS)",
    };

    // Insert country data dynamically
    document.getElementById("countryName").textContent = countryData.name;
    document.getElementById("capital").textContent = countryData.capital;
    document.getElementById("population").textContent = countryData.population;
    document.getElementById("currency").textContent = countryData.currency;

    // Weather Data
    function calculateWindChill(temp, windSpeed) {
        return (temp <= 10 && windSpeed > 4.8) ? 
            (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) : 
            "N/A";
    }

    let temp = parseFloat(document.getElementById("temperature").textContent);
    let windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
    document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
});
