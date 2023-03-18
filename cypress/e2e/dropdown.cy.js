describe('handle dropdowns', () => {

  
    it.skip('dropdown with select', () => {//to skip test case we do not need to comment it
  

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country').select('Egypt')
        .should('have.value','Egypt')//validation
      
  
  
    })
    
    it.skip('dropdown without select', () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get("input[role='combobox']").type('Italy').type('{enter}').should('have.text','Italy')
  
  
    })
    it.skip('auto static suggest dropdown', () => {

        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('barca')

        cy.get('.suggestion-title').contains('barcelona').click()
  
  
    })
   
    it('auto dynamic suggest dropdown', () => {

        cy.visit("https://www.google.com/")
        cy.get("input[name='q']").type('messi')
        cy.wait(300)
        cy.get('div.wM6W7d>span').should('have.length',11)
        cy.get('div.wM6W7d>span').each(($el,index,$list)=>{//text,index,array
              if($el.text()=='Lionel Messi ')//compare if true click
              {
                cy.wrap($el).click()
              }
                      

            } )
        cy.get("input[title='Search']").should('have.value','Lionel Messi')    
  
    })
    
  })