// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

//Viết hàm trải đều các phần tử có trong mảng

 function flatten(arr) {
    // viết code ở đây.
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }
  
  var arrays = [
        ["1", "2", "3"],
        [true],
        [4, 5, 6]
      ];

console.log(flatten(arrays));
//   Trc dấu ? Là điều kiện 

// Sau dấu ? Là nếu đk đúng

// Sau dấu : là điều kiện sai