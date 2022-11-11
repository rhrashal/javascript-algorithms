


let array = [2,5,9,12,6,8];

let position =3;

for (let i = position; i < array.length-1; i++) {
    array[i]=array[i+1]
    
}

array.length = array.length-1;
console.log(array);
//js default function
//array.splice(position,0);
