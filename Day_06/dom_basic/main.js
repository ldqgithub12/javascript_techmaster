const quizes = [
    {
      id: 1,
      question: "1 + 1 = ?",
      answers: [1, 2, 3, 4]
    },
    {
      id: 2,
      question: "2 + 2 = ?",
      answers: [2, 3, 4, 5]
    },
    {
      id: 3,
      question: "3 + 3 = ?",
      answers: [3, 4, 5, 6]
    }
  ];
  
  const btn = document.getElementById("btn");
  const divEl = document.querySelector(".quiz-container")
  const itemEl = document.querySelector(".quiz-item")
  const renderPage = arr =>{
    divEl.innerHTML="";
    if(arr.length === 0){
        listEl.insertAdjacentHTML("beforebegin",`<li>Danh sách trống</li>`)
        return;
    }
    else{
        let html = "";
        arr.forEach(element => {
            html+=`
            <div class = "quiz-item">
            <h3>Câu ${element.id} : ${element.question}</h3>
            </div>
            `
        });
        divEl.innerHTML = html;
    }
 
}
renderPage(quizes)