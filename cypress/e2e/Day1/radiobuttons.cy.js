/// <reference types="Cypress" />
import {URL} from '../../support/authentication'
import { fun1 } from '../../support/CNA';





describe ('radiobutton Test', ()=>{


 
    it.only('Verify all radiobuttons are checked', () => {

       cy.visit(URL)

       
       fun1.function ()


     

    //    cy.get('[type="radio"]').then(radioButtons=>{

    //     // cy.wrap(radioButtons).first()
    //     // .check()
    //     // .should('be.checked')

    //     for (var i=0; i<=radioButtons.length-1;i++){

    //         cy.wrap(radioButtons).eq(i)
    //         .check({force:true})
    //         .should('be.visible')
    //          cy.wait(500)

    //          console.log(i)
    //     }


    //    })

        
    });

})