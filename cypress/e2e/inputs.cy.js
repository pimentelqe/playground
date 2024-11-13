describe('input Fields', () => {
    beforeEach(() => {
        cy.goHome()
    })

    it('deve preencher o campo texto', () => {
        cy.visit('https://playground.cyskills.com.br')
        cy.doLogin()// commands que substitui os passos comentados de login abaixo
        //cy.login('papito@cyskills.com.br', 'showtime')
        //cy.userLoggedIn()
        cy.get('nav a[href="/input-fields"]')
            .click()

        cy.contains('h2', 'Input Fields')
            .should('be.visible')

        cy.get('input[placeholder="John Doe"]')
            .type('Fernando Pimentel')

        cy.get('input[name="email"]')
            .type('Fernando@pimentel.dev')

        cy.get('input[name="number"]')
            .type('438')

        cy.get('input[name="date"]')
            .type('2024-12-01')
    })
})