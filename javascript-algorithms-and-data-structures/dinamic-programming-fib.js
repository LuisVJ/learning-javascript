function fib(n, memo=[]) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}

// we are remembering previous values of fib, so we don't have to recalculate them.

console.log(fib(100));


// tabulated version
function fibt(n) {
    if (n <= 2) return 1;
    let fibNums = [0,1,1];
    for (let i = 3; i <=n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

console.log(fibt(100));