
/// <reference types="Cypress" />
describe ('Drag n drop using data transfer', ()=>{


it('Drag and drop using Datatransfer', () => {

    cy.visit('http://practice.cybertekschool.com/drag_and_drop')

    drag_and_drop()
    
});

})

const datatransfer=new DataTransfer;

function drag_and_drop(){

    cy.get('#column-a').should('be.visible').trigger('dragstart')
    cy.wait(500)

    cy.get('#column-b').should('be.visible').trigger('drop',{datatransfer})
    cy.wait(500)
    cy.get('#column-b').should('be.visible').trigger('dragend')
}