

describe('My First Test', () => {

  
  it('test1', () => {

    cy.visit("https://www.youtube.com/")
    cy.title().should('eq','YouTube')
    


  })
  it('test2', () => {

    cy.visit("https://www.youtube.com/")
    cy.title().should('eq','YouTube123')
    


  })
  
})