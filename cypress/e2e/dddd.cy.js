describe('assertions', () => {

  
    it('ass', () => {
  
      cy.visit('https://demo.opencart.com/admin/index.php');
      cy.get("#input-username").type("demo");
      cy.get("#input-password").type("demo");
      cy.get("button[type='submit']").click();
      cy.get(".btn-close").click();
      cy.get(".parent[href='#collapse-5']").click()//customers main menu
      cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click();

  
      
  
  
    })
    
    
  })