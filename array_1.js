// # js-array-tasks

// ### 1. Declare an array 
// 1. Declare an array with 5 elements containing fruits
// 2. console log the 3rd index element
// 3. change the value of the 2nd index element to jambura
// 4. console log the final array


const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log('3rd index element:', fruits[3]);
fruits[2] = 'jambura';
console.log('Final array:', fruits);

 

// ### 2. Add or remove elements
// 1. Declare an array of 3 tourist destinations
// 2. Add a new tourist destination to your tourist array
// 3. Add two more to your array
// 4. Remove the last tourist destination you have added
// 5. display the final array as output

const touristDestinations = ['Paris', 'New York', 'Tokyo'];
touristDestinations.push('Sydney');
touristDestinations.push('London', 'Barcelona', 'Dubai');
touristDestinations.pop();
console.log('Final tourist destinations:', touristDestinations);


// ### 3. Checking Array Membership with ‘includes’

// **Instructions:**

// 1. Create an array of books containing different book.

// 2. Use the includes method to check if the array contains a javascript book.

// 3. Print a message to the console indicating whether the element is present in the array or not.


const books = ['The Great Gatsby', '1984', 'To Kill a Mockingbird', 'JavaScript: The Good Parts'];
const hasJavaScriptBook = books.includes('JavaScript: The Good Parts');
if (hasJavaScriptBook) {
    console.log('The array contains a JavaScript book.');
}
else {
    console.log('The array does not contain a JavaScript book.');
}



// ### 4. Checking if it's an Array

// **Instructions:**

// 1. Create different variables, each containing either an array or a non-array value.

// 2. Now use isArray to check if each variable is an array.

// 3. Print a message to the console indicating whether each variable is an array or not.

const values = [
    [1, 2, 3],
    'Hello, World!',
    { name: 'Alice', age: 30 },
    42,
    true,
    null,
    undefined,
    [4, 5, 6],
    ['avi', 'toukir', 'samiul', 'sabbir', 'shamim']
];  

values.forEach((value, index) => {
    if (Array.isArray(value)) {
        console.log(`Value at index ${index} is an array.`);
    } else {
        console.log(`Value at index ${index} is not an array.`);
    }
});

for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}



const arr=[
    [1, 2, 3],
    ['Hello, World!'],
    { name: 'Alice', age: 30 },
    42,
    true,
    null,
    undefined,
    [4, 5, 6],
    ['avi', 'toukir', 'samiul', 'sabbir', 'shamim'],
    'javascript',
    'python',
    'java',
    'c++',
    'c#',
    'ruby',
    'php',
    'swift',
    'kotlin',
    'typescript',
    'go',
    ['html', 'css', 'react', 'angular', 'vue', 'node.js', 'express', 'mongodb', 'mysql', 'postgresql', 'redis', 'docker', 'kubernetes', 'aws', 'azure', 'gcp'],
    'machine learning',
    'artificial intelligence',
    'data science',
    ['deep learning', 'neural networks', 'natural language processing', 'computer vision', 'reinforcement learning', 'unsupervised learning', 'supervised learning', 'semi-supervised learning', 'transfer learning', 'generative adversarial networks', 'convolutional neural networks', 'recurrent neural networks', 'long short-term memory networks', 'transformers', 'attention mechanisms'],
    {name: 'John Doe', age: 30, occupation: 'Software Engineer'},
    ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'Ruby', 'PHP', 'Swift', 'Kotlin', 'TypeScript', 'Go', 'HTML', 'CSS', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Machine Learning', 'Artificial Intelligence', 'Data Science', 'Deep Learning', 'Neural Networks', 'Natural Language Processing', 'Computer Vision', 'Reinforcement Learning', 'Unsupervised Learning', 'Supervised Learning', 'Semi-supervised Learning', 'Transfer Learning', 'Generative Adversarial Networks', 'Convolutional Neural Networks', 'Recurrent Neural Networks', 'Long Short-Term Memory'],
    ['Transformers', 'Attention Mechanisms']

];

for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
        console.log(`Value at index ${i} is an array:`, arr[i]);
    } else {
        console.log(`Value at index ${i} is not an array:`, arr[i]);
    }
}



//  ### 5. Combining Arrays

// **Instructions:**

// 1. Create two arrays of your choice.
// 2. Use the concat method to combine the two arrays into a new array.
// 3. Print both the original arrays and the combined array using console.log(). 

const array1 = ['apple', 'banana', 'orange'];
const array2 = ['grape', 'kiwi', 'mango'];
const combinedArray = array1.concat(array2);
console.log('Array 1:', array1);
console.log('Array 2:', array2);
console.log('Combined Array:', combinedArray);
console.log('Combined Array Length:', combinedArray.length);
