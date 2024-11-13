describe('select', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()// commands que substitui os passos comentados de login abaixo
        //cy.login('papito@cyskills.com.br', 'showtime')
        //cy.userLoggedIn()
        cy.goTo('/select', 'Select')

    })
    it('Deve selecionar o cypress', () => {
        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select('Cypress')

    });

    it('Deve escolher as linguagens que usa NodeJs', () => {

        const langs = ['JavaScript', 'Java', 'TypeScript']

        cy.get('input[placeholder^="Linguagens de programação"]')
            .click()
        // Problema quando passo java inves de javaScript ele continua marcando Javascript
        langs.forEach(lang => {
            cy.contains('.option-item', new RegExp("^" + lang + "$")) // esse regex faz com que pegue uma massa que começe com Java e termine com Java resolvendo o problema
                .click()

        })
        cy.get('.language-item')
            .should('have.length', langs.length)

    })





})