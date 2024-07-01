document.addEventListener("DOMContentLoaded", function() {
    // Display current time in UTC
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString();
        document.getElementById('time').innerText = utcTime;
    }
    
    // Display current day of the week
    function updateDay() {
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = days[now.getUTCDay()];
        document.getElementById('day').innerText = currentDay;
    }
    
    updateTime();
    updateDay();
    setInterval(updateTime, 1000); // Update time every second
});
