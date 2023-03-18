//hooks
//before:will run before any block for one time
//after:will run after any block for one time
//aftereach:always run after each block
//before each
describe('mytestsuit', () => {
    before(()=>{
        cy.log("********launch app*********")
    })
    after(()=>{
        cy.log("********close app*********")
    })
    beforeEach(()=>{
        cy.log("********login*********")
    })
    afterEach(()=>{
        cy.log("********logout*********")
    })

   
        it('search', () => {
            cy.log("*********       searching **********");
      
          })
        
        it('advanced search', () => {
            cy.log("*********   advanced searching **********");
      
          })
        it('listing products', () => {
            cy.log("*********    listing products **********");
      
          })
        
        
        
})  
    
