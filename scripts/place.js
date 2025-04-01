// Footer Year and Last Modified Date
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        return (
            35.74 +
            0.6215 * temp -
            35.75 * Math.pow(windSpeed, 0.16) +
            0.4275 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(2);
    } else {
        return "N/A";
    }
}

// Display Wind Chill
document.addEventListener("DOMContentLoaded", function () {
    let temp = 40; // Static temperature (Fahrenheit)
    let windSpeed = 5; // Static wind speed (mph)

    document.getElementById("windChill").textContent = calculateWindChill(
        temp,
        windSpeed
    );
});
// Footer Year and Last Modified Date
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});

// Wind Chill Calculation Function
function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        return (
            35.74 +
            0.6215 * temp -
            35.75 * Math.pow(windSpeed, 0.16) +
            0.4275 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(2);
    } else {
        return "N/A";
    }
}

// Display Wind Chill in Weather Section
document.addEventListener("DOMContentLoaded", function () {
    let temp = 40; // Static temperature in Fahrenheit
    let windSpeed = 5; // Static wind speed in mph

    document.getElementById("windChill").textContent = calculateWindChill(
        temp,
        windSpeed
    );
});
