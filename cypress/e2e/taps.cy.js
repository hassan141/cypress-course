describe('handle tabs', () => {

  
    it('first approach', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click();
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') 
        cy.wait(5000);
        //operations
        cy.go('back');// back to parent tap

  
      
  
  
    })
    it('second approach', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get("a[href='/windows/new']").then((e)=>{

             let url=e.prop('href');
             cy.visit(url);

        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') 
        cy.wait(5000);
        //operations
        cy.go('back');// back to parent tap
       //limitations if the domains are diffrent in this ex ther aare equal
  
      
  
  
    })
    
    
  })