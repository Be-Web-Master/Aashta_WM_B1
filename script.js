function array(num) {
    const optArr = []
    for (let i = 1; i <= num; i += 1) {
        optArr.push(i)
    }
    return optArr
}
let ages = array(20)
console.log(ages)
function calculateTotalTicketPrice(ages) {
    let price, total = 0
    for (let i = 0; i < ages.length; i += 1) {
        if (ages < 12) {
            price = 5
            total += price
        }
        else if (ages >= 12 && ages <= 17) {
            price = 10
            total += price
        }
        else if (ages >= 18 && ages <= 59) {
            price = 10
            total += price
        }
        else {
            price = 8
            total += price
        }
    }
    console.log(total)
}
calculateTotalTicketPrice(ages)