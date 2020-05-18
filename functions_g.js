function a(x,y){
    var num = [];
    for(var i=0; i<x.length; i++){
        if(x[i] > y)
            num++;
    }
    console.log (num,'numbers have greater value than',y)
}
console.log(a([4,6,44],5));

function a(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;

for(var i = 0; i < arr.length; i++){

    if(arr[i]>max){
        max = arr[i];
    }
    if(arr[i]<min){
      min = arr[i];
      }
      sum = sum +arr[i];
      var avg = sum / arr.length;
      var final =[max,min,avg];
    }
    return final;

    console.log(final);
    //console.log("This is MAX:",max,",this is MIN:",min, ",this is avg:",avg);
}
a([99,2,5,3]);

function a(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
        arr[i] ='Dojo'
    }
}
return arr;
}

console.log(a([3,4,-5.3]));

//analize the array 

function printAverage(x){
    sum = 0;
    for(var i=0; i<x.length; i++){
       sum = sum +x [i];// your code here
       var avg = sum/x.length;
 }
    return avg;
// y = printAverage([1,2,3]);
 //console.log(y); // should log 2
}
 y = printAverage([5,2,8]);
 console.log(y); // should log 5



 function returnOddArray(){
     oddArr=[];
    for(var i=1; i <= 255; i++){
       if(i %2 == 1)
       oddArr = oddArr + i;
    }
    return oddArr;
 }
 y = returnOddArray();
 console.log(y); 

 function returnOddArray(){
    newArr = [];
    for (var i = 1; i <= 255; i+=2){
        newArr.push(i);
    }
    return newArr;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]




 function squareValue(x){
       for(var i=0; i<x.length; i++){
           x[i]=x[i]*x[i];
       }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]