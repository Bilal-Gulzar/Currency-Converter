#! /usr/bin/env node

import inquirer from "inquirer";

// currency Converter Cli Application.
let exchangeRate: any = {
                         USD: 1,  // Base Currency 
                         PKR: 277.70,  // Exchange Rate according to 4/6/2024
                         INR: 83.293,
                         Lira: 32.037,
                         MYR: 4.745,
                         GBP: 0.791,
                         AED: 3.672
                     };
     
  let currency = await inquirer.prompt([
    {
      name: "fromCurrency",
      type: "list",
      message: "Enter from Currecny:",
      choices: ["USD","PKR", "INR", "Lira", "MYR", "GBP", "AED"]
    },
    {
      name: "toCurrency",
      type: "list",
      message: "Enter to Currency",
      choices: ["USD", "PKR", "INR", "Lira", "MYR", "GBP", "AED"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Amount"
    }
  ]);
  let fromAmount = exchangeRate[currency.fromCurrency];
  let toAmount =  exchangeRate[currency.toCurrency];
  let convertingAmount = currency.amount;
  let baseAmount =  convertingAmount / fromAmount;
  let convertedAmount = baseAmount * toAmount;
  let formattedNumber = convertedAmount.toLocaleString("en-US");
  console.log(formattedNumber);



