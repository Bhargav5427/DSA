let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let position = 9;
let element = 25;
let temp = 0;

for (let i = arr.length; i >= position; i--) {
    if (i == position) {
        temp = arr[i];
        arr[i] = element;
    }
}
arr[arr.length] = temp;

console.log(arr);