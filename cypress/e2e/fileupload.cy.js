import 'cypress-file-upload'
describe('file upload', () => {

  
    it.only('single file upload', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('hassan.txt')
        cy.get("#file-submit").click();
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')

    })
    it('file upload rename', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filepath:'hassan.txt',fileName:'sona.txt'})
        cy.get("#file-submit").click();
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')


    })
 
    it('file upload drag and drop', () => {

       cy.get("#drag-drop-upload").attachFile("hassan.txt",{subjectType:'drag-n-drop'});
       cy.wait(5000 )

    })
 
    it('multiple file uploads', () => {

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(['hassan.txt','sona.txt'])
        cy.get("body > div:nth-child(8) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > p:nth-child(6) > strong:nth-child(1)").should('contain.text','Files You Selected:')
    })
 
    it('file upload shadow dom', () => {

    })
 
    
    
  })