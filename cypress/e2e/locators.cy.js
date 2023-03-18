describe('locators', () => {

  
    it('loc', () => {
  
      cy.visit("https://www.youtube.com/")
      cy.get('#start > ytd-topbar-logo-renderer.style-scope > #logo > div.style-scope > .ytd-topbar-logo-renderer > #logo-icon').should('be.visible')
    
      
  
  
    })
    
    
  })