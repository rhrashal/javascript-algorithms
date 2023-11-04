

// Recursion Example
//1. Direct  Recursion Example
//
// function fnRecursion(x){
//    console.warn(x);
//    if (x<10) {
//       fnRecursion(x+1);
//    }
// }
// fnRecursion(0)
// console.log();



// 2. Indirect Recursion example
// function apple(x){
//    console.log(x+" apple");
//    if (x<10) {
//       banana(x+1);
//    }
 
// }
// function banana(x){
//    console.log(x+" banana");
//    if (x<10) {
//       apple(x+1);
//    }
// }
// apple(0);



// 3. Factorial example

// function factorial(item){
//    if(item==0){
//        return 1
//    }
//   return item*factorial(item-1)

// }
// let data =5
// console.warn(factorial(data))


// console.warn(5*factorial(5-1)*factorial(4-1)*factorial(3-1)*factorial(2-1)*factorial(1-1)


// 4. Head & Tail Recursion
function test(item){
   
   console.warn(item)  // for head 

   if(item>0){
       test(item-1)
   }

   console.warn(item)  // for tail 
 }
let data =5
test(data);


//js defaullt function
//
//console.log(data);
