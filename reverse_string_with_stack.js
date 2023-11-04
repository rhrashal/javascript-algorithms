

let data = [];
let crrentSize = data.length;


function push(val){
   data[crrentSize]=val;
   crrentSize+=1;
}

function pop(){
   lastRemovedItem=data[crrentSize-1];
   crrentSize-=1;
   data.length=crrentSize;
   return lastRemovedItem;
}


function reverseString(item){
   for (let i = 0; i < item.length; i++) {
      push( item[i])
      
   }
   for (let i = 0; i < item.length; i++) {
      //console.log(pop());
      item[i]=pop();
      
   }
}

let str = "Robiul";
str=str.split("");

reverseString(str);


console.log(str.join(""));



console.log(data);
//js defaullt function

//console.log(data);