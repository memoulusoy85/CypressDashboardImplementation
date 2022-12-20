
 /// <reference types="Cypress" />
 
 var data=require('../../fixtures/states.json')

   describe('Dropdown Testing',()=>{



   it('State selection', () => {

    cy.visit('http://practice.cybertekschool.com/dropdown')

    cy.get('[id="state"]> option').each(($el,index)=>{

        const text=$el.text()
        expect(text).to.contain(data.states[index]) // to check all states are available

        cy.get('[id="state"]').select($el.text()).should('be.visible') // to check one by one for visible and if it is checked or not




    })

      
 });

})