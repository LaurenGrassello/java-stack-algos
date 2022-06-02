// //merge sort
// //given two sorted array, combine them and return one sorted array

const sortedA1 = []
const sortedB1 = []
//expected output: []

const sortedA2 = [5]
const sortedB2 = [2]
//expected output: [2,5]

const sortedA3 = [3]
const sortedB3 = [2, 3, 4, 7]
//expected output: [2, 3, 3, 4, 7]

const sortedA4 = [1, 2, 4, 6, 9]
const sortedB4 = [3, 7, 8, 10, 11, 12]

function mergeSort(arr1, arr2){
    let newArr = []
    let runnerA = 0
    let runnerB = 0

    while(runnerA < arr1.length && runnerB < arr2.length){
        if(arr1[runnerA] < arr2[runnerB]){
            newArr.push(arr1[runnerA])
            runnerA++
        }else{
            newArr.push(arr2[runnerB])
            runnerB++
        }
    }
    while(runnerA < arr1.length){
        newArr.push(arr1[runnerA])
        runnerA++
    }
    while(runnerB < arr2.length){
        newArr.push(arr2[runnerB])
        runnerB++
    }
    return newArr
}
console.log(mergeSort(sortedA4, sortedB4))
console.log(mergeSort(sortedA3, sortedB3))
console.log(mergeSort(sortedA2, sortedB2))
console.log(mergeSort(sortedA1, sortedB1))