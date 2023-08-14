//Creating Polyfill of Map- map is a function, require 3 parameters
// 1.Array
// 2.callback
// 3.thisArg
//callback also take 3 parameters (elem, index, array)

// function myMap(arr, callback, thisArg){
//      if(!arr || Array.isArray(arr)){
//         return new Error('not an array')
//      }
//     // agr hum callback ni denge ya uske bajaye kuch denge to 
//     // error throw hoga
//     if(!callback || typeof callback!=='function'){
//         return new Error (`${callback} is not a function`)
//     }
// const resultArr = [];
// for(let i = 0; i < arr.length; i+=1){
//     const arrElem = callback(arr[i], i , arr)
//     resultArr.push(arrElem)
// }
// return resultArr;
// }
// const callFunc =(el, idx, arr)=> {
//     return el ** idx + arr.length
// }
// console.log(myMap([1,2,3,4,5], callFunc));


//Filter
// function filter(arr, callback){
//          if(!arr || !Array.isArray(arr)){
//             return new Error('not an array')
//          }
//         // agr hum callback ni denge ya uske bajaye kuch denge to 
//         // error throw hoga
//         if(!callback || typeof callback!=='function'){
//             return new Error (`${callback} is not a function`)
//         }
//     const resultArr = [];
//     for(let i = 0; i < arr.length; i+=1){
//         const arrElem = callback(arr[i],i,arr)
//         if(arrElem){
//         resultArr.push(arr[i])
//         }
//     }
//     return resultArr;
//     }
//     const callFunc =(elem)=> {
//         return elem!=2;
//     }
//     console.log(filter([1,2,3,4,5], callFunc));
 
//ForEach
// function forEach(arr, callback){
//     if(!arr || !Array.isArray(arr)){
//        return new Error('not an array')
//     }
//    // agr hum callback ni denge ya uske bajaye kuch denge to 
//    // error throw hoga
//    if(!callback || typeof callback!=='function'){
//        return new Error (`${callback} is not a function`)
//    }
// for(let i = 0; i < arr.length; i+=1){
//     callback(arr[i],i,arr)
// }
// }
// const callFunc =(el,idx,arr)=> {
//    return el ** idx + arr.length;
// }
// console.log(forEach([1,2,3,4,5], callFunc));

//Reduce is a function. It needs 4 parameter, callback iska 4 parameter lega
function myReduce(arr, callback, initValue, thisArg){
    let accToBe, startIdx;
    if(initValue !== undefined){
        if(!arr.length) return initValue
        accToBe = initValue
        startIdx = 0
    }
    if(initValue === undefined && !arr.length) return new Error('Cannot run reduce with initValue')
    if(initValue === undefined && arr.length){
        accToBe = arr[0]
        startIdx = 1
    }
    for(let i = startIdx; i < arr.length; i += 1){
        accToBe = callback(accToBe, arr[i], i, arr)
    }
    return accToBe
}
function logic(acc, el, idx, arr){
    return acc+el
}
console.log(myReduce([], logic, false))