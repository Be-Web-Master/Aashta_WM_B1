//Merge sort
let arr=[6,8,5,11,18,3]
let smallarr=arr.map(elem => [elem])
// console.log(smallarr)
for(let i=0;i<arr.length;i+=2){
 let j
 if(i === arr.length-1){
  
 }
 console.log({i:arr[i], j:arr[j]})
}
function mergesort(arr1,arr2){
   let newArr=[]
   let idx1=0,idx2=0
    if(arr1[idx1]<arr2[idx2]){
        newArr.push(arr1[idx1])
        if(arr1.length-1 === idx1){
            newArr.push(arr2.slice(idx2))
        }
        return idx1++
    }
    else{
        newArr.push(arr2[idx2])
        if(arr2.length-1 === idx2){
            newArr.push(arr1.slice(idx1))
        }
        return idx2++
    }
    return newArr
}
// console.log(mergesort([2,5,8],[8,7,62,10]))