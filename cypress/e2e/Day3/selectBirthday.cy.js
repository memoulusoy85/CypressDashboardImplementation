
 /// <reference types="Cypress" />
 


   describe('Selecting Birthday',()=>{



//     //navigate to page `http://practice.cybertekschool.com/dropdown`
//     // select your own birthday yyyy/mm/

it('Select birthday ', () => {

    cy.visit('http://practice.cybertekschool.com/dropdown')

    
      cy.get('[id="year"]').select('1985')
      cy.get('[id="month"]').select('July')
      cy.get('[id="day"]').select('30')
        
    
});



})