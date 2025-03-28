export default {

    accessCadastroUsuario() {

        cy.visit('/')
            .get('.fa-lock')
            .should('be.visible')

        cy.get('.fa-lock')
            .click()
    },

    accessLogin() {

        cy.visit('/')
            .get('.fa-user')
            .should('be.visible')

        cy.get('.fa-user')
            .click()
    }
}