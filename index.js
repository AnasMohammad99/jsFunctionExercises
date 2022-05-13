// 1. Please write a function that shows the usage of closures
const outer = () => {
  let outerExmaple = "hello from outer function";
  const inner = () => {
    console.log(outerExmaple);
    return;
  };
  inner();
  return;
};
// outer();

/*------------------------------------------------------*/

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

const sumOfArray = (arr = []) => arr.reduce((a, c) => a + c, 0);
// console.log(sumOfArray([9, 1, 22, 0, 2]))

/*------------------------------------------------------*/

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

let flatedArray = [];
const flattenList = (arr = []) => {
  arr.map((item) => {
    Array.isArray(item) ? flattenList(item) : flatedArray.push(item);
  });
  return flatedArray;
};
// console.log(flattenList([[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5]));

/*------------------------------------------------------*/

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const duplicateElementsArray = (arr1 = [], arr2 = []) => {
  let dupicatedElements = [];
  arr1.map(
    (element) => arr2.includes(element) && dupicatedElements.push(element)
  );
  return dupicatedElements;
};
// console.log(
//   duplicateElementsArray(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"])
// );

/*------------------------------------------------------*/

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const uniqueElementsArray = (arr1 = [], arr2 = []) => {
  let uniqueElements = [];
  arr1.map(
    (element) => !arr2.includes(element) && uniqueElements.push(element)
  );
  arr2.map(
    (element) => !arr1.includes(element) && uniqueElements.push(element)
  );
  return uniqueElements;
};
// console.log(
//   uniqueElementsArray(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"])
// );

/*------------------------------------------------------*/

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

twoDimArray = (arr1 = [], arr2 = []) => {
  resultArr = [];
  arr1.length >= arr2.length
    ? (arr1.length = arr2.length)
    : (arr2.length = arr1.length);
  for (let i = 0; i < arr1.length; i++) {
    resultArr.push([arr1[i], arr2[i]]);
  }
  return;
};
// console.log(twoDimArray([1, 2, 3], [4, 5, 6, 7]));

/*------------------------------------------------------*/

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

/*------------------------------------------------------*/

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const objectEqulality = (obj1 = {}, obj2 = {}) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
// console.log(objectEqulality({ a: "c", c: "d" }, { c: "d", a: "b" }));

/*------------------------------------------------------*/

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

removeObjectProperty = (removedProperties = [], obj = {}) => {
  removedProperties.map((property) => {
    delete obj[property];
  });
  return obj;
};
// console.log(
//   removeObjectProperty(["color", "size"], {
//     color: "Blue",
//     id: "22",
//     size: "xl",
//   })
// );
