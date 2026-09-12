class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        const arr = Array.from({length: nums.length}).fill(-1);

        const dfs = (position) => {

            if (position > nums.length-1) return 0;

            // if (position >= nums.length-2) {
            //     arr[position] = nums[position];
            //     return nums[position];
            // }

            if(arr[position]!=-1) return arr[position];

            // arr[position] = nums[position] + Math.max(dfs(position+2), dfs(position+3));

            arr[position] = Math.max(
                dfs(position+1),
                nums[position] + dfs(position+2)
            );

            return arr[position];
        }

        // return Math.max(dfs(0), dfs(1));

        return dfs(0);
    }
}
