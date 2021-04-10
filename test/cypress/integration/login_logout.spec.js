describe ('Login and Logout Test', function () {

    beforeEach(function () {
        cy.visit('/')
        cy.fixture('login_details').then(function (login_details) {
            this.login_details = login_details
        })
    })

    it('Verify as Admin user I am able to Log into OrangeCRM with valid credentials', function () {
        cy.get('#logInPanelHeading').should('have.text', this.login_details.panelName)
        .get('#txtUsername')
        .type(this.login_details.username).should('have.value', this.login_details.username)
        .get('#txtPassword')
        .type(this.login_details.password).should('have.value', this.login_details.password)
        .get('#btnLogin').should('be.visible').click()
        .get('#menu_dashboard_index').should('be.visible')
    })

    it('Verify as Admin user I am able to Log out of OrangeCRM', function () {
        cy.get('#logInPanelHeading').should('have.text', this.login_details.panelName)
        .get('#txtUsername')
        .type(this.login_details.username).should('have.value', this.login_details.username)
        .get('#txtPassword')
        .type(this.login_details.password).should('have.value', this.login_details.password)
        .get('#btnLogin').should('be.visible').click()
        .get('#menu_dashboard_index').should('be.visible')
        .get('a[id="welcome"]').should('be.visible').click()
        .get('a:contains(Logout)').should('be.visible').click()
        .get('#logInPanelHeading').should('have.text', this.login_details.panelName)
    })
})