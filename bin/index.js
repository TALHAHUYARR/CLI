#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.redBright.bgYellowBright("Welcome to MY CALCULATOR"));
let input1 = await inquirer.prompt([{
        name: "number1",
        type: "number",
        message: "Enter first value:"
    }
]);
let input2 = await inquirer.prompt([{
        name: "number2",
        type: "number",
        message: "Enter second value:"
    }
]);
let operation = await inquirer.prompt([{
        name: "operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "enter operation,"
    }
]);
let result = 0;
switch (operation.operator) {
    case "Addition":
        result = input1.number1 + input2.number2;
        break;
    case "Subtraction":
        result = input1.number1 - input2.number2;
        break;
    case "Multiplication":
        result = input1.number1 * input2.number2;
        break;
    case "Division":
        result = input1.number1 / input2.number2;
        break;
    default:
        break;
}
console.log(chalk.blue("Your answer is " + result));
