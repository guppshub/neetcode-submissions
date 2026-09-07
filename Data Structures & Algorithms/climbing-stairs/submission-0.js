class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        if(n<=1) return 1;
        if(n==2) return 2;

        let arr = new Array(n+1).fill(0);

        arr[n-1]=1;
        arr[n-2]=2;

        for (let i=n-3; i>=0; i--){
            arr[i] = arr[i+1]+arr[i+2];
        }

    

        return arr[0];

    }
}
