function getComputerChoise() {
    let c = Math.floor(Math.random() * 4)
    return c
}
let humanCounterDisplay = document.querySelector(".human-counter")
let computerCounterDisplay = document.querySelector(".computer-counter")
let count1 = 0
let count2 = 0
const fire = document.querySelector(".fire")
fire.onclick = () => { 
    let a = getComputerChoise()
    let b = 0
    let result = getFightResult(a, b)
    if (result == "You Win! Fire Beats Air.")
        count1++
    else if (result == "You Lost! Fire Loses to Water.")
        count2++
    if (count1 == 5) {
        result = "You Won! Victory was inevitble!"
        count1 = 0
        count2 = 0
    }
    else if (count2 == 5) {
        result = "You Lost! You have failed your nation."
        count2 = 0
        count1 = 0
    }
    document.querySelector(".result").innerHTML = result
    humanCounterDisplay.innerHTML = count1
    computerCounterDisplay.innerHTML = count2
}
const water = document.querySelector(".water")
water.onclick = () => { 
    let a = getComputerChoise()
    let b = 1
    let result = getFightResult(a, b)
    if (result == "You Win! Water Beats Fire.")
        count1++
    else if (result == "You Lost! Water Loses to Earth.")
        count2++
    if (count1 == 5) {
        result = "You Won! Victory was inevitble!"
        count1 = 0
        count2 = 0
    }
    else if (count2 == 5) {
        result = "You Lost! You have failed your nation."
        count2 = 0
        count1 = 0
    }
    document.querySelector(".result").innerHTML = result
    humanCounterDisplay.innerHTML = count1
    computerCounterDisplay.innerHTML = count2
}
const earth = document.querySelector(".earth")
earth.onclick = () => { 
    let a = getComputerChoise()
    let b = 2
    let result = getFightResult(a, b)
    if (result == "You Win! Earth Beats Water.")
        count1++
    else if (result == "You Lost! Earth Loses to Air.")
        count2++
    if (count1 == 5) {
        result = "You Won! Victory was inevitble!"
        count1 = 0
        count2 = 0
    }
    else if (count2 == 5) {
        result = "You Lost! You have failed your nation."
        count2 = 0
        count1 = 0
    }
    document.querySelector(".result").innerHTML = result
    humanCounterDisplay.innerHTML = count1
    computerCounterDisplay.innerHTML = count2
}
const air = document.querySelector(".air")
air.onclick = () => { 
    let a = getComputerChoise()
    let b = 3
    let result = getFightResult(a, b)
    if (result == "You Win! Air Beats Earth.")
        count1++
    else if (result == "You Lost! Air Loses to Fire.")
        count2++
    if (count1 == 5) {
        result = "You Won! Victory was inevitble!"
        count1 = 0
        count2 = 0
    }
    else if (count2 == 5) {
        result = "You Lost! You have failed your nation."
        count2 = 0
        count1 = 0
    }
    document.querySelector(".result").innerHTML = result
    humanCounterDisplay.innerHTML = count1
    computerCounterDisplay.innerHTML = count2
}

function getFightResult(a, b) {
    if (b==0)
        if (a == 0)
            return "A Draw! Fire Draws With Fire."
        else if (a == 1)
            return "You Lost! Fire Loses to Water."
        else if (a == 2)
            return "A Draw! Fire Doesn't work on Earth."
        else
            return "You Win! Fire Beats Air."
    else if (b==1)
        if (a == 0)
            return "You Win! Water Beats Fire."
        else if (a == 1)
            return "A Draw! Water Draws with Water."
        else if (a == 2)
            return "You Lost! Water Loses to Earth."
        else
            return "A Draw! Water Doesn't work on Air."

    else if (b==2)
        if (a == 0)
            return "A Draw! Earth Doesn't work on Fire."
        else if (a == 1)
            return "You Win! Earth Beats Water."
        else if (a == 2)
            return "A Draw! Earth Draws with Earth."
        else
            return "You Lost! Earth Loses to Air."
    else 
        if (a == 0)
            return "You Lost! Air Loses to Fire."
        else if (a == 1)
            return "A Draw! Air Doesn't work on Water."
        else if (a == 2)
            return "You Win! Air Beats Earth."
        else
            return "A Draw! Air Draws with Air."
}

