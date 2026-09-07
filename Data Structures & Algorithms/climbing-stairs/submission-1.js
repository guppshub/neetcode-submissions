class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        if(n<=1) return 1;
        if(n==2) return 2;

        let a = 1
        let b = 2

        for (let i=n-3; i>=0; i--){
            [a,b]=[b,a+b]
        }

    

        return b;

    }
}
