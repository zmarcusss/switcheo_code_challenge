//simple iteration method, n=5 , so for loop from 1 to 5, 1+2+3+4+5 = 15.
// time complexity of O(n)
var sum_to_n_a = function(n){
    let total = 0;
    for (let i = 1; i < n+1; i++) {
        total+=i
    }
    return total;
}

// simple recursion, n=5, so recurse, 5,4,3,2,1 and add them up.
// time complexity of O(n).
var sum_to_n_b = function(n) {
    let total = 0;
    if (n===1){
        return 1;
    }
    total += n + sum_to_n_b(n-1);
    return total;
};

//noticed the pair for 1,2,3,4,5 , (1,5) = 6, (2,4) = 6, there is n//2 pairs of (n+1)
//and if n is odd there is an additional Math.Ceil(n/2) for example if n=5, 5/2 = 2.5 , Math.Ceil(2.5) = 3, which is the middle number.
//so sum up the total pair n//2 times and add middle number if its odd, else return the total pair *  n//2.
//most efficient as it has a O(1) for time complexity.
var sum_to_n_c = function(n) {
    let pair = n+1;
    let pairSum = pair* (Math.floor(n/2));
    if (n%2===0){
        return pairSum;
    }
    return pairSum + (Math.ceil(n/2));

};



console.log(sum_to_n_a(11));
console.log(sum_to_n_b(11));
console.log(sum_to_n_c(11));