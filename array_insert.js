

let array = [2,5,9,12,6,9,8];

let item = 34;
let position =3;

//js default function
//array.splice(position,0,item);

console.log(array);
//alternative of array.splice(position,0,item)
for (let i = array.length-1;i>0; i--) {
   
   if (i>=position) {
     array[i+1]=array[i];
     if (i==position) {
        array[i]=item;
      }  
   }  
   //console.log(array[i]);
}



console.log(array);


