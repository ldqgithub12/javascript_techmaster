const quizes = [
  {
    id: 1,
    question: "1 + 1 = ?",
    answers: [1, 2, 3, 4],
  },
  {
    id: 2,
    question: "2 + 2 = ?",
    answers: [2, 3, 4, 5],
  },
  {
    id: 3,
    question: "3 + 3 = ?",
    answers: [3, 4, 5, 6],
  },
];

const btnEl = document.getElementById("btn");
const divEl = document.querySelector(".quiz-container");
const itemEl = document.querySelector(".quiz-item");

let randomAnser = ()=>{

}
btnEl.addEventListener("click",()=>{
  randomAnser();
})
const renderPage = (arr) => {
  divEl.innerHTML = "";
  let html = "";
  arr.forEach((element) => {
    html += `
            <div class = "quiz-item">
            <h3>Câu ${element.id} : ${element.question}</h3>
            <div class="quiz-answer-item">
              <input type="radio" name="${element.id}">
              <label>${element.answers[0]}</label>
            </div>
            <div class="quiz-answer-item">
              <input type="radio" name="${element.id}">
              <label>${element.answers[1]}</label>
            </div>
            <div class="quiz-answer-item">
              <input type="radio" name="${element.id}">
              <label>${element.answers[2]}</label>
            </div>
            <div class="quiz-answer-item">
              <input type="radio" name="${element.id}">
              <label>${element.answers[3]}</label>
            </div>
            </div>
            `;
  });
  divEl.innerHTML = html;
};
renderPage(quizes);
