describe ('Checkboxes', () => {

    beforeEach(function () {
        cy.visit('/')
    })

    it('Checkboxes Test', () => {
        cy.visit('checkboxes')
        .get('h3').should('have.text', 'Checkboxes')
        .get('input[type="checkbox"]').check().should('be.checked')
        .get('input[type="checkbox"]').uncheck().should('not.be.checked')
    })
})