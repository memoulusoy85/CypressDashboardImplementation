
/// <reference types="Cypress" />





describe ('Dev-864', ()=>{

   //before each method(it)
    beforeEach('Before Method',()=>{


        cy.visit('http://practice.cybertekschool.com/')
    })

   // after each method(it)
    afterEach('After Method',()=>{


    })

    it.only('#ACC1', () => {
        
    });

    it('#ACC2', () => {
        
    });

    it('#ACC3', () => {
        
    });

})

describe.skip ('Dev-865', ()=>{

     //before all just once
    before('Before method',()=>{

        cy.visit('http://practice.cybertekschool.com/')

    })


            beforeEach('before each', ()=>{
                
            })


            afterEach('after each', ()=>{

            })

      //after all just once      
    after('After method', ()=>{

    })   

    it('#ACC1', () => {
        
    });

    it('#ACC2', () => {
        
    });

   

})