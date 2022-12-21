import { githubLoginURL } from "./authentication.constant"

export  class github{

        verifySignInUrl(){

            cy.wait(3000)
            cy.contains('Sign in').click()
            cy.wait(3000)
            cy.url().should('eq', githubLoginURL)
        }


        navigatetoMainpage(){
            
            cy.wait(3000)

            cy.go('back')

        }


}

export const ongithubpage=new github