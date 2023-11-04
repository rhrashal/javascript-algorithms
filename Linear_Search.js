let data = [20,9,13,45,2,5,10,50];
let find =9;
let position=undefined;
for (let i = 0; i < data.length; i++) {
   if (data[i]==find) {
      position=i;
      break;
   }
   
}

console.log(position);