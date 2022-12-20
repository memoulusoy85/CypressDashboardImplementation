

import { modelSURL,compareURL } from "./authentication.constant"

var data = require('../fixtures/modelsPage.json') // put all the data in modelsPage.json into "data" variable

var dataCompare=require('../fixtures/comparePage.json') // put all the data in comparePage.json into "dataCompare" variable

//var comparePage = require('../fixtures/comparePage.json')


export class modelS{


urlVerification(){

    cy.wait(500)
 
    cy.contains('Model S').click()

    cy.url().should('eq',modelSURL)
   
    //cy.contains('Model S').should('be.visible')
        
}

 privacy_Verification(){

cy.scrollTo("bottomLeft")




 cy.get('[class="tds-link tcl-link"]').each(($el,index)=>{

   const text=$el.text()

   expect(text).to.contain(data.ModelS[index])

 })

}




//navigate to page
// https://www.tesla.com/models
//click compare
//check every single text on page

modelScomparePage(){


  cy.contains('Compare').click()
  cy.wait(1000)
  cy.url().should('eq',compareURL)
  cy.scrollTo('bottomLeft')


  cy.get('.tds-text--caption.tcl-compare-models__item-title').each(($el,index)=>{


   const text=$el.text()
   expect(text).to.contain(dataCompare.comparePageText[index])

  })
  




}





// modelScomparePage(){
//     cy.contains('Compare').click()
//     cy.wait(1000)
//     cy.url().should('eq','https://www.tesla.com/compare')
//     cy.scrollTo('bottomLeft')
//     cy.get('.tds-icon-crosshatch').click()
   
//     cy.get('[class="tds-text--caption tcl-compare-models__item-title"]').each(($el,index)=>{

//         const text =$el.text()
//         expect(text).to.contain(comparePage.comparePageText[index])
//     })
// }


}

export const onModelSPage = new modelS
