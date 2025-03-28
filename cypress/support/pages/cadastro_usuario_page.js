const elements = {
    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },

    buttons: {
       register: '#btnRegister'
    },

    messages: {
        error: '.errorLabel',
        success: '.swal2-title',
        welcome: '.swal2-html-container'
    }
}

export default {

    fillName(nome) {
        cy.get(elements.fields.name)
            .should('be.visible')
            .type(nome)
    },

    fillEmail(email) {
        cy.get(elements.fields.email)
            .should('be.visible')
            .type(email)
    },

    fillPassword(senha) {
        cy.get(elements.fields.password)
            .should('be.visible')
            .type(senha)
    },

    clickRegister() {
        cy.get(elements.buttons.register)
            .should('be.enabled')
            .click()
    },

    checkErrorMessage(mensagem){
        cy.get(elements.messages.error)
            .should('be.visible')
            .and('have.text', mensagem)
    },

    checkSuccessMessage(nome){
        cy.get(elements.messages.success)
            .should('be.visible')
            .and('have.text', 'Cadastro realizado!')

        cy.get(elements.messages.welcome)
            .should('be.visible')
            .and('have.text', `Bem-vindo ${nome}`)
    }
}