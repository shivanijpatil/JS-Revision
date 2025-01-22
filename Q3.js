// Q: 3
// Array and Object Manipulation
// Task:
// Suppose you have an array of user objects, each with the structure { id, name, age, city }. Write the following functions:

// filterAdults(users): Returns an array of users whose age is 18 or above.
//     mapUserNames(users): Returns an array of names extracted from the user objects.
//         groupUsersByCity(users): Returns an object where each key is a city, and its value is an array of users from that city.
//             Example:

// const users = [
//     { id: 1, name: "Alice", age: 17, city: "New York" },
//     { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
//     { id: 3, name: "Charlie", age: 30, city: "New York" },
//     { id: 4, name: "Diana", age: 22, city: "Chicago" }
// ];

// // filterAdults(users) => [{ id: 2, ... }, { id: 3, ... }, { id: 4, ... }]
// // mapUserNames(users) => ["Alice", "Bob", "Charlie", "Diana"]
// // groupUsersByCity(users) => {
// //   "New York": [{ id: 1, ... }, { id: 3, ... }],
// //   "Los Angeles": [{ id: 2, ... }],
// //   "Chicago": [{ id: 4, ... }]
// // }
// Requirements:

// Each function should be pure(i.e., should not mutate the original array).
// Handle edge cases(e.g., empty arrays).


// Ans:-
const users = [
    { id: 1, name: "Alice", age: 17, city: "New York" },
    { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 30, city: "New York" },
    { id: 4, name: "Diana", age: 22, city: "Chicago" }
];
function filterAdults(users) {
    return users.filter(user => user.age >= 18);
}
function mapUserNames(users) {
    return users.map(user => user.name);
}
function groupUsersByCity(users) {
    return users.reduce((acc, user) => {
        if (!acc[user.city]) {
            acc[user.city] = [];
        }
        acc[user.city].push(user);
        return acc;
    }, {});
}
console.log(filterAdults(users));
console.log(mapUserNames(users));
console.log(groupUsersByCity(users));

