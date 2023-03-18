describe('alerts', () => {

  
    
  
      //javascript alerts@it will have some text and "ok"button
     it.skip('js alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick=jsAlert()']").click();
        cy.on('window:alert',(t)=>{
               expect(t).to.contains('I am a JS Alert');//check text

        })
        //alert window auto closed by cypress validate
        cy.get("#result").should('have.text','You successfully clicked an alert')
      })

      //javascript confirm alerts:it will have some text with"ok"and "cancel" button
      it.only('js confirm alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm=ok',(t)=>{
            expect(t).to.contains('I am a JS Confirm');//check text

        })
        cy.get("#result").should('have.text','You clicked: Ok')
        //cypress auto close alert window by using ok button

      })
      it.only('js confirm alert=cancel',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');//check text

        })
        cy.on('window:confirm',()=>false);//cypress close it by cancel button
        cy.get("#result").should('have.text','You clicked: Cancel')
        
        
      })
 
      //javascript prompt alerts"it will have some text with a text box for user input along with"ok
      it('js prompt alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome')//passing text to prompt before click on it then click
        })
        cy.get("button[onclick='jsPrompt()']").click();
        //cypress will auto close alert by deafult use ok button
        //try it by cancel button
        //cy.on('window:prompt',()=>false);//cypress close it by cancel button
        cy.get("#result").should('have.text','You entered: null')
        
      })
  
      //authenticated alerts
      it('js authenticated alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:
                                                                   {
                                                                       username:"admin",
                                                                       password:"admin"
                                                                    }
                                                                });
        cy.get("div[class='example'] p").should('have.text','Congratulations! You must have the proper credentials.')

      })
      //second approcah
      //https://admin:admin@the-internet.herokuapp.com/basic_auth
      //cy.vists("https://admin:admin@the-internet.herokuapp.com/basic_auth")
      //cy.get("div[class='example'] p").should('have.text','Congratulations! You must have the proper credentials.')

  
    
    
    
    })