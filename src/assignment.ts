// 1. Functions and Default Parameters

// Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3.

function repeateString(str: string, num: number = 3) {
    for (let i = 0; i < num; i++) {
        console.log(str);
    }
}

repeateString('Moshiur Rahman')

// 2. Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18,

type PersonType = {
    name: string,
    age: number
}

function getYoung(persons: PersonType[]): PersonType[] {
    const youngGuy = persons.filter(person => person.age >= 18)
    return youngGuy
}

const persons: PersonType[] = [
    {
        name: 'Moshiur',
        age: 27
    },
    {
        name: 'Mahim',
        age: 17
    },
    {
        name: 'Mishu',
        age: 20
    },
    {
        name: 'Nahid',
        age: 28
    },
    {
        name: 'Nirob',
        age: 16
    },
];

console.log(getYoung(persons))

//3. Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.

const reverseArr = <T>(arryelements: Array<T>): T[] => {
    const reversedArray = arryelements.reverse();
    return reversedArray
}

const arrayOfStrings = ['nahid', 'Moshiur', 'Sayma', 'Hafiz'];

console.log(reverseArr<string>(arrayOfStrings));

// 4. Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

// Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.

class Person {
    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    getDetails(): string {
        return `${this.name} age is ${this.age}`
    }
}

class Student extends Person{
    private grade: string

    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade
    }

    getGrade(){
        return `${this.grade} is the grade`
    }
}

const studentInfo = new Student('Moshiur Rahman', 27, 'A+');
const info =studentInfo.getDetails();
console.log(info);

// 5. Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

const guardFunction =(param: unknown) =>{
    if(typeof param === 'string'){
        console.log(param);
    }
    else{
        const error = new Error('It is not a string type')
        console.error(error)
    }
}

guardFunction(89);