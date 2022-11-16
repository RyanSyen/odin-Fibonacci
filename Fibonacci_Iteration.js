const fibs = (num) => {
    let n1 = 0, n2 = 1, nextTerm, arr = [];
    for (let i = 1; i <= num; i++) {
        // console.log(n1);
        arr.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return arr;
}
console.log(fibs(8));