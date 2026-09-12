class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        var a = 0, b = 1, c = 1;

        if (n === 0) return a;
        if (n <= 2) return b;

        for (var i = 0; i<=n-3; i++){
            var compute = a + b + c;

            [a, b, c] = [b, c, compute];
        }

        return c;

    }
}
