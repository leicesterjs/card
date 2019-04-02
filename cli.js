#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");
const rightPad = require("right-pad");

const output = `${chalk.bold.redBright("LeicesterJS")}
GraphQL and Serverless!

${chalk.bold.redBright("Talks")}
Overview of GraphQL - Girish Patel
Supercharged Serverless - Josh Ghent

${chalk.bold.redBright("When")}
Thursday April 18th 2019, 19:00 to 20:30

${chalk.bold.redBright("Where")}
CloudCall, 1 Colton Square, LE1 1QH, Leicester

${rightPad("Twitter:", 9)} https://www.twitter.com/leicesterjs
${rightPad("Meetup:", 9)} https://www.meetup.com/leicesterjs/events/259899948
${rightPad("Slack:", 9)} https://bit.ly/leicesterjs-slack`;

// console.log(output);

console.log(
  boxen(output, {
    borderStyle: "round",
    padding: 1
  })
);
