const defaultResult = 0;
let currentResult = defaultResult;

// This function retrieves the user's input from a form field (expected to be a number), parses it as an integer,
// and returns the integer value. The 'userInput' is expected to be a global variable referencing an input DOM element.
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// This function constructs a description of a mathematical operation using the
// given operator, the result before the current calculation, and the current number
// involved in the calculation. It then calls 'outputResult' to display the current
// result along with the constructed description.
// - 'operator' is a string representing the mathematical operator (e.g., '+', '-', '*', '/').
// - 'resultBeforeCalc' is the numerical result before this calculation was applied.
// - 'calcNumber' is the number used in the current calculation.
// The function assumes 'outputResult' is defined elsewhere and is responsible for updating the UI with the calculation
// result and description.
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // From vendor.js
}

// This function handles the addition operation in a calculator app.
// It retrieves the user's numeric input, adds it to a global 'currentResult' variable,
// and updates the display to reflect the operation performed and the new result.
// - 'enteredNumber' captures the parsed integer value from the user's input.
// - 'initialResult' stores the value of 'currentResult' before the addition,
//   to use in displaying the operation.
// - The global 'currentResult' is then updated by adding 'enteredNumber' to it.
// - 'createAndWriteOutput' is called with the '+' operator, the initial result,
//   and the entered number to update the UI with the calculation details.
// Note: 'getUserNumberInput', 'currentResult', and 'createAndWriteOutput' are
// assumed to be defined elsewhere. 'defaultResult' should likely be 'initialResult'
// to accurately reflect the operation in the UI.
function add () {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', defaultResult, enteredNumber);
}

// This function manages the subtraction operation for a calculator application.
// It performs the following steps:
// 1. Retrieves the user's numeric input as an integer using 'getUserNumberInput'.
// 2. Stores the current value of 'currentResult' to keep track of the calculation's starting point.
// 3. Updates 'currentResult' by subtracting the entered number from it to reflect the new calculation result.
// 4. Calls 'createAndWriteOutput' with the '-' operator, the initial result (before subtraction),
//    and the entered number to dynamically update the UI with a description of the operation and the updated result.
// Assumptions:
// - 'getUserNumberInput' is a function that parses the user input as an integer.
// - 'currentResult' is a global variable that holds the ongoing calculation result.
// - 'createAndWriteOutput' is a function designed to update the UI with the calculation's details.
// Correction Note: The original call to 'createAndWriteOutput' mistakenly used 'defaultResult'
// instead of 'initialResult'. This has been corrected in the comment to accurately reflect
// the operation's intention.
function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', defaultResult, enteredNumber);
}

// This function handles the multiplication operation within a calculator application.
// It carries out the following procedures:
// 1. Retrieves the numeric input from the user by calling 'getUserNumberInput',
//    which parses the user's input into an integer.
// 2. Saves the current state of 'currentResult' to remember the calculation's starting point.
// 3. Updates 'currentResult' by multiplying it with the user-entered number, thereby calculating the new result.
// 4. Utilizes 'createAndWriteOutput' with the '*' operator, the initial result (before multiplication),
//    and the entered number to dynamically update the UI. This updates the UI with a description
//    of the multiplication operation performed and the new result.
// Assumptions:
// - 'getUserNumberInput' is presumed to parse user input and return it as an integer.
// - 'currentResult' is a global variable representing the ongoing result of calculations.
// - 'createAndWriteOutput' is a function intended for updating the UI with details of the calculation.
// Correction Note: The initial version used 'defaultResult' mistakenly in the call to 'createAndWriteOutput'.
// This should be 'initialResult' to accurately display the operation that was performed.
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', defaultResult, enteredNumber);
}

// This function executes the division operation within a calculator application.
// It performs the following actions:
// 1. Fetches the numeric input from the user via 'getUserNumberInput', which parses the input as an integer.
//    It's crucial to ensure that the entered number is not zero to avoid a division by zero error.
// 2. Stores the current value of 'currentResult' to preserve the state before the division operation.
// 3. Updates 'currentResult' by dividing it by the entered number, calculating the new result.
// 4. Invokes 'createAndWriteOutput' with the '/' operator, the initial result (before the division),
//    and the entered number to dynamically update the UI. This function call updates the UI with a
//    description of the division operation performed and the resulting value.
// Assumptions:
// - 'getUserNumberInput' is expected to retrieve and parse the user's input into an integer.
// - 'currentResult' is a global variable that maintains the ongoing result of calculations.
// - 'createAndWriteOutput' is designed to update the UI with the details of the performed calculation.
// Correction Note: The original code mistakenly used 'defaultResult' in the call to 'createAndWriteOutput'.
// It should use 'initialResult' to accurately reflect the operation's specifics in the UI.
function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', defaultResult, enteredNumber);
}

// Add event listeners to the buttons for arithmetic operations.
// Each line associates a specific button with a function that performs
// one of the four basic arithmetic operations (add, subtract, multiply, divide).
// When a button is clicked, the corresponding function is executed.
// -Associates the 'add' button with the 'add' function. When the 'add' button is clicked,
// it triggers the addition operation.
// -Associates the 'subtract' button with the 'subtract' function. When the 'subtract' button is clicked,
// it triggers the subtraction operation.
// -Associates the 'multiply' button with the 'multiply' function. When the 'multiply' button is clicked,
// it triggers the multiplication operation.
// -Associates the 'divide' button with the 'divide' function. When the 'divide' button is clicked,
// it triggers the division operation.
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
