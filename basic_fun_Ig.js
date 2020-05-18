
//print odds 1-20
for(var i=1; i<=20; i++){
    if(i%2==1)

    console.log(i)
}

//sum and print
var x=0;
for(var i=1; i<=5;i++){
    
    x=x+i;
    console.log(i);
    console.log(x);
}

//print value and sum
var testArr = [6,3,5,1,2,4];
    var sum =0;

for(var i = 0; i < testArr.length; i++){
    

console.log(testArr[i],sum);
}

// value * position
var testArr = [6,3,5,1,2,4];
    newArr =0;
    
for(var i = 0; i < testArr.length; i++){

    newArr = testArr[i]*i;
    
console.log(newArr)
}

// Get 1 to 255 
function numArr(){
    var arr = [];
    for(var i = 1; i <= 255; i++)
    arr.push(i);
    
    return arr; 
}
 

// Get even 1 - 1000
function evenNum(){
    var sum = 0;
    for(var i = 1; i <= 1000; i++){
        if(i % 2 == 0){
            sum += i;
        } 
    }
    return sum;
}


// Sum odd 5000
function sum_odd_Num(){
    var sum = 0;
    for(var i = 0; i <= 5000; i++){
        if(i %2 == 1){
            sum += i;
            console.log(i);
        }
    }
    return sum;
} 

// Iterate an array [1,3,5]=9
function iterat(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

// Find Max [3,5,7,19,-2] max is 19
 function maxArr(arr){
     var max = arr[0];
     for(var i = 0; i < arr.length; i++){
         if(max < arr[i]){
             max = arr[i];
         }
     }
     return max;
 }
 //var results = maxArr();
 //console.log(resupts)



// Find Avg [1,3,5,7,20] = 7.2
 function findAvg(arr){
     var sum = 0;
     for(var i = 0; i < arr.length; i++){
         sum = sum + arr[i];
     }
     return sum/arr.length;
 }

// Array odd 1-50 [1,3,5,7,9...49]
function oddArr(){
    var odd = [];
    for(var i = 1; i <= 50; i++){ //for(var i = 1, i < 50; i+=2)
        if(i %2 == 1) // or (i %2! == 0)
        odd.push(i);
    }
    return odd;
}

// Greater than Y : if arr = [1,3,5,7] and Y = 3 / will return [5,7]
function greaterY(arr,y){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]>Y){
            count++; // count+1
        }
    }
    return count;
}

// Squares - sub value by squared itself [1,5,10-2] -- [1,25,100,4]
function squareVal(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*arr[i];
    }
}

// Negatives -- replace negatives by 0
function zeroForNeg(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

// Max / Min / Avg  -- retur MAX/MIN/AVE withing the array [1,3,19,-2] -- [ 10, -2, 3.5]
function MaxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
        for(var i = 0; i < arr.length; i++){
            sum += arr[i];
            if(arr[i] > max){
                max = arr[i];
            }
            else if(arr[i]< min){
                min = arr[i];
            }
        }
       var finalArr = []; 
       finalArr.push(max);
       finalArr.push(min);
       var avg = sum/arr.length;
       finalArr.push(avg);

    
       return finalArr;
}

// Swap Values  / Swap the first and last numbers of the array [1,5,10,-2] -- [-2,5,10,1]
function swapVal(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;

return arr;


// Number to String / Function to take away a negative number within the array and replaces it with a string 'Dojo'
function addString(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}


// notes


//print odds 1-20
for(var i=1; i<=20; i++){
    if(i%2==1)

    console.log(i)
}

//sum and print
var x=0;
for(var i=1; i<=5;i++){
    
    x=x+i;
    console.log(i);
    console.log(x);
}

//print value and sum
var testArr = [6,3,5,1,2,4];
    var sum =0;

for(var i = 0; i < testArr.length; i++){
    

console.log(testArr[i],sum);
}

// value * position
var testArr = [6,3,5,1,2,4];
    newArr =0;
    
for(var i = 0; i < testArr.length; i++){

    newArr = testArr[i]*i;

}
    
console.log(newArr);
}