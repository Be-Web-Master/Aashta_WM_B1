//27.Generate and print numbers between 1 and 100 that are divisible by both 7 and 9.

let num=100
function numberBtw1To100(num){
    for(let i=1;i<=num;i++){
        if(i%7 === 0 && i%9 === 0){
            console.log(i)
        }
    }
}
numberBtw1To100(num)