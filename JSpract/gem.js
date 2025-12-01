function updateClock() {let now = new Date();let time = now.toLocaleDateString();let time1 = now.toLocaleTimeString();let kill= now.getFullYear();document.getElementById('clock').textContent = time  +"\n"+ time1 +"\n"+ kill;}setInterval(updateClock, 1000);updateClock();



