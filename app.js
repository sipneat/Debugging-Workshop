let arr = [1, 2, 3, 4, 5];

let a = sumNums();
let b = fibonacci(a);
console.log(b);

function sumNums() {
    let count = 0;
    for (let i = 0; i <= arr.length; i++) {
        //! i < arr.length
        count += arr[i];
    }

    //! return count
}

function fibonacci(count) {
    let a = 1;
    let b = 0;
    let temp;

    while (count >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        temp--; //! count--
    }
    return b;
}
