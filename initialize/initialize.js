const ps = require('prompt-sync')({ sigint: true });
const chalk = require('chalk');
const log = console.log;

log(chalk`{green Welcome to the }{green.bold NQ Framework}{green  module setup!}`);

const fs = require('fs');
const folderNames = process.cwd().split('/');
const defaultName = folderNames && folderNames.length >= 2 ? folderNames[folderNames.length - 2] : 'nq module';
console.log(defaultName);

let inputName = ps(chalk`{green Your project name: (${defaultName}) }`);
const name = inputName || defaultName;

const defaultDescription = "An NQ Framework module project";
let shortDescription = ps(chalk`{green Short description: }`);
const description = shortDescription || defaultDescription;

let pjson = fs.readFileSync('../package.json', 'utf8');
pjson = pjson.replace('"name": "nq-module-template"', `"name": "${name}"`)
pjson = pjson.replace('This is a template repository for adding new NQ framework modules', description);
pjson = pjson.replace('git+https://github.com/nq-framework/nq-local-connector.git', `git+https://github.com/nq-framework/${name}.git`)
fs.writeFileSync('../package.json', pjson, 'utf8');

let readme = fs.readFileSync('../README-template.md', 'utf8');
readme = readme.replaceAll("{{name}}", name).replaceAll("{{description}}", description);
fs.writeFileSync('../README.md', readme, 'utf8');
fs.unlinkSync('../README-template.md');
fs.rmdirSync('../initialize', { recursive: true });