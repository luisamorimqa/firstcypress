export default {

    accessCadastroUsuario() {

        cy.visit('/')
            .get('.fa-lock')
            .should('be.visible')

        cy.get('.fa-lock')
            .click()
    }
}