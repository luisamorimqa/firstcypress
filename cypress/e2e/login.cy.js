import { faker } from '@faker-js/faker'
import home_page from '../support/pages/home_page'
import login_page from '../support/pages/login_page'

describe('Login', () => {

    const user = { 
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    beforeEach(() => {
        home_page.accessLogin()
    })

    it('Login sem informar email', () => {
        login_page.fillPassword(user.password)
        login_page.clickLogin()
        login_page.checkErrorMessage('E-mail inválido.')
    })

    it('Login sem informar senha', () => {
        login_page.fillEmail(user.email)
        login_page.clickLogin()
        login_page.checkErrorMessage('Senha inválida.')
    })

    it('Login sem informar email e senha'   , () => {
        login_page.clickLogin()
        login_page.checkErrorMessage('E-mail inválido.')
    })

    it('Login informando email inválido', () => {
        login_page.fillEmail('email.com')
        login_page.fillPassword(user.password)
        login_page.clickLogin()
        login_page.checkErrorMessage('E-mail inválido.')
    })

    it('Login informando senha inválida', () => {
        login_page.fillEmail(user.email)
        login_page.fillPassword('123')
        login_page.clickLogin()
        login_page.checkErrorMessage('Senha inválida.')
    })

    it('Login informando email e senha inválidos', () => {
        login_page.fillEmail('email.com')
        login_page.fillPassword('123')
        login_page.clickLogin()
        login_page.checkErrorMessage('E-mail inválido.')
    })

    it('Login com sucesso', () => {
        login_page.fillEmail(user.email)
        login_page.fillPassword(user.password)
        login_page.clickLogin()
        login_page.checkSuccessMessage(user.email)
    })
})