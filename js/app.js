// --------------------------------------
// construktr function qanday yoziladi

// function Cars(name, year, color) {
//   this.name = name;
//   this.year = color;
//   this.color = color;
// }

// let bmw = new Cars("bmw", 2020, "black");

// console.log(bmw);
// ---------------------------------------

// function evechscor(arr) {
//     let sum = 0
//     arr.forEach(element => {
//         sum += element.score;
//     });

//     let count = arr.length

// }const students = [
//     { name: 'aloice',}
// ]

// ------------
// let fruits = ["olma", "giloz", "anor", "anjir", "banan", "olma"];

// let result = [];

// fruits.forEach(function (value, indexforuach) {
//   let isExist = fruits.find(function (el, indexFind) {
//     return el == value && indexFind != indexforuach;
//   });
//   if (!isExist) {
//     result.push(value);
//   }
// });
// console.log();

//

// const greet = document.getElementById("h1");
// console.log(greet);

// const test = document.getElementsByClassName("test");
// console.log(test);

// const Bytegs = document.getElementsByTagName("p");
// console.log(Bytegs);

// const a = document.querySelectorAll(".test");
// console.log(a);

// let h1 = document.getElementById("h1");
// let img = document.querySelector("img");

// img.setAttribute("alt", "Bu yerda tabiat rasmi bor edi");
// console.log(img);

// let p = document.querySelector("#h1");
// p.innerHTML = "Nizomiddin";
// console.log(p.innerHTML);
// console.log(p.textContent);

const card = document.querySelector("#box1");
const card2 = document.querySelector("#box2");
const card3 = document.querySelector("#box3");
const button = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");

const checbox = document.querySelector("#checkbox");
const body = document.querySelector("#body");

checbox.addEventListener("click", function () {
  body.style.backgroundColor = "#f0ffff";
});

button.addEventListener("click", function () {
  card.style.backgroundColor = "red";
});

button2.addEventListener("click", function () {
  card2.style.backgroundColor = "#FCFF00";
});

button3.addEventListener("click", function () {
  card3.style.backgroundColor = "#49C628";
});
// Masalalar---------------------------------------------
const students = [
  { isim: "ali", yosh: 23, baholar: [90, 80, 85] },
  { isim: "john", yosh: 22, baholar: [85, 87, 90] },
  { isim: "salim", yosh: 21, baholar: [88, 92, 84] },
];

function YaxshitStudent(students) {
  return students.reduce(
    (Yaxshi, student) => {
      const avg =
        student.baholar.reduce((a, b) => a + b) / student.baholar.length;
      return avg > Yaxshi.avg ? { isim: student.isim, avg } : Yaxshi;
    },
    { isim: "", avg: 0 }
  ).isim;
}
console.log(YaxshitStudent(students));
