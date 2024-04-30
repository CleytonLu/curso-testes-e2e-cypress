describe('Initial page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('it should render the <h1/> with text correct', () => {
    cy.getText('titulo-principal',"Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!");
  })
})