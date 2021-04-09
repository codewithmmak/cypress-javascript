describe ('File Upload', () => {

    beforeEach (function(){
        cy.visit('/')
    })

    it ('File Upload Test', () => {

        let filePath = "test-data/Sample_Upload_File.txt";
        
        cy.visit('upload')
        .get('h3').should('have.text', 'File Uploader')
        .get('input[type="file"]').should('be.visible')
        .attachFile(filePath)
        .get('#file-submit').should('be.visible').click()
        .get('#uploaded-files').contains('Sample_Upload_File.txt')
    })

})