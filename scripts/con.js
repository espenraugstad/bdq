const prize = document.getElementById('prize');
const show = document.getElementById('show');
const restart = document.getElementById('restart');

show.addEventListener("click", ()=>{
    prize.innerHTML = `
    <h2>Vis denne til broren din!</h2>
    <img src="./assets/prize.svg"/>
    `;

    restart.classList.remove("noshow");
});

restart.onclick = () => location.href="index.html";