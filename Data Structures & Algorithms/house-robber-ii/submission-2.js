class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        if(nums.length==1) return nums[0];

        var arr1 = nums.slice(0, nums.length-1);
        var arr2 = nums.slice(1, nums.length);

        const operation = (arr) => {
            arr.push(0);
            for (var i = arr.length-4; i>=0; i--){
                arr[i] = arr[i] + Math.max(arr[i+2], arr[i+3]);
            }
        }
        operation(arr1); operation(arr2);

        return Math.max(
            Math.max(arr1[0], arr1[1]), 
            Math.max(arr2[0], arr2[1])
        );
    }
}
