const elements = {
    fields: {
        email: '#user',
        password: '#password'
    },
    buttons: {
        login: '#btnLogin'
    },
    messages: {
        error: '.invalid_input',
        successLogin: '.swal2-title',        
        hello: '.swal2-html-container'
    }
}

export default {

    fillEmail(email) { 
        cy.get(elements.fields.email)
            .should('be.visible')
            .type(email)
    },

    fillPassword(password) {
        cy.get(elements.fields.password)
            .should('be.visible')
            .type(password)
    },

    clickLogin() {
        cy.get(elements.buttons.login)
            .should('be.enabled')
            .click()
    },

    checkErrorMessage(message) {
        cy.get(elements.messages.error)
            .should('be.visible')
            .and('have.text', message)
    },

    checkSuccessMessage(email) {
        cy.get(elements.messages.successLogin)
            .should('be.visible')
            .and('have.text', 'Login realizado')

        cy.get(elements.messages.hello)
            .should('be.visible')
            .and('have.text', `Olá, ${email}`)
    }
}