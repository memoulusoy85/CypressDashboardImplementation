/// <reference types="Cypress" />

describe ('Webelements', ()=>{

    //tag name
    cy.get('input')


    //by  ID
    cy.get('#radio1')

    //by classname
    cy.get('.icheck-helper')

    //by attribute name
   
    cy.get('[type]')

    //by text 
    cy.contains('blue') // text in web element



    //by attribute name and value
    cy.get('[name="abuse"]')

    //by class value
    cy.get('[class="iCheck-helper"]')

    //by tag name and attribute with value
    cy.get('input [name="abuse"]')

    //by two different attributes or more
    cy.get('[name="abuse"][class="iCheck-helper"]') // there is no space




     it.only('#ACC1', () => {
         
     });
 
    
 })