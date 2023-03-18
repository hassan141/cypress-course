describe('check ui radio and checkboxes', () => {

  
    // it('check checkboxes', () => {
  
    //   cy.visit("https://itera-qa.azurewebsites.net/home/automation")
    //     //   cy.get("input#monday").should('be.visible')

    //     //   selecting single check box
    //     //   cy.get("input#monday").check().should('be.checked')
    //     //   unselect
    //     //   cy.get("input#monday").uncheck().should('not.be.checked')
    //     //   select all check boxes
    //     //   cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
    //     //   cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')
    //     // select first check
    //     cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
        
    //     //select lasr checkbox
    //     cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')
    
  
    // })
    it('check radiobut', () => {
  
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        //visibilty of radio buttons
        cy.get("input#male").should('be.visible')  
        cy.get("input#female").should('be.visible')  
        //select
        cy.get("input#male").check().should('be.checked')  
        cy.get("input#female").should('not.be.checked')  
        cy.get("input#female").check().should('be.checked')  
        cy.get("input#male").should('not.be.checked')  
        
    
    })
      
    
  })