//union and intersection

//intercept
//two pointers
//while loop
//if statement 
//create new array to push the values that intercept

//union
//while loop
//push to new array

//for intersection
const numsA1 = [0, 1, 2, 2, 2, 7]
const numsB1 = [2, 2, 6, 6, 7]
const expected1 = [2, 7] //or at least get 2, 2, 7

const numsA2 = [0, 1, 2, 2, 2, 7]
const numsB2 = [2, 2]
const expected2 = [2] //or at least 2, 2

const numsA3 = [0, 1, 2, 2, 2, 7]
const numsB3 = [10]
const expected3 = []



//given two sorted array in diffrent length, find the nums that intersect and return new array that features nums that appeared in both arrays
function orderedIntersection(sortedA, sortedB){
    let i = 0
    let j = 0
    let newArr = []
    while( i < sortedA.length && j < sortedB.length){
        if(sortedA[i] === sortedB[j]){
            if(!newArr.includes(sortedA[i])){
                newArr.push(sortedA[i])
            }
            i++
            j++
        }else if(sortedA[i] < sortedB[j]){
            i++
        }else if(sortedA[i] > sortedB[j]){
            j++
        }
    }
    return newArr
}
console.log(orderedIntersection(numsA1, numsB1))
console.log(orderedIntersection(numsA2, numsB2))
console.log(orderedIntersection(numsA3, numsB3))



//for union
const numsA4 = [1, 2, 2, 2, 7]
const numsB4 = [2, 2, 6, 6, 7]
const expected4 = [1, 2, 2, 2, 6, 6, 7]

const nums5 = [1, 2, 2, 2, 7, 10, 15, 20]
const numsB5 = [2, 2, 6, 6, 7]
const expected5 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20]

function orderedMultiSetUnion(sortedA, sortedB){
    let i = 0
    let j = 0
    let newArr = []
    while( i < sortedA.length || j < sortedB.length){
        if(sortedA[i] === sortedB[j]){
            newArr.push(sortedA[i])
            i++
            j++
        }
    }
    if(sortedA[i] < sortedB[j] || sortedB[j] === undefined){
        newArr.push(sortedA[i])
        i++
    }
    if(sortedA[i] > sortedB[j] || sortedA[i] === undefined){
        newArr.push(sortedB[j])
        j++
    }
    return newArr
}
console.log(orderedMultiSetUnion(numsA4, numsB4))
console.log(orderedMultiSetUnion(numsA5, numsB5))




