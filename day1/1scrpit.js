//  a java script varisble is a simple a name of stroage location
// let usear->locatrion = ("bidrohi")<-value
// let userName = ("bidrohi")

//  let secondName = ("my is bidrohi")
// let age = 20
//  userHappy =true
  // let userName = ("bidu")
//  let mon = userName + 'mohapatra' + ` ` + secondName +"i am" +age +'year old'




//constant



// code execution

// console.log( typeof ( typeof firstName))

// var firstName ="bidrohi"
// let lastName ="mohapatra"
// let age =15
// const yearOfBirth =1999

//dilogbox
// alert("are you sure.")
// confirm("your massgae gors hear.")
 const userInput = prompt("your massgae gors hear.")
 console.log (userInput)



// Getting Elements From The DOM
const btns = document.querySelectorAll(".btn");
const body = document.body;
// console.log(btns);

// Iterating over all buttons
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    number = btn.value;
    changeBackground(number);
  });
});

function changeBackground(number) {
  // console.log(number);
  body.className = "";
  const loginForm = document.querySelector(".login-form");
  const signupForm = document.querySelector(".signup-form");
  const loginBtn = document.querySelector(".login button");
  const signupBtn = document.querySelector(".signup button");
  const backLayer = document.querySelector(".back-layer");
  
  signupBtn.addEventListener("click", () => {
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
    backLayer.style.clipPath = "inset(0 0 0 50%)";
  });
  
  loginBtn.addEventListener("click", () => {
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
    backLayer.style.clipPath = "";
  });
  
}
