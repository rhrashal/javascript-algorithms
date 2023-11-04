let data = [20,21,23,45,76,90,98];
let find =90;
let start =0;
let end = data.length-1;
let position=undefined;




//Recursive approach
function recoursiveBinary(data,start,end){
   let mid=Math.floor((start+end)/2);
   //console.log(mid);
   if (data[mid]===find) {
      position=mid;
      return;
   }else if (data[mid]<find) {
      start=mid+1;
      recoursiveBinary(data,start,end)
   }else{
      end=mid-1;
      recoursiveBinary(data,start,end)
   }
}

recoursiveBinary(data,start,end);


//Iterative approach

// while (start<=end) {
//    let mid=Math.floor((start+end)/2);
//    //console.log(mid);
//    if (data[mid]===find) {
//       position=mid;
//       break;
//    }else if (data[mid]<find) {
//       start=mid+1;
//    }else{
//       end=mid-1;
//    }

// }

console.log(position);