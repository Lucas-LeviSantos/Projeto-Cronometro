const minutesEl = document.getElementById("minutes")
const secundsEl = document.getElementById("secunds")
const milisecundsEl = document.getElementById("milisecunds")
const startBtn = document.getElementById("startBtn")
const pauseBtn = document.getElementById("pauseBtn")
const resumeBtn = document.getElementById("resumeBtn")
const resetBtn = document.getElementById("resetBtn")

let interval;
let minutes = 0;
let secunds = 0;
let milisecunds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTime)
pauseBtn.addEventListener("click", pauseTime)
resumeBtn.addEventListener("click", resumeTime)
resetBtn.addEventListener("click", resetTime)

function startTime() {
    interval = setInterval(() => {

        if (!isPaused) {

            milisecunds += 10

            if (milisecunds === 1000) {
                secunds++
                milisecunds = 0
            }

            if (secunds === 60) {
                minutes++
                secunds = 0
            }

            minutesEl.textContent = formatTime(minutes)
            secundsEl.textContent = formatTime(secunds)
            milisecundsEl.textContent = formatMilisecunds(milisecunds)
        }
    }, 10);
  
    startBtn.style.display = "none"
    pauseBtn.style.display = "block"

}

function pauseTime() {
    isPaused = true
    resumeBtn.style.display = "block"
    pauseBtn.style.display = "none"
}

function resumeTime() {
    isPaused = false
    resumeBtn.style.display = "none"
    pauseBtn.style.display = "block"
}

function resetTime () {
    clearInterval(interval)

    isPaused = false

    milisecunds = 0
    secunds = 0
    minutes = 0

    minutesEl.textContent = "00"
    secundsEl.textContent = "00"
    milisecundsEl.textContent = "000"

    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"
    startBtn.style.display = "block"
    
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilisecunds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}