const array = [1,2,3,4,5,6,7,8,9,10];
let position =2;

for (let i = 0; i < array.length; i++) {
    if(i==position)
    {
        array[i]=''
    }
    else
    {
        console.log(array[i]);
    }
}