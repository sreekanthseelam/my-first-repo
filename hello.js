<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample JavaScript Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to the JavaScript Demo!</h1>

    <p>Click the button to change the background color of this page:</p>
    <button id="colorButton">Change Color</button>

    <h2>Simple Calculator</h2>
    <label for="num1">Number 1: </label>
    <input type="number" id="num1" placeholder="Enter a number"><br><br>
    <label for="num2">Number 2: </label>
    <input type="number" id="num2" placeholder="Enter a number"><br><br>
    <button id="calcButton">Calculate Sum</button>
    
    <p>Sum: <span id="result">0</span></p>

    <script src="script.js"></script>
</body>
</html>
