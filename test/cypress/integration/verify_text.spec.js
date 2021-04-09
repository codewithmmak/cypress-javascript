describe ('Verify Text', () => {

    beforeEach(function() {
        cy.visit('/')
    })

    it('Verify text on page', () => {

        cy.visit('abtest')
        .get('h3').contains('A/B Test')
        .get('p').contains('Also known as split testing')
    })
})