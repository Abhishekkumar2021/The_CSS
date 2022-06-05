// //printing related
// // console.log("Now I am from app.js file!")
// // console.log(3*4)

// let x = 'cat';
// const y = 12;

// console.log(typeof(x))
// console.log(y);

// // y = 13;
// x = 15;
// console.log(x);

// let z = 3/0;
// console.log(typeof(z))

// // functions

// // first way
// function Moni(){
//     console.log("Hey, I am Moni :)")
//     return 5;
// }

// Moni()

// // second way

// let Tapan = () => {
//     console.log("Hey, I am Tapan :)")
//     return 10;
// }
// Tapan()

// // single line function / lambda functions
// let Tapase = () => 15
// console.log(Tapase())

// let doubleFunction = (anotherFunction) =>{
//     anotherFunction();
// }

// let useLess = ()=>{
//     console.log("I am just printing!")
// }

// doubleFunction(useLess);

// // data structures
// let array = [1,2,3.0234,"Tapan",5,'A',7,8,9];
// console.log(array[8]);
// console.log(array)
// console.log("length = ",array.length)

// array.push(10);
// console.log("length = ",array.length)

// array.pop();
// console.log("length = ",array.length)

// console.log(array.indexOf(21));

// console.log(array.slice(2,array.length));
// console.log(typeof(array))
// // [2, 8]

// // objects
// let student= {
//     name:"Abhijeet",
//     rollNumber:"2001006",
//     age:25
// }

// console.log(student);
// console.log(student.name)

// // loops
// for(let i=0; i<20; i++){
//     console.log(i);
// }

// for(let i=0; i<array.length; i++){
//     console.log(array[i])
// }

// //forOf
// for(let element of array){
//     console.log(element)
// }

// DOM mamipulation

let cont = document.querySelector(".container");
// console.log(cont);
// snake_case
// camelCase

//changing the styles of the container usinh JS
// cont.style.backgroundColor = "red";

// Adding new items in to the container
// let card = document.createElement("div");
// card.style.width = "200px";
// card.style.height = "200px";
// card.style.margin = "10px";
// card.style.backgroundColor = "teal";
// cont.append(card)

// for (let i = 0; i < 21; i++) {
//   let card = document.createElement("div");
//   let h1 = document.createElement("h1");
//   h1.innerText = `${i+1}`
//   card.style.width = "200px";
//   card.style.height = "200px";
//   card.style.margin = "10px";
//   card.classList.add("moni");
//   let red = Math.floor(Math.random() * 266);
//   let green = Math.floor(Math.random() * 266);
//   let blue = Math.floor(Math.random() * 266);
//   // console.log(red,green,blue);
//   card.style.backgroundColor = `rgb(${red},${green},${blue},0.8)`;
//   card.append(h1);
//   cont.append(card);
// }


// Events and event listeners
function onClick(event){
  let card = document.createElement("div");
  card.style.width = "20px";
  card.style.height = "20px";
  card.style.borderRadius = "50%";
  card.style.position = "absolute";
  card.style.left = `${event.x}px`;
  card.style.top = `${event.y}px`;
  let red = Math.floor(Math.random() * 266);
  let green = Math.floor(Math.random() * 266);
  let blue = Math.floor(Math.random() * 266);
  card.style.backgroundColor = `rgb(${red},${green},${blue},0.8)`;
  cont.append(card);
    // alert("You clicked!")
}




// API

let url = "https://icanhazdadjoke.com/";

// console.log(axios);

let getResponseAndAdd = async ()=>{ // now this function can be used to wait somewhere
    let res =  await axios.get(url, {
        headers: { Accept: "application/json" },
    }); // we have to wait here
    // console.log(res.data.joke);
    let h1 = document.createElement("h1");
    h1.innerText = res.data.joke;
    cont.append(h1);
}

cont.addEventListener("click",getResponseAndAdd)
