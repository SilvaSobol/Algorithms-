// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ?in-place? means that you cannot use a second array ? move values within the array that you are given. As always, do not use built-in array functions such as splice(). 2,3,4,5,6 to be 6,5,4,3,2,

function Reverse(arr){
    half = arr.length/2;

    for(var i = 0; i < half; i++ ){
       var temp = arr[i];
       arr[i] = arr[arr.length -1 -i];
       arr[arr.length-1-i] = temp;
    }
    return arr;
}

console.log(Reverse([1,2,3,4]));


//traversing through a singly linked list SLL
contains(val){
    var runner = this.head;
    while(runner) {
        if (runner.value == val) {
            return true;
        }
        runner = runner.next;//+1 its like the next node  
    }
    return false;




}

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr?s values to the right by that amount. ?Wrap-around? any values that shift off array?s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don?t use built-in functions.

function rotate(arr, shiftBy){
   

    if (shiftBy > 0){
        let temp = arr[arr.length - 1];
        for(let i = arr.length -1; i>= 0; i--){
            arr[i] = arr[i-1];
        }
        arr[0] = temp;
       
    }
    shiftBy--;
    return arr;
}



// alternative to reverse entire array first and then split into sub-arrays and reverse them. 
function rotate(arr, shiftBy){
    const n = arr.length;

    shiftBy %= n;

    reverse(arr, 0, n -1);
    reverse(arr, 0, shiftBy -1);
    reverse(arr, shiftBy, n -1);

    return arr;
};

function reverse( arr, start, end){
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

console.log(rotate([1,2,3,4,5,6,7], 3));


// Second: allow negative shiftBy (shift L, not R).

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

// Fourth: minimize the touches of each element.

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function FilterRange(arr, min, max){
    let num = 0;
    let position = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= min && arr[i] <= max) {
            arr[position] = arr[i];
            num++;
            position++;
        }
    }   
    
    num = arr.length - num;
    for (let i =0; i <= num -1; i++){
        arr.pop()
    }

    return arr;
}

console.log(FilterRange([33,4,22,5,6,77,81,42,55,11,5,3,20], 20, 55));


// Concat
// Replicate JavaScript?s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array?s elements, followed by the second array?s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function Combine(arr,arr1){


    var a = arr.length;
    var b = arr1.length;
     
    for(var i = 0; i < b; i++){
        arr[a+i] = arr1[i]
    }
    return arr;
}

console.log(Combine([1,2,3],[4,5,6]))

