let question1 = document.querySelector(".ques1");
let question2 = document.querySelector(".ques2");
let question3 = document.querySelector(".ques3");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let p4 = document.querySelector(".p4");
function ques1() {
  question1.classList.remove("active");
  question2.classList.add("active");
}
function ques2() {
  question2.classList.remove("active");
  question3.classList.add("active");
}
function ques3() {
  question3.classList.remove("active");
  p1.classList.add("active");
  setTimeout(() => {
    p1.classList.remove("active");
    p2.classList.add("active");
  }, 1500);
  setTimeout(() => {
    p2.classList.remove("active");
    p3.classList.add("active");
  }, 2500);
  setTimeout(() => {
    p3.classList.remove("active");
    p4.classList.add("active");
  }, 3500);
}
