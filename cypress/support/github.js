import { githubLoginURL } from "./authentication.constant"

export  class github{

verifySignInUrl(){

    cy.contains('Sign in').click()
    cy.url().should('eq',githubLoginURL)
}


navigatetoMainpage(){

    cy.go('back')


}


}

export const ongithubpage=new github