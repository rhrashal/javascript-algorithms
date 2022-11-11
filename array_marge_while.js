let data1 = [2,5,9,12];
let data2 = [3,4,7,13];
let data3 = [];
let n1=0;
let n2=0;
let n3=0;

while (n1<data1.length && n2<data2.length) {
   if (data1[n1]<data2[n2]) {
      data3[n3]=data1[n1];
      n1++;
   }else{
      data3[n3]=data2[n2];
      n2++;
   }
   n3++;
}

while (n1<data1.length) {
   data3[n3]=data1[n1];
   n1++;
}
while (n2<data2.length) {
   data3[n3]=data2[n2];
   n2++;
}


console.log(data3);


