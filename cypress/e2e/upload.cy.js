describe('upload', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()// commands que substitui os passos comentados de login abaixo
        //cy.login('papito@cyskills.com.br', 'showtime')
        //cy.userLoggedIn()
        cy.goTo('/upload', 'Upload')

    })
    it('Deve anexar um doc', () => {
        cy.get('input[name="doc"]')
            .selectFile('cypress/fixtures/doc.pdf')
            .then(element => {
                expect(element[0].files[0].name).to.equal('doc.pdf') // verifica se o arquivo foi anexado
            })
    });

    it('Deve anexar uma imagem', () => {
        cy.get('input[name="photo"]')
            .selectFile('cypress/fixtures/liga.jpg')
            .then(element => {
                expect(element[0].files[0].name).to.equal('liga.jpg') // verifica se o arquivo foi anexado
            })

            cy.get('#image-upload')
            .find('img')
            .should('be.visible')
            .should('have.attr', 'src') // verifica se tem a propriedade(atributo) src
            .and('include', 'blob') // texto com blob é uma previsualização da imagem
    });


})