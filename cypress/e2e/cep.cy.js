describe('CEP', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/cep', 'CEP (API dos Correios)')
    })

    it('Deve cadastra um endereço consumindo a API dos correioscy', () => {


        const address= {
            "cep" : "32341300",
            "logradouro" : "Rua Sumara",
            "localidade" : "Contagem",
            "uf" : "MG"
        }
        cy.intercept('GET', `https://viacep.com.br/ws/${address.cep}/json/`, {
            statusCode: 200,
            body: address
        }).as('getCep')

        cy.get('input[name="cep"]')
            .type(address.cep)
        cy.contains('button', 'Cadastrar').click()

        cy.wait('@getCep')

        cy.get('input[name="logradouro"]', { timeout: 7000 }) // add timeout para que de tempo de carregar os campos vindos da API dos correios
            .should('have.value', address.logradouro)

        cy.get('input[name="cidade"]', { timeout: 7000 }) // add timeout para que de tempo de carregar os campos vindos da API dos correios
            .should('have.value', address.localidade)

        cy.get('input[name="estado"]', { timeout: 7000 }) // add timeout para que de tempo de carregar os campos vindos da API dos correios
            .should('have.value', address.uf)



    });


})