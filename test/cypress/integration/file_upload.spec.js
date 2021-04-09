const path = require("path");

describe ('File Upload', () => {

    beforeEach (function(){
        cy.visit('/')
    })

    it ('File Upload Test', () => {

        let fileName = "some-file.txt";
        let filePath = path.join(process.cwd(), fileName);

        cy.visit('upload')
        .get('h3').should('have.text', 'File Uploader')
        .get('input[id="file-upload"]').should('be.visible')
        .type('filePath')
    })

})