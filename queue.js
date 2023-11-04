
let queue = [];
let currentSize= queue.length;
let maxSize = 3;



function enqueue(val){

   if (currentSize>=maxSize) {
      console.warn("queue already full")
   }else{
      queue[currentSize]=val;
      currentSize++;
   }
     
}

function dequeue(){
   if (currentSize>0) {
      for (let i = 0; i < queue.length; i++) {
         queue[i]=queue[i+1];
      }
      currentSize--;
      queue.length=currentSize;
   }else{
      console.warn("queue empty");
   }
   
}



function display(){
   console.warn(queue);
}

enqueue(10);
enqueue(32);
enqueue(30);

display();


dequeue();
display();