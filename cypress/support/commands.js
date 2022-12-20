// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//


// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import{url,username,password,wrongusername,wrongpassword,loginpageerrormessage} from '../support/authentication.constant'

 import 'cypress-file-upload';



     Cypress.Commands.add('Login_Positive_Scenario', ()=> {

          cy.visit('https://paneltest.sellerflash.com')
    
           cy.get('#username').clear().type(username)
           cy.get('#password').clear().type(password)
           cy.get(':nth-child(1) > .p-button > .p-button-label').click()


     })


     Cypress.Commands.add('Negative_Password_Testing', ()=> {

          cy.visit('https://paneltest.sellerflash.com')
    
           cy.get('#username').clear().type(username)
           cy.get('#password').clear().type(wrongpassword)
           cy.get(':nth-child(1) > .p-button > .p-button-label').click()

           cy.get('[class="p-toast p-component p-toast-top-right"]').should('be.visible')
          
          


     })


     Cypress.Commands.add('Negative_Username_Testing', ()=> {

          cy.visit('https://paneltest.sellerflash.com')
    
           cy.get('#username').clear().type(wrongusername)
           cy.get('#password').clear().type(password)
           cy.get(':nth-child(1) > .p-button > .p-button-label').click()

           cy.get('[class="p-toast p-component p-toast-top-right"]').should('be.visible')
          
          


     })


     
     Cypress.Commands.add('Negative_Username_Password_Testing', ()=> {

          cy.visit('https://paneltest.sellerflash.com')
    
           cy.get('#username').clear().type(wrongusername)
           cy.get('#password').clear().type(wrongpassword)
           cy.get(':nth-child(1) > .p-button > .p-button-label').click()

           cy.get('[class="p-toast-summary"]').invoke('text').should('eq','Incorrect operation')
          
          


     })


     Cypress.on('uncaught:exception',(err, runnable)=>{
          //returning false here prevents Cypress from failing the test
     })