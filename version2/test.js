// VERSION 2

/*
1. 
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs

b) Explain in 100 words or less your approach for implementing the library

first downloading chart.js by npm install chart.js --save
append the '<canvas id="myChart" width="400" height="400"></canvas>' to html file.
past the belowed code from documentation to js file.

*/
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
/*
2.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Takes as an argument an array of objects
- Outputs the details of both books into the DOM 
- Creates an unordered list for each book

Use the following array of objects:
*/

function addingBook(bookArr){
  const ul = document.createElement('ul');
  for (let i=0;i<3;i++) {
      let li = document.createElement('li');
      li.innerHTML = `Book Name: ${bookArr[i].bookName}<br>
                      Author: ${bookArr[i].author}<br>
                      Cover: <img src=${bookArr[i].coverURL}>
                      `
      ul.appendChild(li);
  };
  document.body.appendChild(ul);

const books = [
  {
    bookName: 'The Nature of Software Development',
    author: 'Ron Jeffries',
    coverURL:
      'https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png',
  },
  {
    bookName: 'Clean Code',
    author: 'Robert Cecil Martin',
    coverURL:
      'https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg',
  },
  {
    bookName: 'Refactoring',
    author: 'Kent Beck & Martin Fowler',
    coverUrl:
      'https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/0/2/0/9200000005430203.jpg',
  },
];

addingBook(books);

/* 
3. 
Answer the following questions:
- What is an Application Programming Interface (API)? 
- How does this relate to your HackYourRepo project?

Explain each in 200 words or less. 

API is an interface that shows you how to connect other software, which information you can get from there, which action is allowed to do or not allowed. By using these instructions
you can make request and get information. In our HackYourRepo project we made API call from github and get the repositories' information of the HYF.
*/


/*
4.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following URL: https://jsonplaceholder.typicode.com/users
- Make use of async/await syntax
- Displays the "name", "email" and "city" of the first person inside an unordered list
- Makes use of async/await
*/

const URL = "https://jsonplaceholder.typicode.com/users";
async function getInfo() {
    const response =  await fetch(URL);
    const data = response.json()
    return data;
}
getInfo()
.then((data) => {
    console.log(data);
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');

    li1.innerText = `${data.name}`;
    li2.innerText = `${data.email}`;
    li3.innerText = `${data.city}`;

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    document.body.appendChild(ul);
})

/*
5.
a) Create a class, called Animal, that includes:
- A constructor method
- "type", "color", "size" properties
- 1 additional method, called "getType", which returns the type

b) Instantiate the class, and give it the name and attributes of a random animal

c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less
*/

class Animal{
  constructor (type,color,size){
    this.type=type;
    this.color=color;
    this.size=size;
  }
  getType (){
    return this.type
  }
  
}
const dog=new Animal('bulldog', 'brauwn', 'small')

/*
c) In this example we use OOP by creating an object(class). With this object we can store the data and the features of a random animal as in the real world.
Also using objects help us to access this information from the other part of the code, change the features easily and create another animal.
*/

/*
6.
Write a JavaScript function that:
- Accepts a string of 4 words (all lowercase letters) as an argument
- Converts the first letter of each word of the string in upper case.
  
  Example: 'the quick brown fox'
  Expected Output: 'The Quick Brown Fox '
*/

function upperCase(str){
  var array_split = str.split(' ');
  var upperArray = [];
  for (let x=0;x<array_split.length;x++){
      upperArray.push(array_split[x].charAt(0).toUpperCase()+array_split[x].slice(1));
  }
  return upperArray.join(' ');
}
console.log(upperCase('the quick brown fox'))
