// let arr = [5, 3, 2, 7, 1, 9];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);


// let arr = [5, 3, 2, 7, 1, 9];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);

let arr = [1, 2, 3, 12, 5];
let input = 15;
let temp = 0, temp_2 = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (input == arr[i] + arr[j]) {
            temp = i;
            temp_2 = j;
        }
    }
}
console.log(temp, temp_2);