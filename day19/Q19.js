// Q19. Write a program to check if a given year is a leap year or not.

function leapyear(year){
    if((year%4 === 0) && (year % 100 != 0) || (year %400 === 0)){
       console.log(year,"leap year")
    }
    else{
        console.log(year,"not a leap year")
    }
}
leapyear(3020)

