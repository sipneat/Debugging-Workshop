let arr = [1, 2, 3, 4, 5];

let a = sumNums();
let b = fibonacci(a);
console.log(b);

function sumNums() {
    let count = 0;
    for (let i = 0; i <= arr.length; i++) {
        //FIXME: i <= arr.length
        count += arr[i];
    }

    //FIXME: no return
}

function fibonacci(count) {
    let a = 1;
    let b = 0;
    let temp;

    while (count >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        temp--; //FIXME: count--
    }
    return b;
}
