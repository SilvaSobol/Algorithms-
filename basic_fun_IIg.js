//Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function numToString(arr){
   
    for(var i=0; i< arr.length; i++){
        if(arr[i]>0)
        arr[i]='big';

    }return arr;
    
}

numToString([-1,3,5,-5])

//Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function highLow(arr){
    var high = arr[0];
    var low = arr[0];

    for(var i=0; i<=arr.length; i++){
        if(arr[i]< low){
            low = arr[i];
        }else if (arr[i] > high){
            high = arr[i];
        }

  //  }console.log(low);
     return high;
}
 //console.log(highLow([50,3,50,28,14]));

//Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function print1Return2(arr){
    console.log(arr[arr.length-2]);
    for(var i=0; i<arr.length; i++){
        if(arr[i] %2==1){
            return arr[i];
        }
    }
}
//console.log(print1Return2([4,6,2,7,3,8,4,8,7]));

//Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function timesSameNum(arr){
    var newArr = [];

    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2);
    }
    return newArr;
}
console.log(timesSameNum([3,9,12,44]));
}

//Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function lastnumPosit(arr){
    var numPosit = 0;

    for(var i=0; i < arr.length; i++){
        if(arr[i] > 0){
            numPosit++;
        }
    }
        arr[arr.length-1]=numPosit; // overwrites last num in array!
        return arr;
}
console.log(lastnumPosit([-2,4,3,8,-8,5]));

//Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function threeIn(arr){
    var odd = 0;
    var even = 0;

    for(var i=0; i < arr.length; i++){
        if(arr[i] %2==1 ){
            odd++;
            even = 0;
        }else{
            even++;
            odd=0;
        }   if (odd == 3){
            console.log("That's odd!");
            odd = 0; //why do we need this?????
        }else if(even == 3){
            console.log("That's even!");
            even = 0;
        }   
    }
}
console.log(threeIn([4,2,6,5,3,3,3,1,5]))


//Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.


// I CANT MAKE THIS WORK!!!!
function incrementSec(arr){

    for (var i=1; i<arr.length; i+=2){
        arr[i] = arr[i]+1;
    }
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }

    return arr;
}
console.log(incrementSec([1,2,3,4,5]))

//Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

// THis one is Great! 
 
function PreviouseLength(arr){
    for(var i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}
console.log(PreviouseLength(['dojo','hello','me']))


//Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function myArr(arr){
    
    var plusSeven = [];

    for(var i = 0; i < arr.length; i++){
        plusSeven.push(arr[i]+7);
    }
    return plusSeven;
}
console.log(myArr([1,1,1,1]))


//Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function backwards(arr){
   
    for(var i = 0; i <=arr.length; i++){
        var temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.lenght-1-i] = temp;
    }
    return arr;
}

console.log(backwards([1,2,3,4]));


//Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlook(arr){
    var negsArr = [];

    for (var i = 0; i < arr.length; i++){
        if(arr[i]>0){
            arr[i] = arr[i] * -1;
        }
        negsArr.push(arr[i]);
    }       
 
    return negsArr;
}
 console.log(outlook([-3,5,2,3,-1]))




//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once. if food ==> yummy, 

function HungerGame(arr){
    var food = false; // hmmmmm

    for(var i=0; i < arr.length; i++){
    if(arr[i] === 'food'){
        console.log('Yummy');
        food = true;
        }
    }
        if(food == false){
            console.log("I'm Hungry!");
        }
    }
HungerGame([1,2,3,4,"hi",'low']);

//Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function ScoopIn(arr){

    for(var i=0; i<arr.length/2; i+=2){
     var temp = arr[i];
     arr[i]= arr[arr.length-1-i];
     arr[arr.length-1-i] = temp;
    }
    return arr;
}

console.log(ScoopIn([1,2,3,4,5]));

//Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9])

function lastOne(arr, num){
    //var timesNum = [];

    for(var i=0; i< arr.length; i++){
        arr[i] = arr[i]*num;
        //timesNum.push(arr[i]);

    }
   return arr;
}
console.log(lastOne([1,2,3,4], 2))