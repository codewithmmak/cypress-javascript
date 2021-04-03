![Cypress and JavaScript](./images/cypress-javascript.png?raw=true "Cypress and JavaScript")

# Cypress and JavaScript Test Automation Examples
This is sample Test Automation framework designed using Cypress and JavaScript. And in this framework we will see some basic working examples for learning.

## Features
* This automation framework is designed using Cypress.
* JavaScript is used as scripting language.
* Reporting is implemented using Cypress npm module. This generates the report in html and json. Also it captures the screenshots.

## Framework Structure
```
├───images                          # This folder contains sample report image
├───page-objects                    # This folder contains page object, page helper and page contants
│   ├───common
│   └───pages
│       ├───common
│       └───super-calculator
├───temp                            # This folder contains JS file which are generated after compiling TypeScript files
├───test-results                    # This folder contains test result (includes html report and screenshots)
└───test-suites                     # This folder contains spec/test files
```

## To Get Started

### Pre-requisites
* Download and install Chrome or Firefox browser.
* Download and install Node.js
* Download and install any Text Editor like Visual Code/Sublime/Brackets

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

### How to write Test
* Add new spec under ./cypress/integration folder
* Name the file as <testname>.spec.js (e.g. test1.spec.js)
* Create folder under page-objects/pages as <page-name> (e.g. super-calculator)
* Under page folder create constant, helper and page object file.
    * <page-name>.constants.ts (e.g. super-calculator.constants.ts)
    * <page-name>.helper.ts (e.g. super-calculator.helper.ts)
    * <page-name>.po.ts (e.g. super-calculator.po.ts)

### How to execute Cypress Tests with Cypress Test Runner?
* Open Terminal
* Enter `cypress open`
    * This will open Test Runner window
* Click on `Run all specs` button or double click on any of the spec
    * This will open a browser instance and run the tests. 
    * As and when you save your tests, it will automatically run the tests. 
    * With this you can watch the result as and when you write line of code

### How to run all Cypress Tests using Cypress CLI?
* Open Terminal and enter command: `npm test`

### How to Run Test for single spec
* Open Terminal and enter command: `npm test --spec "cypress/integration/example/test_search_result.spec.js"`

### How to Run Test with specific browser
* Open Terminal and enter command: `cypress run --browser chrome`

### How to Run Test with headed browser
* Open Terminal and enter command: `cypress run --headed --browser chrome`

### How to Run Test on LambdaTest
* Open Terminal and enter command: `lambdatest-cypress run`

### How to Update local npm packages
* Go to Project root directory and run command: `npm update`

### Sample Test Results
![Cypress and JavaScript Test Result](./images/console-test-results.png?raw=true "Cypress and JavaScript Console Test Result")

### Troubleshoot
* Issue 01: If yo see error:
node_modules\.bin\cypress : File D:\CypressAutomation\node_modules\.bin\cypress. cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.

Solution:
- Open `Windows PowerShell` as Administrator
- Enter `Set-ExecutionPolicy RemoteSigned` and hit enter key
- Type `Y` and hit enter key

### References
* https://docs.cypress.io/guides/guides/command-line#cypress-run
* https://docs.cypress.io/guides/guides/screenshots-and-videos#Screenshots
* https://docs.cypress.io/guides/references/configuration#cypress-json