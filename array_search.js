

let array = [2,5,9,12,6,8];

let item = 6;

for (let i = 0; i < array.length; i++) {
    if (array[i]===item) {
        console.log(i);
        break;
    } 
}

//js defaullt function
console.log(array.indexOf(item));


