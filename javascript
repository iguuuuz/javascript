<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cálculo de Média de Notas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 300px;
            margin: 100px auto;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
        }

        label {
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: 8px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #218838;
        }

        #resultado {
            margin-top: 20px;
            font-size: 1.2em;
            text-align: center;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Cálculo de Média de Notas</h1>
        <form id="form">
            <label for="nota1">Nota 1:</label>
            <input type="number" id="nota1" placeholder="Digite a primeira nota" required><br><br>

            <label for="nota2">Nota 2:</label>
            <input type="number" id="nota2" placeholder="Digite a segunda nota" required><br><br>

            <label for="nota3">Nota 3:</label>
            <input type="number" id="nota3" placeholder="Digite a terceira nota" required><br><br>

            <label for="nota4">Nota 4:</label>
            <input type="number" id="nota4" placeholder="Digite a quarta nota" required><br><br>

            <button type="button" onclick="calcularMedia()">Calcular Média</button>
        </form>
        <p id="resultado"></p>
    </div>

    <script>
        function calcularMedia() {
            const nota1 = parseFloat(document.getElementById("nota1").value);
            const nota2 = parseFloat(document.getElementById("nota2").value);
            const nota3 = parseFloat(document.getElementById("nota3").value);
            const nota4 = parseFloat(document.getElementById("nota4").value);

            if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(nota4)) {
                const media = (nota1 + nota2 + nota3 + nota4) / 4;
                document.getElementById("resultado").innerHTML = `A média das notas é: ${media.toFixed(2)}`;
            } else {
                document.getElementById("resultado").innerHTML = "Por favor, insira todas as notas.";
            }
        }
    </script>
</body>
</html>
