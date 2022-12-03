

var data = [2,4,1,0,66,12,90]

var tenp;
function customReverse(data,start,end){
   console.log(data)
   if(start<=end){
      temp=data[start];
      data[start]=data[end];
      data[end]=temp;
      customReverse(data,start+1,end-1);
   }
   
}


customReverse(data,0,data.length-1);
//js defaullt function
data.reverse();
//console.log(data);
