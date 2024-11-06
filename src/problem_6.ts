{
  /**
   * Problem 6
   * Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
   */
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (
    profile: Profile,
    update: Partial<Profile>
  ): Profile => {
    return {
      ...profile,
      ...update,
    };
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
