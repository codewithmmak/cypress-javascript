![Cypress and JavaScript](./images/cypress-javascript.png?raw=true "Cypress and JavaScript")

# Cypress and JavaScript Test Automation Examples
This is sample Test Automation framework designed using Cypress and JavaScript. And in this framework we will see some basic working examples for learning.

## Features
* This automation framework is designed using Cypress.
* JavaScript is used as scripting language.
* Reporting is implemented using `mochawesome-report-generator` npm module. This generates the report in html. Also it captures the screenshots.

## To Get Started

### Pre-requisites
* Download and install Chrome or Firefox browser.
* Download and install Node.js
* Download and install any Text Editor like Visual Code/Sublime/Brackets

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

### How to execute Cypress Tests with Cypress Test Runner?
* Open Terminal
* Enter `cypress open`
    * This will open Test Runner window
* Click on `Run all specs` button or double click on any of the spec.
    * This will open a browser instance and run the tests. 
    * As and when you save your tests, it will automatically run the tests. 
    * With this you can watch the result as and when you write line of code.

### How to run all Cypress Tests using Cypress Test Runner using npm command?
* Open Terminal and enter command: `npm test`
* Double click the test you want to run.

### How to run all Cypress Tests using CLI?
* Open Terminal and enter command: `npm run test:cli`

### How to Run Test for single spec
* Open Terminal and enter command: `cypress run --spec 'test/cypress/integration/checkboxes.spec.js'`

### How to Run Test with specific browser
* Open Terminal and enter command: `cypress run --browser chrome`

### How to Run Test with headed browser
* Open Terminal and enter command: `cypress run --headed --browser chrome`

### Console Test Results
![Cypress and JavaScript Test Result](./images/console-test-results.PNG?raw=true "Cypress and JavaScript Console Test Result")

### How to Generate HTML Report
* Open Terminal and enter command: `npm run create:html:report`
* Go to `test-report` folder and you will find the html report

![Cypress and JavaScript Test Result](./images/html-test-report.PNG?raw=true "Cypress and JavaScript HTML Test Report")

### How to Update local npm packages
* Go to Project root directory and run command: `npm update`

## Run tests on LambdaTest

### How to configure test to run on LambdaTest
* Open `lambdatest-config.json`
* Update `lambdatest_auth` node with your `username` and `access_key` which can be found when you log into you LambdaTest `https://accounts.lambdatest.com/login`
* Update `browsers` node with the browser/os name on which you want to run the tests
* Update `run_settings` with 
    - `parallels` number of instances you want to run the tests in parallel
    - `specs` path where you have your specs

### How to Run Test on LambdaTest
* Open Terminal and enter command: `lambdatest-cypress run`

### LambdaTest Results
![Lambda Test Result](./images/lambdatest-test-results.PNG?raw=true "Lambda Test Result")

## Troubleshooting
* Issue 01: If you see error:
    node_modules\.bin\cypress : File D:\CypressAutomation\node_modules\.bin\cypress. cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.

    Solution:
    - Open `Windows PowerShell` as Administrator
    - Enter `Set-ExecutionPolicy RemoteSigned` and hit enter key
    - Type `Y` and hit enter key
## References
* https://www.tutorialspoint.com/questions/category/cypress
