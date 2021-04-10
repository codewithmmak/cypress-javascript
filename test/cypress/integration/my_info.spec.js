import login_details from '../fixtures/login_details.json';
import my_info from '../fixtures/my_info.json';

describe('My Info Tests', function () {

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

    it('As a logged in user I should be able to view Personal Details on My Info tab', function () {
        cy.get('#menu_pim_viewMyDetails').should('be.visible').click()
        .get('h1:contains(Personal Details)').should('have.text', 'Personal Details')
        .get('#personal_txtEmpFirstName').should('have.value', my_info.PersonalDetails.FirstName)
        .get('#personal_txtEmpLastName').should('have.value', my_info.PersonalDetails.LastName)
        .get('#personal_txtEmployeeId').should('have.value', my_info.PersonalDetails.EmployeeId)
        .get('#personal_cmbMarital').should('have.value', my_info.PersonalDetails.MaritalStatus)
        .get('#personal_DOB').should('have.value', my_info.PersonalDetails.DateOfBirth)
    })

    it('As a logged in user I should be able to view Contact Details on My Info tab', function () {
        cy.get('#menu_pim_viewMyDetails').should('be.visible').click()
        .get('a:contains(Contact Details)').should('be.visible').click()
        .get('h1:contains(Contact Details)').should('have.text', 'Contact Details')
        .get('#contact_emp_work_telephone').should('have.value', my_info.ContactDetails.WorkTelephone)
        .get('#contact_emp_work_email').should('have.value', my_info.ContactDetails.WorkEmail)
    })
})