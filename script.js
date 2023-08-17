//BubbleSort
// const arr =[43,61,88,28,92,16,34,59,71];
// const bubblesort =(arr)=>{
//     const length = arr.length;

//     for(let i = 0; i<length; i++){
//         for(let j = 0; j<length; j++){
//             if(arr[i] < arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp 
//             }
//         }
//     }
//     console.log(arr)
// }
// bubblesort(arr)

//insertionSort
// const arr =[43,61,88,28,92,16,34,59,71];
// const insertionSort= ()=>{
// let length= arr.length;
// for(let i=1; i<length; i++){
//     let current = arr[i]
//     let j = i-1
//     while(j>=0 && arr[j]>current){
//         arr[j]=arr[j+1]
//         j--
//     }
//     arr[j+1]=current
// }
// console.log(arr)
// }
// insertionSort(arr)

//MergeSort
const arr =[43,61,88,28,92,16,34,59,71];
const arr1 = arr.map(num => [num])
// console.log(arr1)
// for(let i=0; i<arr1.length;){

// }

const mergeSort = (arr1,arr2) =>{
   //start comparison on same index
   let idx1=0 , idx2=0, resultArr=[]

   if(arr1[idx1] > arr2[idx2]){
    resultArr.push(arr[idx2])
    if(arr2.length-1 !== arr2[idx2]){
        ++idx2
    }
    else{
        resultArr.push(arr1.silce(idx1))
    }
   }else{
    resultArr.push(arr[idx1])
    if(arr1.length-1 !== arr1[idx1]){
        ++idx1
    }
    else{
        resultArr.push(arr2.silce(idx2))
    }
   }
  
}
console.log(mergeSort([3,5,4],[20,36,78,99]))