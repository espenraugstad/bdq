const QUESTIONS = [
    {
        id: "123",
        question: "I hvilket spill må man bygge ting av blokker og passe seg for eksploderende \"creepers\"?",
        options: [
            "The Legend of Zelda: Breath of the Wild",
            "Minecraft",
            "Super Mario 3D World",
            "Fortnite"
        ],
        answerIndex: 1
    }
];

const qno = document.getElementById('qno');
const question = document.getElementById('question');
const options = document.getElementById('options');
const answer = document.getElementById('answer');
let currentQuestion = null;
let currentIndex = 0;

function displayQuestion(index){
    qno.innerText = index + 1;
    currentQuestion = QUESTIONS[index];
    question.innerText = currentQuestion.question;
    for(let option of currentQuestion.options){
        let opt = document.createElement("div");
        opt.classList.add("opt")
        opt.innerHTML = `
        <input type="radio" name="questionOption">
        <label>${option}</label>
        `;
        options.appendChild(opt);
    }
}

displayQuestion(currentIndex);

answer.addEventListener("click", ()=>{
    console.log("click");
    let allOptions = Array.from(document.querySelectorAll("input"));
    let selectedIndex = allOptions.findIndex(el => el.checked);
    if(selectedIndex < 0){
        alert("Du må velge et svar!!!!");
    } else {
        if(currentQuestion){
            if(currentQuestion.answerIndex === selectedIndex){
                alert("Riktig");
            } else {
                alert("Feil");
            }
        }
    }
    
});