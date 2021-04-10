import login_details from '../fixtures/login_details.json';
import search_keyword from '../fixtures/search_keyword.json';

describe ('Directory Search Tests', function () {

    beforeEach(function () {
        cy.visit('/')

        cy.get('#logInPanelHeading').should('have.text', login_details.panelName)
        .get('#txtUsername')
        .type(login_details.username).should('have.value', login_details.username)
        .get('#txtPassword')
        .type(login_details.password).should('have.value', login_details.password)
        .get('#btnLogin').should('be.visible').click()
        .get('#menu_dashboard_index').should('be.visible')

    })

    it('Verify as a user I can search by Name on Directory page and no matching results are found', function () {
        cy.get('#menu_directory_viewDirectory').should('be.visible').click()
        .get('#searchDirectory_emp_name_empName').should('be.visible').click()
        .type(search_keyword.DirectorySearch.Name)
        .get('#searchBtn').should('be.visible').click()
        .get('div:contains(search_keyword.DirectorySearch.NoRecordFound)').should('have.text', search_keyword.DirectorySearch.NoRecordFound)
    })
})