describe('tags', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()// commands que substitui os passos comentados de login abaixo
        //cy.login('papito@cyskills.com.br', 'showtime')
        //cy.userLoggedIn()
        cy.goTo('/tags', 'Tags')

    })

    it('Deve add algumas tags', () => {

        const tags = ['Cypress', 'typeScrip', 'java', 'python']

        tags.forEach(tag => {

            cy.get('.new-tag')
                // .type( tag+ '{Enter}') // pode ser assim
                .type(`${tag}{Enter}`)// pode ser assim com interpolacao
                .should('have.value', '') // garante que alem de preencher e clicar enter pra criar a tag ele mantem o campo em branco pra proxima digitação
            cy.wait(500) //think time

        })

        tags.forEach(tag => {
            cy.get('.tag-input')
                .should('contain', tag)
        })



    });

})