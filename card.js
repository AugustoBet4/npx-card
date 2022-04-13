import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";
/* const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open"); */

// clear the terminal before showing the npx card
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                // Use chalk to style headers
                name: `Toss an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:augusto.bet4@gmail.com");
                    console.log("\nDone, waiting to see you at inbox!\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Hasta la vista!!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                     Augusto Lopez"),
    handle: chalk.white("@augustobet4"),
    fact: chalk.hex('#B10000')('I love Open-Source!'),
    twitter: chalk.hex('#00A1D9')("https://twitter.com/AugustoBet4"),
    github: chalk.hex('#787878')("https://github.com/AugustoBet4"),
    dev: chalk.hex('#330093')("https://dev.to/AugustoBet4 (soon)"),
    dribbble: chalk.hex('#AB009C')("https://dribbble.com/AugustoBet4 (soon)"),
    website: chalk.hex('#00AB9E')("https://augustobet4.github.io (soon)"),
    npx: chalk.hex('#A1AB00')("npx augustobet4"),

    labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
    labelTwitter: chalk.hex('#629DFF').bold("        Twitter:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelDev: chalk.hex('#A959FF').bold("           Dev:"),
    labelDribbble: chalk.hex('#F259FF').bold("       Dribbble:"),
    labelWebsite: chalk.hex('#59FFC8').bold("        Website:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelDev}  ${data.dev}`,
        `${data.labelDribbble}  ${data.dribbble}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Augusto, I'm a Backend developer " 
        )}`,
        `${chalk.bold("from Bolivia, and I have a passion for development")}`,
        `${chalk.bold("and problem solving.")}`,
        `${chalk.bold("Toss me an email if you want to collab or just talk!")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

// Show the boxen
console.log(me);

const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());