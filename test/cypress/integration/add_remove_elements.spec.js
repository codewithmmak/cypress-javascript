describe ('Add and Remove elements', () => {

    beforeEach(function() {
        cy.visit('/')
    })

    it('Add and Remove elements Test', () => {
        cy.visit('add_remove_elements/')
        .get('h3').should('have.text', 'Add/Remove Elements')
        .get('button[onclick="addElement()"]').should('have.text', 'Add Element').click()
        .get('button[onclick="deleteElement()"]').should('have.text', 'Delete').click()
        .get('button[onclick="deleteElement()"]').should('not.exist')

    })
})