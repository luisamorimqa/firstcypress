import { faker } from '@faker-js/faker'
import home_page from '../support/pages/home_page'
import cadastro_usuario from '../support/pages/cadastro_usuario_page'

const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}

describe('Cadastro de usuário', () => {

    beforeEach(() => {
        home_page.accessCadastroUsuario()
    })

    it('Cadastro de usuário sem informar nome', () => {
        cadastro_usuario.clickRegister()
        cadastro_usuario.checkErrorMessage('O campo nome deve ser prenchido')
    })

    it('Cadastro de usuário sem informar email', () => {
        cadastro_usuario.fillName(user.name)
        cadastro_usuario.fillPassword(user.password)
        cadastro_usuario.clickRegister()
        cadastro_usuario.checkErrorMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Cadastro de usuário informando email inválido', () => {
        cadastro_usuario.fillName(user.name)
        cadastro_usuario.fillEmail('email.com')
        cadastro_usuario.fillPassword(user.password)
        cadastro_usuario.clickRegister()
        cadastro_usuario.checkErrorMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Cadastro de usuário sem informar senha', () => {
        cadastro_usuario.fillName(user.name)
        cadastro_usuario.fillEmail(user.email)
        cadastro_usuario.clickRegister()
        cadastro_usuario.checkErrorMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro de usuário informando senha inválida', () => {
        cadastro_usuario.fillName(user.name)
        cadastro_usuario.fillEmail(user.email)
        cadastro_usuario.fillPassword('123')
        cadastro_usuario.clickRegister()
        cadastro_usuario.checkErrorMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro de usuário com sucesso', () => {
        cadastro_usuario.fillName(user.name)
        cadastro_usuario.fillEmail(user.email)
        cadastro_usuario.fillPassword(user.password)
        cadastro_usuario.clickRegister()
        cadastro_usuario.checkSuccessMessage(user.name)
    })
})