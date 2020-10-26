const ps = require('prompt-sync')({ sigint: true });
const chalk = require('chalk');
const log = console.log;

log(chalk`{green Welcome to the }{green.bold NQ Framework}{green  module setup!}`);
const name = ps(chalk`{green Your project name: }`);
console.log("you entered " + name);

const fs = require('fs');