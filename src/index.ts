// 1. Convert the following JavaScript array into a TypeScript tuple
const userInfo: [number, string, string, boolean, undefined, string] = [101, "Ema", "John", true,  , "2023"];

// 2. Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.
// (For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.)
// (The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.)

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [2, 4, 6, 8];

const getCommonNumber =( arr1: number[] , arr2: number[]): number[] =>{
   arr1.map(sarr1 => {
    arr2.forEach(sarr2 => sarr2=== sarr1)
    return arr2
   })
   return arr1
}

const result = getCommonNumber(firstArray, secondArray)
console.log(result);

// 3. You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

// (Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.)

interface IProduct {
    id: number;
    name: string;
    price: number;
    category: string
}

const getProduct = <T>(products: Array<T>): Array<T> =>{
  const matchedProducts =  products.filter(pdt => pdt.price > 500)
  return matchedProducts
}

const products = [
    {
        id: 1,
        name: 'panku shirt',
        price: 500,
        category: 'shirt'
    },
    {
        id: 2,
        name: 'panku shirt',
        price: 800,
        category: 'shirt'
    },
    {
        id: 3,
        name: 'panku shirt',
        price: 1000,
        category: 'shirt'
    },
    {
        id: 4,
        name: 'panku shirt',
        price: 1500,
        category: 'shirt'
    },
];

const getmetchedProducts = getProduct<IProduct>(products)

// 4. Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

// 5. Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

// 6. Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

// 7. Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

// 8. Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.