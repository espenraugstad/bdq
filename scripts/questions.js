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
    },
    {
        id: "7246",
        question: `Hvem er dette? <br><br><img src="./assets/3294276.png"/> `,
        options: [
            "Mario",
            "Zelda",
            "Bowser",
            "Link"
        ],
        answerIndex: 3  
    },
    {
        id: "9078",
        question: "Hvem er høyest av Mario og Luigi",
        options: [
            "De er like høye",
            "Mario",
            "Luigi",
            "Ingen av de"
        ],
        answerIndex: 2  
    }
];

const qno = document.getElementById('qno');
const question = document.getElementById('question');
const options = document.getElementById('options');
const answer = document.getElementById('answer');
const next = document.getElementById('next');
const nextBtn = document.getElementById('nextBtn');
const wrong = document.getElementById('wrong');
const wrongBtn = document.getElementById('wrongBtn');
const obs = document.getElementById('obs');
const obsBtn = document.getElementById('obsBtn');

let currentQuestion = null;
let currentIndex = 0;

function displayQuestion(index){
    qno.innerText = index + 1;
    currentQuestion = QUESTIONS[index];
    question.innerHTML = currentQuestion.question;
    options.innerHTML = "";
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
    let allOptions = Array.from(document.querySelectorAll("input"));
    let selectedIndex = allOptions.findIndex(el => el.checked);
    if(selectedIndex < 0){
        obs.showModal();
    } else {
        if(currentQuestion){
            if(currentQuestion.answerIndex === selectedIndex){
                // Correct answer
                currentIndex += 1;
                next.showModal();
            } else {
                wrong.showModal();
            }
        }
    } 
});

nextBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    next.close();
    if(currentIndex >= QUESTIONS.length){
        finished();
    } else{
        displayQuestion(currentIndex);
    } 
});

wrongBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    wrong.close();
});

obsBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    obs.close();
});

function finished(){
    console.log("Ferdig");
    location.href = "con.html";
}