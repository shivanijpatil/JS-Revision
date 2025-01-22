// 1. Array Flattening
// Task:
// Write a function flattenArray(nestedArray, depth) that takes a nested array(e.g., [[1, 2], 3, [4, [5]]]) and returns a new array with all sub - arrays flattened up to the specified depth.If depth is not provided, the array should be completely flattened.

//     Example:

// flattenArray([1, [2, [3, [4, 5]]]], 2);
// // Expected output: [1, 2, 3, [4, 5]]

// flattenArray([1, [2, [3, [4, 5]]]]);
// // Expected output: [1, 2, 3, 4, 5]
// Requirements:
// Do not use built -in methods like Array.prototype.flat() or similar(if that’s a requirement you want to impose).
// Handle edge cases(e.g., empty arrays, no depth, depth = 0, etc.).


// Ans:-
function flattenArray(nestedArray, depth = Infinity) {
    const result = [];

    function helper(arr, currentDepth) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && currentDepth < depth) {
                helper(arr[i], currentDepth + 1);
            } else {
                result.push(arr[i]);
            }
        }
    }

    helper(nestedArray, 0);
    return result;
}


console.log(flattenArray([1, [2, [3, [4, 5]]]], 2));
console.log(flattenArray([1, [2, [3, [4, 5]]]]));

// 2. Object Flattening
// Task:
// Write a function flattenObject(nestedObject) that takes an object with nested properties and returns a new object with a single level of key - value pairs.Nested keys should use dot notation(e.g., "user.info.name").

//     Example:

// const input = {
//     user: {
//         info: {
//             name: "Alice",
//             age: 25
//         },
//         preferences: {
//             theme: "dark",
//             notifications: true
//         }
//     },
//     status: "active"
// };

// flattenObject(input);
/*
Expected output:
{
  "user.info.name": "Alice",
  "user.info.age": 25,
  "user.preferences.theme": "dark",
  "user.preferences.notifications": true,
  "status": "active"
}
*/
// Requirements:

// Recursively traverse nested objects.
// Return a new object with flattened keys.

// Ans:-
function flattenObject(nestedObject) {
    const result = {};

    function helper(obj, parentKey) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                const newKey = parentKey ? `${parentKey}.${key}` : key;
                if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                    helper(obj[key], newKey);
                } else {
                    result[newKey] = obj[key];
                }
            }
        }
    }

    helper(nestedObject, '');
    return result;
}

const input = {
    user: {
        info: {
            name: "Alice",
            age: 25
        },
        preferences: {
            theme: "dark",
            notifications: true
        }
    },
    status: "active"
};

console.log(flattenObject(input));
/*
Expected output:
{
  "user.info.name": "Alice",
  "user.info.age": 25,
  "user.preferences.theme": "dark",
  "user.preferences.notifications": true,
  "status": "active"
}
*/



