"use strict";
{
    const updateProfile = (profile, update) => {
        return Object.assign(Object.assign({}, profile), update);
    };
    //output 1
    const person = { name: "Alice", age: 30, email: "mirfaisal08@gmail.com" };
    const updatedPerson = updateProfile(person, {
        email: "mir.oneyear@gmail.com",
    });
    console.log(updatedPerson);
    // Output 2
    const person2 = { name: "Alice", age: 30, email: "mirfaisal08@gmail.com" };
    const updatedPerson2 = updateProfile(person2, { age: 31 });
    console.log(updatedPerson2);
}
