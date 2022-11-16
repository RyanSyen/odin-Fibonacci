const fibsRec = (n) => {
    if (n < 2) return n;
    return fibsRec(n - 1) + fibsRec(n - 2);
}
console.log(fibsRec(3));