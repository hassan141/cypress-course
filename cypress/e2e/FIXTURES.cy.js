describe('mytestsuit', () => {

    //direct acess
  
    /*it.only('fixturesdemotest', () => {

       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       cy.fixture("orangehrm").then((data)=>{

       
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',data.expected)
      })
        
      
    })*/
    //acess through hook_for multi blocks
    let userdata;
    before(()=>{
        cy.fixture("orangehrm").then((data)=>{

           userdata=data
            })
        
    })
    it('fixturesdemotest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected)

      
    })
   
    
  })