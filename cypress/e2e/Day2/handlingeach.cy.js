
var data= require('../../fixtures/staging.json')

describe('Handling each function',()=>{

    before(function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('[name="username"]').clear().type('Admin')
        cy.get('[type="password"]').clear().type('admin123')

        cy.get('[type="submit"]').click()
    })


    it('Testing each text', () => {

        cy.get('.oxd-icon-button.orangehrm-quick-launch-icon').each(($el,index)=>{


            cy.log('element', $el.attr('title'))

            const text=$el.attr('title')

           //expect(text).to.eql(data.quickLaunch[index]) // to deeply equal
            expect(text).to.contain(data.quickLaunch[index])
            
            

        })
        
    });
})