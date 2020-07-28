// PUSH FRONT Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

// var arr = [1,2,3,4];
//     i = arr.length;
// while (i-- > 0)
//     arr[i + 1] = arr[i];
//     arr[0] = 0;

//     console.log(arr);


// POP FRONT Given an array, remove and return the value at the beginning of the array. POP FRONT

// var arr = [2,3,4,5];
// arr.shift()
// console.log(arr)

// function popFront(arr) {
//     let temp = arr[arr.length-1];
//     arr[arr.length-1] = arr[0];
//     arr[0] = temp;
//     return arr.pop();
// }

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
// function insertAt(array,index,value)
// {
//     newArr = []

//     for(var i = 0; i<=index; i++){
//         if(i == index)
//         {
//             newArr.push(value)
//         }
//         else
//         {
//             newArr.push(array[i])
//         }
//     }

//     for(var i=newArr.length-1; i<array.length-1; i++)
//     {
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// console.log(insertAt([1,2,3,4,5], 3, "Hello"))

// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

// function removeAt(arr,index){
//     newArr =[];

//     for(var i = 0; i <arr.length; i++)
//     {
//         if (i == index){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// console.log(removeAt([33,22,11,90], 2))

// var arr = [1,2,3,4,5];
// console.log(arr[3]+5)

// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

// function swap(arr){
//     if (arr.length %2 == 0){
//         for(var i = 0; i < arr.length; i+=2){
//             var temp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = temp;
//         }
//     }
//     else
//     {
//         for(var i = 0; i<arr.length-1; i+=2){
//             var temp = arr[i];
//             arr[i]=arr[i+1];
//             arr[i+1]=temp;
//         }
//     }
//     return arr;
// }

// console.log(swap([44,55,66,77,88]))

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

function removeDups(arr){
    var newArr = [];

    for(var i = 0; i<arr.length; i++){
        if(newArr.indexOf(arr[i]) == -1)
        {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDups([1,2,2,3,4,5,5,5,5]));

// Second: Solve this without using any nested loops.