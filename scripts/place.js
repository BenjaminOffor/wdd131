// Update year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Update last modified date
document.getElementById("last-modified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + " °C";
    }
    return "N/A";
}

// Set Wind Chill on Page Load
const temp = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);
document.getElementById("windchill").textContent = calculateWindChill(temp, windSpeed);
