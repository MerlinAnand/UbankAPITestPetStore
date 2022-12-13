
Introduction:
This project will be used to automate the petstore API Endpoints

#Getting Started
1. Installation process, including dependencies,
      NodeJS and Npm(most recent LTS version) [download here](https://nodejs.org/en/)
      run from cmdline / terminal in the local repo: 'npm install'

2. Running example test
      from cmd/bash run: 'npm run cypress:open'
      cypress front end will open and you will be able to inspect and run test cases  from there.

Pre-requirements:
install Allure for MacOS e.g. brew install allure or npm install -g allure-commandline --save-dev
install npm i -D @shelex/cypress-allure-plugin


How to run locally and generate allure report:
      - To run - npm test
      - To view the latest report - allure serve

#Cucumber BDD Framework structure
  Features -> All test scenarios data  go here under the respective feature files
  StepDefinition -> All test step implementation go here under the respective steps file
  support -> All support files like cypress commands go here under the respective folder