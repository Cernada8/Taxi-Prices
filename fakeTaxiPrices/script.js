const form = document.getElementById("userForm");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Para que no haga lo predeterminado

    const distance = document.getElementById("distance").value;
    const time = document.getElementById("time").value;

    let finalPrice = ((distance*2) / 10) + ((time *2) * 0.184);

    const result = document.getElementById("result");
    if(isNaN(result)){
        result.innerHTML = `<h3>Eso no es un numero notas</h3>`;

    }
    else{
    result.innerHTML = `<h3>${finalPrice.toFixed(2)} €</h3>`;
    }
});