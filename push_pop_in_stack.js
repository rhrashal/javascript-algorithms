

let data = [];
let crrentSize = data.length;
let mx=4;

function push(val){
   if(crrentSize>mx){
      console.log("dat- "+val)
   }else{
      data[crrentSize]=val;
      crrentSize+=1;
   }   
}

function pop(){
   if(crrentSize>0){
      crrentSize-=1;
      data.length=crrentSize;
   }else{
      console.log("dat- "+val)
   }
}



push(5);
push(9);
push(0);
push(3);
push(2);
push(1);

console.log(data);
pop();


console.log(data);
//js defaullt function

//console.log(data);