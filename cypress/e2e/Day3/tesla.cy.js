
import { modelSURL, teslaURL } from "../../support/authentication.constant";
import { onModelSPage } from "../../support/modelS";



describe ('Tesla.com automation testing', ()=>{

beforeEach('Navigate to page to tesla.com',()=>{

   //cy.visit( teslaURL)   // couldn not find models
    cy.visit(teslaURL)




})
 
    it.only('Test One', () => {

        onModelSPage.urlVerification()

       // onModelSPage.privacy_Verification()

      


        
    });
})