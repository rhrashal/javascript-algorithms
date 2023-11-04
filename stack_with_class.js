
class Stack{

   item =[];
   currentSize;
   maxSize;



   
   constructor(size){
      //console.warn("Call")
      this.maxSize=size;
      this.currentSize = this.item.length;
   }
   push(val){
      if (this.currentSize>=this.maxSize) {
         console.warn("Stack already full")
      }else{
         this.item[this.currentSize]=val;
         this.currentSize++;
      }
   }
   pop(){
      if (this.currentSize>0) {
         this.currentSize--;
         this.item.length=this.currentSize;
      }else{
         console.warn("Stack Empty")
      }
   }
   display(){
      console.warn(this.item)
   }
}

st1= new Stack(5);
st1.push(20);
st1.push(21);
st1.push(22);
st1.display();
st1.pop();
st1.display();
