const prize = document.getElementById('prize');
const show = document.getElementById('show');

show.addEventListener("click", ()=>{
    console.log("click");
    prize.innerHTML = `
    <h2>Vis denne til broren din!</h2>
    <img src="./assets/prize.svg"/>
    `;
});