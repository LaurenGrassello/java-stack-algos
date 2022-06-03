//quick sort
//choose any number from the array to be the pivot
//move the nums smaller than the pivot on the left
//move the nums greater than the pivot to the right
//return the pivot index


const nums1 = [11, 3, 14, 10, 8, 6, 2, 7]
const nums2 = [11, 8, 14, 13, 3, 6, 2, 7]
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27]
const nums4 = [2, 1]

function partition(nums, left = 0, right = nums.length - 1){
    let pivot = nums[Math.floor(left + right / 2)]
    while(left <= right){
        while(nums[left] < pivot){
            left++
        }
        while(nums[right] > pivot){
            right--
        }
        if(left <= right){
            let temp = nums[left]
            nums[left] =  nums[right]
            nums[right] = temp
            left++
            right--
        }
    }
    return left
}

console.log(partition(nums1))
console.log(partition(nums2))
console.log(partition(nums3))
console.log(partition(nums4))


function quickSort(nums = [], left = 0, right = nums.length - 1){
    if (left < right){
        const pivotIndex = partition(nums, left, right)
        quickSort(nums, left, pivotIndex)
        quickSort(nums, pivotIndex + 1, right)
    }
    return nums
}

console.log(quickSort(nums1))
console.log(quickSort(nums2))
console.log(quickSort(nums3))
console.log(quickSort(nums4))