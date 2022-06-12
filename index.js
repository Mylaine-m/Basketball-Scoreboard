let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")
let countH = 0

function add1PtHome() {
    countH += 1
    countHome.innerText = countH
}

function add2PtsHome() {
    countH += 2
    countHome.innerText = countH
}

let countG = 0

function add3PtsHome() {
    countH += 3
    countHome.innerText = countH
}

function add1PtGuest() {
    countG += 1
    countGuest.innerText = countG
}

function add2PtsGuest() {
    countG += 2
    countGuest.innerText = countG
}

function add3PtsGuest() {
    countG += 3
    countGuest.innerText = countG
}