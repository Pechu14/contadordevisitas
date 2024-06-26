const contadorVisitas = document.getElementById("contadorVisitas")
const botonReset = document.getElementById("btnReestablecer")

let numVisitas = localStorage.getItem("visitas" );
numVisitas++;
localStorage.setItem("visitas", numVisitas)

contadorVisitas.innerHTML = numVisitas

const handleClick = () => {
    localStorage.setItem("visitas", 0)
    contadorVisitas.innerHTML = 0
}
botonReset.addEventListener("click", handleClick);




