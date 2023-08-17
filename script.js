function array(num){
        const optArr = []
        for(let i=1;i <= num; i+=1){
            optArr.push(i)
        }
        return optArr
    }
let ages=array()
let totalprice = 0
function calculateTotalTicketPrice(ages){
       if(ages<12){
        totalprice = 5
        console.log("$5")
       }
       if(ages>=12 && ages <= 17){
        totalprice = 10
        console.log("$10")
       }
       if(ages>=18 && ages <= 59){
        totalprice = 10
        console.log("$10")
       }
       
}