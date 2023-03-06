let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
let sessionsDiv = document.getElementById('sessions');
for (let i = 0; i < sessions.length; i++) {
    let sessionDiv = document.createElement('div');
    sessionDiv.textContent = `${i + 1}: ${sessions[i]}`;
    sessionsDiv.appendChild(sessionDiv);
    // localStorage.clear();
}