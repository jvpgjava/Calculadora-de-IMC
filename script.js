document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const imc = weight / (height * height);
    let category;

    if (imc < 18.5) {
        category = 'Abaixo do peso';
    } else if (imc < 24.9) {
        category = 'Peso normal';
    } else if (imc < 29.9) {
        category = 'Sobrepeso';
    } else {
        category = 'Obesidade';
    }

    document.getElementById('imcValue').textContent = `IMC: ${imc.toFixed(2)}`;
    document.getElementById('imcCategory').textContent = `Categoria: ${category}`;
});
