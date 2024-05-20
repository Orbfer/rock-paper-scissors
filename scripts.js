function getComputerChoise() {
    let c = Math.floor(Math.random() * 4)
    return c
}
const fire = document.querySelector(".fire")
fire.onclick = () => { 
    let a = getComputerChoise()
    let b = 0
    let result = getFightResult(a, b)
    document.querySelector(".result").innerHTML = result
    let newimg = document.createElement("img");
    newimg.classList.add("newimg")
    newimg.src = "img/fire.jpg";
    let src = document.querySelector(".humen-element");
    let newimgClass = document.querySelector(".newimg")
    
}
const water = document.querySelector(".water")
water.onclick = () => { 
    let a = getComputerChoise()
    let b = 1
    let result = getFightResult(a, b)
    document.querySelector(".result").innerHTML = result
}
const earth = document.querySelector(".earth")
earth.onclick = () => { 
    let a = getComputerChoise()
    let b = 2
    let result = getFightResult(a, b)
    document.querySelector(".result").innerHTML = result
}
const air = document.querySelector(".air")
air.onclick = () => { 
    let a = getComputerChoise()
    let b = 3
    let result = getFightResult(a, b)
    document.querySelector(".result").innerHTML = result

}

function getFightResult(a, b) {
    if (b==0)
        if (a == 0)
            return "A Draw!"
        else if (a == 1)
            return "You Win! Victory Was Inevitable!"
        else if (a == 2)
            return "A Draw!"
        else
            return "You Lost! You have failed your nation."
    else if (b==1)
        if (a == 0)
            return "You Win! Victory Was Inevitable!"
        else if (a == 1)
            return "A Draw!"
        else if (a == 2)
            return "You Lost! You have failed your nation."
        else
            return "A Draw!"

    else if (b==2)
        if (a == 0)
            return "A Draw!"
        else if (a == 1)
            return "You Win! Victory Was Inevitable!"
        else if (a == 2)
            return "A Draw!"
        else
            return "You Lost! You have failed your nation."
    else 
        if (a == 0)
            return "You Lost! You have failed your nation."
        else if (a == 1)
            return "A Draw!"
        else if (a == 2)
            return "You Win! Victory Was Inevitable!"
        else
            return "A Draw!"
}

