class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {

        const arr = [...s];

        var ans = "";

        const compare = (left, right) => {
            while(
                left >=0 && 
                right<s.length && 
                arr[left] == arr[right]
            ){
                if(right-left+1 > ans.length){
                    ans = arr.slice(left, right+1).join("");
                }
                left--;
                right++;
            }
        }

        for(var i = 0; i<arr.length; i++){
            compare(i, i);
            compare(i, i+1);
        }

        return ans;
    }

    // failforeven(s){
    //             //  0 1 2 3
    //     // [a b b d]
    //     var arr = [...s]; 
    //     var max_len = 1;
    //     var ans = arr[0];

    //     if(arr.length==2 && arr[0] == arr[1]){
    //         return arr.join("");
    //     }

    //     for(var i=0;i<arr.length;i++){
    //         var left = i; 
    //         var right = i;

    //         // arr.length = 5
    //         while(left>=0 && right<arr.length){
    //             // i = 1
    //             // left = 0
    //             // right = 2
    //             if(arr[left]==arr[right]){
    //                 if(right-left+1>=max_len){
    //                     max_len = right-left+1;
    //                     ans = arr.slice(left, right+1).join("");
    //                 }
    //                 left--;
    //                 right++;
    //                 continue;
    //             }

    //             if(arr[i] == arr[right]){
    //                 if(right-i+1>=max_len){
    //                     max_len = right-i+1;
    //                     ans = arr.slice(i, right+1).join("");
    //                 }
    //                 right++;
    //                 continue;
    //             }

    //             else if(arr[i] == arr[left]){
    //                 if(i-left+1>=max_len){
    //                     max_len = i-left+1;
    //                     ans = arr.slice(left, i+1).join("");
    //                 }
    //                 left--;
    //                 continue
    //             }

    //             break;
    //         }
    //     }

    //     return ans;
    // }

    // bruteForce(s){
    //     s = [...s];

    //     const check_palindrome = (arr) => {
    //         var start = 0;
    //         var end = arr.length-1;

    //         while(start<=end){
    //             if(arr[start]==arr[end]){
    //                 start++; end--;
    //                 continue;
    //             } 
    //             start++; end--;
    //             return false;
    //         }

    //         return true;
    //     }

    //     var max_len = 1, ans = s[0];

    //     for(var i=1; i<=s.length-1; i++){

    //         for(var j = 0; j<=s.length-1; j++){
    //             if (i+j+1>s.length) break;
    //             var sub_str = s.slice(j,i+j+1);

    //             if(check_palindrome(sub_str)){
    //                 if(i>=max_len){
    //                     max_len = i;
    //                     ans = sub_str;
    //                 }
    //             }
    //         }
    //     }

    //     return ans.join("");
    // }
}
