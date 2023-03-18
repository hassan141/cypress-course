import Login from "../PageObjects/LoginPage"
describe('pom', () => {

  
    it('logintest', () => {
  
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get("input[placeholder='Username']").type("Admin")
      cy.get("input[placeholder='Password']").type("admin123")
      cy.get("button[type='submit']").click()
      cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard')
      
  
  
    })
    it.only('logintest', () => {
  
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln=new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clicksubmit();
        ln.verifylogin();
    
    
      })
    
    
  })