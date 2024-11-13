describe('Radio Buttons', ()=> {
    beforeEach(()=> {
        cy.goHome()
        cy.doLogin()// commands que substitui os passos comentados de login abaixo
        //cy.login('papito@cyskills.com.br', 'showtime')
        //cy.userLoggedIn()
        cy.goTo('/radio', 'Radio Buttons')

    })
it('Deve marcar o framework usado no curso', () => {
    cy.contains('label','Cypress')
    .click()
})


})