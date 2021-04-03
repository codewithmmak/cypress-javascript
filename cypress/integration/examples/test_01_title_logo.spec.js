describe('My First Cypress Test', () => {

    beforeEach(function() {
        cy.visit('/')
    })

    it('Verify Page Title and Logo', () => {
        cy.title().should('eq', 'My Store')
        .get('img[class="logo img-responsive"]').should('be.visible')
    })

})