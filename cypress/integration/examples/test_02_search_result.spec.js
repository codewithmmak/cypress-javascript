describe('My Second Cypress Test', () => { 

    beforeEach(function() {
        cy.visit('/')
    })
    
    it('Verify search result', () => {
        cy.get('#search_query_top').click().should('be.visible')
        .type('Printed Chiffon Dress').should('have.length',1)
        .type('{enter}')
        cy.get('span[class="lighter"]').should('contain', 'Printed Chiffon Dress')
        cy.log('Verified search result shown on the page')
    })
})