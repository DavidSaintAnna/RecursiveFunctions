function factorial(x) {
    if ((x === 0) || (x === 1)) {
        return 1;
    }
    return x * factorial(x - 1);
}

console.log(factorial(7))

// Segunda Questão

function showArray(arr, n) { // Sem variável fora do escopo da função
    if (n < arr.length) {
        console.log(arr[n])
        n = n + 1
        return showArray(arr, n);
    }
    return false;
}
showArray([2, 3, 4], 0)





let x = 0;

function showArray(arr) { // Com variável fora do escopo da função
    if (arr.length > x) {
        console.log(arr[x]);
        x = x + 1;
        return showArray(arr);
    }
    return false;
}
showArray([2, 3, 6])