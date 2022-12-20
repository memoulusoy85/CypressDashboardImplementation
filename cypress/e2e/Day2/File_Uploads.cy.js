
/// <reference types="Cypress" />
describe('File Upload',() =>{

it('Png file upload', () => {

    cy.visit('http://practice.cybertekschool.com/upload')

    cy.get('#file-upload').attachFile('fatura.png')
    cy.get('[class="button"]').click()

    cy.get('#uploaded-files').invoke('text','fatura.png').should('be.visible')  // invoke('attr','attribute name') go anf find this attribute or this text
    
});

})