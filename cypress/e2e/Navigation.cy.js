describe('my suite',()=>{

 it('navciagtion test',()=>{

    //go command()
    cy.visit("https://demo.opencart.com/")
    cy.title().should('eq',"Your Store")//home page
    cy.get("li:nth-child(7) a:nth-child(1)").click();
    cy.get("div[id='content'] h2").should('have.text','Cameras')
    cy.go('back');//go back to home
    cy.title().should('eq',"Your Store")//home page
    cy.go('forward');
    cy.get("div[id='content'] h2").should('have.text','Cameras')
    cy.go(-1)//home page
    cy.title().should('eq',"Your Store")//home page
    cy.go(1)//camera
    cy.reload()//to reload the pages
    
    

 })




})