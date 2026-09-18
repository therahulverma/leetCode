/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;

    let a = x;
    let rev = 0;
    while(a>0){
        let rem = a%10;
        rev = (10*rev)+rem;
        a=Math.floor(a/10);
    }

    console.log(rev);
    if(x==rev){
        return true;
    }

    return false;
    
};