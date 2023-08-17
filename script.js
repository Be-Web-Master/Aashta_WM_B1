
const studentsMarks=[
    [80,70,50],
    [45,90,75],
    [70,60,70]
]

function calculateQuizResults(studentsMarks) {
    let arr = []
    let sum=0
    studentsMarks.map(elem =>{
        elem.map(element =>{
           sum = element+sum
        })
        console.log(sum)
    })
    
    if(sum>=200){
        arr.push([sum,"pass"])
    }else{
        arr.push([sum,"fail"])
    }
    console.log(arr)
}
calculateQuizResults(studentsMarks)