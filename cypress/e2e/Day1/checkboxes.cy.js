/// <reference types="Cypress" />





describe ('Checkboxes Test', ()=>{


 
     it.only('Checkbox testing', () => {

        cy.visit('http://practice.cybertekschool.com/checkboxes')

        cy.get('#box1').check().should('be.checked')

        cy.viewport('ipad-mini')

        cy.wait(1000)

            
        cy.get('[name="checkbox2"]').click().should('not.be.checked')


         
     });


     
     it.only('Checkbox testing', () => {

        cy.visit('http://practice.cybertekschool.com/checkboxes')

        cy.get('#box1').click().should('be.checked')

        cy.viewport('iphone-xr')

        cy.wait(1000)

            
        cy.get('[name="checkbox2"]').click().should('not.be.checked')


         
     });
 
 
 })