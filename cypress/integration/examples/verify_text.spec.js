describe ('Verify Text', () => {

    beforeEach(function() {
        cy.visit('/')
    })

    it('Verify text on page', () => {

        cy.visit('abtest')
        .get('h3').should('have.text', 'A/B Test Control')
        .get('p').contains('Also known as split testing')
    })
})