

describe('Handle table', () => {

  //beforeeach used to run the code inside it everytime befeore each (it)block under it
    beforeEach('Login',()=>{
        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();
        cy.get(".btn-close").click();
        cy.get(".parent[href='#collapse-5']").click()//customers main menu
        cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click();

    })
    it.skip('check Number rows & columns',()=>{
        cy.get(".table.table-bordered.table-hover>tbody>tr").should('have.length','10');
        cy.get("table.table-bordered.table-hover>thead>tr>td").should('have.length','7');

    })
    it.skip ('check cell data from specific row & column',()=>{
        cy.get(':nth-child(5) > :nth-child(3)').contains("princytrainings4@gmail.com")

    })
    it('read all the rows & columns data in the first page',()=>{
        cy.get("table.table-bordered.table-hover>tbody>tr").each(($row,index,$rows)=>{//capture all rows

            cy.wrap($row).within(()=>{//capture current row
                cy.get("td").each(($col,index,$cols)=>{//capture all cols
                    cy.log($col.text());
                })
            })
        })

    })
    it.only('paginatuion',()=>{
        //find total number of pages
       /* let totalpages;
        cy.get(".col-sm-6.text-end").then(  ( e)=>{
          let mytext= e.text();//showing 1 to 10 of 5582(559 pages)
          totalpages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("pages")-1);
          cy.log("total number of pages in a table==========>"+totalpages);
        })*/
        let totalpages=5;
        for(let p=1;p<=totalpages;p++)
        {
            if(totalpages>1){
                cy.log("active page is======"+p);
                cy.get(":nth-child("+p+") > .page-link").click();
                cy.wait(3000);
                cy.get("table.table-bordered.table-hover>tbody>tr")
                .each(($row,index,$rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text());//email
                        })
                    })
                })
            }
        }

    })
    
  })