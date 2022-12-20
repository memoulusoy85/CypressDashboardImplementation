
import { modelSURL, teslaURL } from "../../support/authentication.constant";
import { onModelSPage } from "../../support/modelS";



describe ('Tesla.com automation testing', ()=>{

beforeEach('Navigate to page to tesla.com',()=>{
 
    cy.visit(teslaURL)

})
 
    it.only('Model S Testing', () => {

       onModelSPage.urlVerification()

       onModelSPage.privacy_Verification()

       onModelSPage.modelScomparePage()

      


        
    });
})