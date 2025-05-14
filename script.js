const calculaIMC = (event) => {
    event.preventDefault(); // Evita que a página recarregue

    let altura = document.imcForm.elements["altura"].value;
    let peso = document.imcForm.elements["peso"].value;

    altura = altura.replace(',', '.');
    peso = peso.replace(',', '.');

    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        alert("Você está abaixo do peso.");
    } else if (imc >= 18.5 && imc < 25) {
        alert("Você está com peso normal.");
    } else if (imc >= 25 && imc < 30) {
        alert("Você está com sobrepeso.");
    } else if (imc >= 30 && imc < 40) {
        alert("Você está com obesidade.");
    } else if (imc >= 40) {
        alert("Você está com obesidade grave.");
    }
};

// Adiciona o listener ao formulário para capturar o evento submit
document.getElementById("id-imcForm").addEventListener("submit", calculaIMC);
