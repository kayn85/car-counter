let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    let countDash = count + ' - '
    saveEl.textContent += countDash
    countEl.textContent = 0
    count = 0
} 