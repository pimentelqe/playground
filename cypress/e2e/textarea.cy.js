describe('textarea', () => {
    beforeEach(() => {
        cy.goHome()
    })

    it('Deve preencher o campo de area de texto', () => {
        cy.doLogin()// commands que substitui os passos comentados de login abaixo
        //cy.login('papito@cyskills.com.br', 'showtime')
        //cy.userLoggedIn()
        cy.goTo('/textarea', 'Textarea')

        cy.get('textarea[name="message"]')
            .type("Boas vindas ao cypress preenchendo o campo com um texto grande ")


    })

})

