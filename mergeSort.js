/// utility function to merge two sorted arrays
const merge = (arr1, arr2) => {
    let sorted = [];

    while (arr1.length && arr2.length) {
        // if item from arr1 is smaller then add into sorted array and remove it 
        if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
        // else push item from arr2 into sorted array and remove it
        else sorted.push(arr2.shift());
    };
    // then we concatenate the larger item onto the end of the sorted array
    return sorted.concat(arr1.slice().concat(arr2.slice()));
}

// recursive function to cut arr in half
const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));

    return merge(left, right);

}

const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
console.log(mergeSort(unsortedArr));