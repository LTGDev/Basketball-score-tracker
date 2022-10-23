let homeEl = document.getElementById("home-el")
let guestEL = document.getElementById("guest-el")
console.log(guestEL)
console.log(guestEL.textContent)
let count = 0
let countGuest = 0

function add1() {
    count += 1
    homeEl.textContent = count
}

function add2() {
    count += 2
    homeEl.textContent = count
}

function add3() {
    count += 3
    homeEl.textContent = count
}

function add1guest() {
    countGuest += 1
    guestEL.textContent = countGuest
}

function add2guest() {
    countGuest += 2
    guestEL.textContent = countGuest
}

function add3guest() {
    countGuest += 3
    guestEL.textContent = countGuest
}