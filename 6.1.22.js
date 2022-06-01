//insertion sort
//given an array with everything sorted except for the last element
//insert the last element to the right position

const arr1 = [2,4,8,3]
const arr2 = [2,4,8,1]

function insertionSort(arr){
    let newArr = []
    for(let i = 0; i <arr.length; i++){
        newArr.push(arr[i])
        let size = newArr.length
        let j = i
        while(size > 0){
            if(newArr[j] < newArr[j-1]){
                let temp = newArr[j]
                newArr[j] = newArr[j-1]
                newArr[j-1] = temp
                j--
            }
            size--
        }
    }
    return newArr
}
console.log(insertionSort(arr1))
console.log(insertionSort(arr2))