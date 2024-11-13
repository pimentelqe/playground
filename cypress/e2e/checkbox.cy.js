describe('checkbox', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()// commands que substitui os passos de login abaixo
        //cy.login('papito@cyskills.com.br', 'showtime')
        //cy.userLoggedIn()
        cy.goTo('/checkbox', 'Checkbox')

    })

    it('Deve marcar as linguagens que usam nodeJS', () => {

        /* 
            // opçoes para acesser um elemento quando esta indisponivel por estilização

            cy.get('input[value=1]')
            .click({force:true})
            
            cy.get('input[value=1]')
            .parent()
            .click()
       */

        cy.get('label[for ="javascript"]')
            .click()

        cy.get('label[for ="typescript"]')
            .click()

    })

    it('Deve marcar todas as opçoes', () => {

        const langs = ['javascript', 'python','rust','go','typescript']
        langs.forEach(lang => {
            cy.get(`label[for = ${lang}]`)
            .click()
        })

        
    })

})

