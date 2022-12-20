


describe('Conditional Testing',()=>{

it('', () => {

    cy.visit('')

    cy.get('body').then((htmlBody)=> {

        if(htmlBody.find('[data-jsl10n="wikivoyage.name"]').length>0){

            cy.get('[data-jsl10n="wikivoyage.name"]').click()


            cy.url().should('eq','https://www.wikivoyage.org/')
            // cy.location('href').should('eq','https://www.wikivoyage.org/') 
           // cy.url().expect('include',' wikivoyage')

           

        }else{

            cy.get('[data-jsl10n="commons.name"]').click()
            cy.url().should('eq','https://commons.wikimedia.org/wiki/Main_Page')

        }

    })
    
});

it('', () => {

    
});


})