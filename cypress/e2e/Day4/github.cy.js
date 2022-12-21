

import { githubURL, googleUrl, udemy } from "../../support/authentication.constant";
import { ongithubpage } from "../../support/github";
describe('Udemy test cases',()=>{

    beforeEach('Navigate to page udemy.com',()=>{

        cy.visit(githubURL)

    })

it('Login to the github', () => {

    
  ongithubpage.verifySignInUrl()
    
});

it('Navigate to page back', () => {

    ongithubpage.navigatetoMainpage()
    
});

})