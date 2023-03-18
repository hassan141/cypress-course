describe('mytestsuit', () => {

  
    it('datadriventest', () => {
  
     cy.fixture("orangehrm copy").then((data)=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         data.forEach((userdata)=>{
            cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get("input[placeholder='Password']").type(userdata.password)
            cy.get("button[type='submit']").click()
            if(userdata.username=='Admin'&&userdata.password=='admin123'){
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected)
            cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click()//LOGOUT
            cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").click()

                    }
            else{
              cy.get("div[role='alert']").should('have.text',userdata.expected)
            }
         })            
        });
     })
  
      
  
  
})
    
    
 