require('@4tw/cypress-drag-drop')
describe("Mouse Operations",()=>{
    it('mouseHover',()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)")
        .should('not.be.visible');
       
       
        cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']").trigger('mouseover').click();
        cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)")
        .should('be.visible');
         
    });
    it('right click',()=>{
    

     cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
     //  cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
     //  cy.get('.context-menu-icon-copy > span').should('be.visible')
     //2ND APPROACH
     cy.get(".context-menu-one.btn.btn-neutral").rightclick()
     cy.get('.context-menu-icon-copy > span').should('be.visible')

    });
    it('double click',()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.frameLoaded('#iframeResult');//LOAD FRAME
        //1ST approach_TRIGGER
        cy.iframe('#iframeResult').find("cy.frameLoaded('#iframeResult')").trigger('dblclick');
        cy.iframe('#iframeResult').find("#field2").should('have.value','Hello World');
        //2ND_CLICK
        cy.iframe('#iframeResult').find("cy.frameLoaded('#iframeResult')").dblclick()
        cy.iframe('#iframeResult').find("#field2").should('have.value','Hello World');
        
    });
    it('drag and drop using plugin',()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get("#box6").drag("#box106",{force:true});

    });
    it.only('scrolling page',()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
        cy.get(':nth-child(1) > tbody > :nth-child(57) > :nth-child(1) > img').scrollIntoView({duration:1000});
        cy.get(':nth-child(1) > tbody > :nth-child(57) > :nth-child(1) > img').should('be.visible')
        cy.wait(5000);
        cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(1) > img').scrollIntoView({duration:1000});
        cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(1) > img').should('be.visible')
        cy.get("#footer").scrollIntoView();

    });
})