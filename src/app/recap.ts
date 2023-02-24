//Variable
const username: string = 'Camiliño';

//Function
const sum = (a: number, b: number) => {
  return a + b;
}

//Call function
sum(1, 3);

//Class
class Person {
  //Contructor
  constructor(public age: number, public lastName: string) {
  }
}

//Instance the class person
const firstPerson = new Person(3, 'Camiliño');
firstPerson.age;
firstPerson.lastName;
