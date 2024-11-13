describe('Iframe', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/iframe', 'IFrame')

    })
/* erro timeout
    it('Deve preecher o nome em uma pagina com iframe', () => {
        cy.get('[data-cy="iframe-inputs"]')
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')

                cy.wrap($body)
                    .find('#fullname')
                    .type('Fernando Pimentel')
            })

    });
*/

    it('Deve preencher o nome em uma página com iframe', () => {
        // Aguardar o carregamento do iframe
        cy.get('[data-cy="iframe-inputs"]').then(($iframe) => {
            const $body = $iframe.contents().find('body')

            // Certificar-se de que o body está carregado e envolver em cy.wrap novamente
            cy.wrap($body).as('iframeBody')
        })

        // Separar a cadeia e garantir que o elemento existe antes de interagir
        cy.get('@iframeBody')
        .wait(1000)
        .find('#fullname')
         .should('exist')
        .type('Fernando Pimentel')
    });
})