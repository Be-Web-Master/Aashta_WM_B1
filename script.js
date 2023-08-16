//Q1.
// function calculateCircleArea(radius){
//     let pi = Math.PI
//     radius =radius**2
//     let area = pi*radius
//     console.log(Math.round(area))
// }
// calculateCircleArea(5)

//Q2.
function calculateMeanandMedian(number){
    let sum
    for(let i=0;i<number.length;i++){
        sum += number[i]
    }
    let meantotal=sum/number.length
    console.log(meantotal)
}
calculateMeanandMedian([1,2,3,4])
