document.addEventListener("DOMContentLoaded", function () {
    // Update Footer Year and Last Modified Date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Wind Chill Calculation Function
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
        } else {
            return "N/A"; // Not applicable when conditions are not met
        }
    }

    // Retrieve Temperature and Wind Speed from HTML
    let tempElement = document.getElementById("temperature");
    let windSpeedElement = document.getElementById("windSpeed");

    if (tempElement && windSpeedElement) {
        let temp = parseFloat(tempElement.textContent);
        let windSpeed = parseFloat(windSpeedElement.textContent);

        document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
    }
});
