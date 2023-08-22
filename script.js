//Linear Searching

// function linearSearch(arr,srchValue){
//     for(let i=0;i<arr.length;i++){
//        if(arr[i]===srchValue){
//         return i
//        }
//     }
//     return -1
// }
// console.log(linearSearch([1,5,6,7],7))

//Binary Search
// const arr=[1,5,7,8,20,85]
// function binarySearch(arr,srchValue){
//     let start=0;
//     let end=arr.length-1;
//     let middle=Math.floor((start+end)/2);

//     while(arr[middle] !== srchValue && start <= end){
//         if(arr[middle]<srchValue){
//           start = middle +1
//         }
//         else{
//             end = middle
//         }
//         middle=Math.floor((start+end)/2);
//     }
//     if(arr[middle] === srchValue){
//         return middle
//     }
//     return -1

// }
// console.log(binarySearch(arr,8))

function binarySearch(arr, srchValue) {
    let start = 0;
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)

    while (arr[middle] !== srchValue && start <= end) {
// console.log("aSAD")
        if (arr[middle] < srchValue) {
            start = middle + 1
        }
        else {
            end = middle
        }
        middle=Math.floor((start+end)/2)
    }
    if (arr[middle] === srchValue) {
        return middle
    }
    return -1

}
console.log(binarySearch([1, 5, 7, 8, 9], 9))