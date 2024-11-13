describe('date picker', ()=>{
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()// commands que substitui os passos comentados de login abaixo
        //cy.login('papito@cyskills.com.br', 'showtime')
        //cy.userLoggedIn()
        cy.goTo('/date-picker', 'Date Picker')

    })

    it('Deve preecher minha data de aniversário',()=> {

        cy.get('input[placeholder="Escolha uma data"][readonly]')
        .click()

        cy.get('select[aria-label="Month"]')
        .select('Novembro')

        cy.get('input[aria-label="Year"]')
        .type('1979')

        cy.get('span[aria-label="Novembro 20, 1979"]')
        .click()


    })


})