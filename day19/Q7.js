// Write a function that takes an array of numbers and calculates the sum of even numbers using a for...of loop.

function array(num){
        const outputArr = []
        for(let i=1;i <= num; i+=1){
            outputArr.push(i)
        }
        // console.log(outputArr)
        return outputArr
    }
 const arr = array(10)
    let sum = 0
    // for(let i=0;i<=arr.length;i++){
    //     // console.log(i)
    //     if(i%2 === 0){
    //         sum=sum+i
    //     }
    // }
    for (const i of arr) {
        if(i%2 === 0){
            sum = sum + i
        }
    }
    console.log(sum)
