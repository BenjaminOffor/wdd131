document.addEventListener("DOMContentLoaded", function () {
    // Set Year and Last Modified Date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Wind Chill Calculation
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
        } else {
            return "N/A";
        }
    }

    // Get Static Values and Compute Wind Chill
    let temp = parseFloat(document.getElementById("temperature").textContent);
    let windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
    document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
});
