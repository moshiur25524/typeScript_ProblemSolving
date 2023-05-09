// 1. Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

const sumofElements = (numbers: number[]): number | undefined => {
    let sum = 0
    for (const number of numbers) {
        sum += number
    }
    return sum
}

const arrayofNumbers: number[] = [25, 35, 12, 45]

console.log(sumofElements(arrayofNumbers));

// 2. Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

interface IPerson {
    name: string;
    age: number;
    email: string;
    address: string
}

const myPerson: IPerson = {
    name: 'Moshiur',
    age: 27,
    email: 'rmosiur324@gmail.com',
    address: 'savar'
}

console.log(myPerson);

// 3. Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

function calculateArea(length: number, width: number): number{
    return length * width
}

console.log('Area of Rectangle',calculateArea(8,6));

// 4. Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

const reverseArray=<T>(arr:Array<T>): Array<T> =>{
    arr.reverse()
    return arr
}

const EstimateArray = [25, 48, 37, 94, 18]
const myFriends = ['nahid', 'hafiz', 'osman', 'salehin']

console.log(reverseArray<string>(myFriends));

// 5. Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.



// 6. Define a type alias called Coordinates that represents the latitude and longitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it

// 7. Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). Create a function that takes a Color value as input and prints out a corresponding message (e.g., "You selected Red").

// 8. Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions.

// 9. Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

// 10. Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase.

// 11. Declare a variable with an initial value of null and type it as string. Use type assertion to assign a string value to this variable and then print its length.

// 12. Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

// 13. Create a generic function that takes an array of elements and returns the first element of the array. Add a constraint to ensure that the generic type can be compared using the > operator.

// 14. Create a function that takes two parameters: one can be either a string or number, and the other can be either a boolean or an array of strings. Implement logic in the function to perform different operations based on the types of the parameters.

// 15. Create a generic function called filterArray that takes an array of any type and a predicate function as parameters. The function should return a new array that contains only the elements for which the predicate function returns true. Ensure that the function is flexible enough to work with different types of arrays.