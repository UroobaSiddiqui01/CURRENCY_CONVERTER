#!/usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1.0,
    EUR: 0.87,
    JPY: 151.61,
    GBP: 0.79,
    CHF: 0.9,
    CAD: 1.36,
    AUD: 1.52,
    CNY: 7.23,
    INR: 74.3,
    KRW: 1351.26,
    THB: 36.52,
    HKD: 7.83,
    IDR: 15887.75,
    PKR: 277.78,
    PHP: 56.59,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: [
            "USD",
            "EUR",
            "JPY",
            "GBP",
            "CHF",
            "CAD",
            "AUD",
            "CNY",
            "INR",
            "KRW",
            "THB",
            "HKD",
            "IDR",
            "PKR",
            "PHP",
        ],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: [
            "USD",
            "EUR",
            "JPY",
            "GBP",
            "CHF",
            "CAD",
            "AUD",
            "CNY",
            "INR",
            "KRW",
            "THB",
            "HKD",
            "IDR",
            "PKR",
            "PHP",
        ]
    },
    {
        name: 'amount',
        message: 'Enter your Amount',
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.from]; //exchang rate
let toAmount = currency[user_answer.to]; //exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
