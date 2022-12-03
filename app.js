class Queue{
   item =[];
   currentSize;
   maxSize;
   constructor(size){
       this.maxSize=size;
       this.item= new Array(size);
       this.currentSize=0;
       this.rear= -1;
       this.front= -1
   }

   enqueue(val){

      if (this.currentSize!=this.maxSize) {
         if (this.rear==this.maxSize-1) {
            this.rear=0;
         }else{
            this.rear++;
         }
   
         this.item[this.rear]=val;
         this.currentSize++;
         if (this.front== -1) {
            this.front=this.rear;
         }

      }else{
         // queue[currentSize]=val;
         // currentSize++;
      }
        
   }

   dequeue(){
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

}
let q1 = new Queue();




// let queue = [];
// let currentSize= queue.length;
// let maxSize = 3;



// function enqueue(val){

//    if (currentSize>=maxSize) {
//       console.warn("queue already full")
//    }else{
//       queue[currentSize]=val;
//       currentSize++;
//    }
     
// }

// function dequeue(){
//    if (currentSize>0) {
//       for (let i = 0; i < queue.length; i++) {
//          queue[i]=queue[i+1];
//       }
//       currentSize--;
//       queue.length=currentSize;
//    }else{
//       console.warn("queue empty");
//    }
   
// }



// function display(){
//    console.warn(queue);
// }

// enqueue(10);
// enqueue(32);
// enqueue(30);

// display();


// dequeue();
// display();