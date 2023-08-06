let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")

let score1 = 0
let score2 = 0

function add1() {
    score1 += 1 
    homeEl.textContent = score1
}

 function add2() {
     score1  += 2
    homeEl.textContent = score1
} 

function add3() {
    score1 += 3
    homeEl.textContent = score1
}

function increment1() {
    score2 += 1 
    awayEl.textContent = score2
}

 function increment2() {
     score2  += 2
    awayEl.textContent = score2
} 

function increment3() {
    score2 += 3
    awayEl.textContent = score2
}
