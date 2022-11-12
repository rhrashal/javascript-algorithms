

//Direct & Indirect Recursion Example

//Indirect Recursion 
function apple(x){
   console.log(x+" apple");
   if (x<10) {
      banana(x+1);
   }
 
}
function banana(x){
   console.log(x+" banana");
   if (x<10) {
      apple(x+1);
   }
}
apple(0);



//js defaullt function
//
//console.log(data);