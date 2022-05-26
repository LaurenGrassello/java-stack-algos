//selection sort
// for loop to run through array
//nested for loop to use for comparison
//compare the values in the array 
//store the largest value
//move largest value to end of array


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function selectionSort(nums){
    //set size variable 
    let size = nums.length
    //while loop used to sort array has more than one value
    while (size > 1){
        //set maxVal variable to the lowest possible number
        //this will make sure we can still have negatives in the array and sort them
        let maxVal = Number.MIN_VALUE;
        //set index variable to store the maxVal
        let index;
        //forloop to find largest value in array
        for(let i = 0; i < size; i++){
            //if the number at index i is greater than maxVal, it becomes the new maxVal and we store that index
            if (nums[i] > maxVal){
                maxVal = nums[i]
                index = i
            }
        }
        //when forloop finds largest value we swap that value with whatever value is at the end of the array
        nums[index] = nums[size - 1]
        nums[size - 1] = maxVal;
        //decrement size to exclude the value that have already been sorted <--very important
        size--
    }
    return nums
}
console.log(selectionSort(numsRandomOrder))