describe('assertions', () => {

  
    it('implicet', () => {
  
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //   cy.url().should('include','opensource-')
        //   cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //7aga kamla
        //   cy.url().should('contain','opensource')
        //   cy.url().should('include','opensource-')
        //   .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //7aga kamla
        //   .should('contain','opensource')
        cy.get('.orangehrm-login-logo > img').should('be.visible')
        cy.get("button[type='submit']").should('be.visible')
        
  
      
  
  
    })
    it('explicet', () => {
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expectname="xyz";
        cy.get(".oxd-userdropdown-name").then((x)=>{



        let actname=x.text()
        //BDD STYLE
        expect(actname).to.not.equal(expectname)
        //expect(actname).to.equal(expectname)

        //TDD STYLE
        //assert.equal(actname.expectname)
        //assert.notEqual(actname.expectname)









      })
  
        
  
      
  
  
    })
    
    
  })