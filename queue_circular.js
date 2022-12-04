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
      if (this.currentSize!=0) {
        this.item[this.front]=null;
        if (this.front==this.maxSize-1) {
         this.front=0;
        }else{
         this.front++;
        }
        this.currentSize--;
      }else{
         this.front= -1;
         this.rear= -1;
         console.warn("queue empty");
      }
   }

   display(){
      console.warn(this.item);
   }

}
let q1 = new Queue(4);

q1.enqueue(12);
q1.enqueue(13);
q1.enqueue(14);
q1.enqueue(15);
q1.enqueue(16);
q1.display();

q1.dequeue();
q1.dequeue();
q1.display();


q1.enqueue(15);
q1.enqueue(16);
q1.display();
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