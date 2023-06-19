#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const clear = require("clear");

clear();

const data = {
  name: chalk.bold.green("        SrNightmare09"),
  handle: chalk.white("@srnightmare09"),
  blog: chalk.gray("https://medium.com/") + chalk.whiteBright("@srnightmare09"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("srnightmare09"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~srnightmare09"),
  github: chalk.gray("https://github.com/") + chalk.green("srnightmare09"),
  npx: chalk.red("npx") + " " + chalk.white("srnightmare09"),

  labelBlog: chalk.white.bold("     Medium:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
  [
    `${data.name} / ${data.handle}`,
    ``,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelnpm}  ${data.npm}`,
    `${data.labelGitHub}  ${data.github}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic(
      "A very passionate and self-taught programmer."
    )}`,
    `${chalk.italic("Errors don't stop me from developing my ideas.")}`
  ].join("\n"),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: "single",
    borderColor: "cyan"
  }
);

console.log(me);
const tip = [
  `Tip: ${chalk.greenBright.bold(
    "cmd/ctrl + click"
  )} to visit the links above`,
  '',
].join("\n");
console.log(tip);
