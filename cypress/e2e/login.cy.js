describe('login', () => {

  beforeEach(() => {
   cy.goHome()
  })

  it('deve logar com sucesso', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
   
  })

  it('não deve logar com senha invalida', () => {
    cy.login('papito@cyskills.com.br', 'abc123456')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('não deve logar com email não cadastrado', () => {
    cy.login('404@cyskills.com.br', 'showtime')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })
  it('não deve logar com email incorreto', () => {
    cy.login('www.cyskills.com.br', 'showtime')
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')

  })
  it('Não deve logar sem e-mail', () => {
    cy.login('', 'abc12345678')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  });

  it('Não deve logar sem senha', () => {
    cy.login('fernando@teste.com', '')
    cy.noticeHave('Por favor, digite sua senha para continuar.')
  });

  it('Não deve logar sem email e  senha', () => {
    cy.login('', '')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  });

})

