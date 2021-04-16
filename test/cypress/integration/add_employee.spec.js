/// <reference types = "cypress" />

import login_details from '../fixtures/login_details.json';

var faker = require('faker');
var randomFirstName = faker.name.firstName();
var randomMiddleName = faker.name.middleName();
var randomLastName = faker.name.lastName();

describe ('Add Employee Tests', function () {

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

    it('Verify as a user I can Add Employee', function () {
        cy.get('#menu_pim_viewPimModule').should('be.visible').click()
        .get('#btnAdd').should('be.visible').click()
        .get('h1:contains(Add Employee)').should('have.text', 'Add Employee')
        .get('#firstName').should('be.visible').type(randomFirstName)
        .get('#middleName').should('be.visible').type(randomMiddleName)
        .get('#lastName').should('be.visible').type(randomLastName)

        let filePath = "test-data/Profile_Pic.jpg";

        cy.get('input[type="file"]').should('be.visible')
        .attachFile(filePath)
        .get('#btnSave').should('be.visible').click()
        .get('h1:contains(Personal Details)').should('have.text', 'Personal Details')
        .get('#personal_txtEmpFirstName').should('have.value', randomFirstName)
        .get('#personal_txtEmpMiddleName').should('have.value', randomMiddleName)
        .get('#personal_txtEmpLastName').should('have.value', randomLastName)
    })
})