//Faulty Calculator

const exp = require("constants")

function fault_calc(a, b) {
    console.log("a is " + a)
    console.log("b is " + b)

    let add = a + b
    let sub = a - b
    let div = a / b
    let multi = a * b
    let expo = a ** b


    let random = Math.random()

    if (random < 0.1) {
        add = a - b
        multi = a + b
        div = a ** b
        sub = a / b
        expo = a * b
    }

    console.log("a+b is " + add)
    console.log("a-b is " + sub)
    console.log("a/b is " + div)
    console.log("a*b is " + multi)
    console.log("a**b is " + expo)
    console.log("random number is " + random)
}


for (let i = 0; i < 10; i++) {
    fault_calc(5, 6)
}








