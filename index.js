/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num < 2){
        return num;
    }

    let left = 2;
    let right = Math.floor(num/2);
    
    while(left <= right){
        mid = Math.floor((left+right)/2)
        product = mid * mid

        if(product == num){
            return true;
        } else if(product > num){
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    return false;
};
