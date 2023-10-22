# Sanber50-Cypress-Kelompok2
# Project Akhir Quality Assurance Sanbercode Batch 50 Kelompok 2


## Introduction
This automation is written in JavaScript.
<br/> Technologies used:
<br/> [npm](https://www.npmjs.com/)
<br/> [Cypress](https://www.npmjs.com/package/cypress)
<br/> [Nodejs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
<br/> [Mochawesome](https://www.npmjs.com/package/mochawesome)


## Setup
### Pre-requisites
- Download and install Node.js
- Download and install any Text Editor like Visual Code
- Initilize the project with default settings npm init
- Install dependencies npm install cypress

### Setup Git Repository
- Clone the repository into a folder https://github.com/jhnmrn/Sanber50-Cypress-Kelompok2.git
- Go to Project root directory and install Dependency: npm install
- All the dependencies from package.json would be installed in node_modules folder.

## Run via CLI
- Clone the project
- Open terminal
- Traverse to the project directory
- Run suite $ npx cypress run

## Run via Browser
- Clone the project
- Open terminal
- Traverse to the project directory
- Run suite $ npx cypress open
- Tap on the scenario


# Reporter
The project uses reporter from [Mochawesome](https://www.npmjs.com/package/mochawesome)
- Install mochawesome <br>$ npm install mochawesome
- Tell mocha to use the Mochawesome reporter: <br>npx cypress run --reporter mochawesome