let data = [20,21,23,45];
let find =23;
let start =0;
let end = data.length-1;
let position=undefined;

while (start<=end) {
   let mid=Math.floor((start+end)/2);
   //console.log(mid);
   if (data[mid]===find) {
      position=mid;
      break;
   }else if (data[mid]<find) {
      start=mid+1;
   }else{
      end=mid-1;
   }

}

console.log(position);