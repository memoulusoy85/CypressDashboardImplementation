  /// <reference types="Cypress" />

<reference types="cypress"/>

//visit
cy.visit('open url')
cy.visit('url',{timeout:10000})

//should is a promise here
let path="www.amazon.com"
cy.url().should('include',path)
cy.url().should('','balablabla')

//finding the element

cy.get(loc).click()
cy.get(loc).should('be.visible')
cy.get(loc).should('be.exist')

//negative ones
cy.get(loc).should('not.be.visible')
cy.get(loc).should('not.be.exist')

cy.get('h1').should('have.length',3)
cy.get('h1').should('have.text','John doe')
cy.get('h1').should('have.value','cypress')
cy.get('h1').should('have.attr','cypress')

//parent to the child
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(1).click()

cy.go('back')
cy.get('tbody tr').nextAll.click({multiple:true})  //10 elements

cy.get(loc).prev.click()
cy.get(loc).prevAll.click()


//hover handling
cy.get(loc).trigger('mouseover').click()
cy.get(loc).trigger('mouseup').click()

cy.get('username').clear().type('username')
