{
  /**
   *
   * Problem 5
   * Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
   */
  const getProparty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
  };

  // output 1
  const person = { name: "Alice", age: 30 };
  const name = getProparty(person, "name");
  console.log(name);

  // Output 2
  const person2 = { name: "Alice", age: 30 };
  const age = getProparty(person2, "age");
  console.log(age);
}
