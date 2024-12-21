let dt = [12,6,8];
let dt2 = [2,5,9];
let data = [];

for (let i = 0; i < dt.length; i++) {
   data[i]=dt[i];
}

for (let i = 0; i < dt2.length; i++) {
    data[dt.length+i]=dt2[i];
 }


//js defaullt function
data=[...dt,...dt2]


console.log(data);
