let user = {
    id: 2,
    name: 'Jhon',
    age: 28,
    address: {
        city: "mumbai",
        state: "mumbai"
    }
};

// Create a new object based on `user` with `id` frozen
let frozenUser = {
    ...user,
    id: Object.freeze(user.id)  // Freeze the `id` property
};

// Now freeze the `frozenUser` object
Object.freeze(frozenUser);
frozenUser.id=4
console.log(frozenUser)