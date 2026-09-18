/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let a = Math.abs(x);

    let rev = 0;

    while(a>0){
        let rem = a%10;
        rev = (10*rev)+rem;
        a = Math.floor(a/10);
    }
   
   let pow = Math.pow(2,31);

   if(rev < -pow || rev > pow) return 0;
    return x < 0 ? -rev: rev;
};