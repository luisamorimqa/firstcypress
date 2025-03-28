import home_page from '../support/pages/home_page'
import cadastro_usuario from '../support/pages/cadastro_usuario_page'

describe('Cadastro de usuário', () => {

    beforeEach(() => {
        home_page.accessCadastroUsuario()
    })

    it('Cadastro de usuário sem informar nome', () => {
        cadastro_usuario.clickRegister()
        cadastro_usuario.checkErrorMessage('O campo nome deve ser prenchido')
    })

    it('Cadastro de usuário sem informar email', () => {

    })

    it('Cadastro de usuário informando email inválido', () => {

    })

    it('Cadastro de usuário sem informar senha', () => {

    })

    it('Cadastro de usuário informando senha inválida', () => {

    })

    it('Cadastro de usuário com sucesso', () => {

    })
})