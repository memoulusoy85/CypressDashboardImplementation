  ///<reference types="Cypress" />
 



 // in cypress test runner,  pop-ups dont seem 
   describe('Java Script Alerts',()=>{



   it('Handling JS Alert- Validate Alerts text and Click OK', () => {

    cy.visit('http://practice.cybertekschool.com/javascript_alerts')

    cy.get('[onclick="jsAlert()"]').click()

    cy.on('window:alert',(str)=>{

        expect(str).to.equal('I am a JS Alert')
    })

    cy.on('window:confirm',()=> true) // confirm js alert window, click() ok
    cy.get('#result').should('have.text','You successfully clicked an alert') 
      
 });



 it('Handling JS Confirm - Click OK', () => {

    cy.visit('http://practice.cybertekschool.com/javascript_alerts')

    cy.get('[onclick="jsConfirm()"]').click()    // window not open 

    cy.on('window:confirm',(str)=>{              

        expect(str).to.equal('I am a JS Confirm')        // window not open but try to confirm that message is seen as if window open

        

     })


     cy.on('window:confirm',()=>true)             // true--> hit the click ok (there are two options ok and cancel), false--> click 'cancel'

     cy.get('#result').should('have.text','You clicked: Ok')


      
 });



 it('Handling JS Confirm - Click Cancel', () => {

    cy.visit('http://practice.cybertekschool.com/javascript_alerts')

    cy.get('[onclick="jsConfirm()"]').click()    // window not open 

    cy.on('window:confirm',(str)=>{              

        expect(str).to.equal('I am a JS Confirm')        // window not open but try to confirm that message is seen as if window open

        

     })


     cy.on('window:confirm',()=>false)             // true--> hit the click ok (there are two options ok and cancel), false--> click 'cancel'

     cy.get('#result').should('have.text','You clicked: Cancel')

      
 });



 it('Handling JS Prompt -Input text in Prompt, Click Ok and Validate the Input Text', () => {

    cy.visit('http://practice.cybertekschool.com/javascript_alerts')
 

    cy.window().then(($window)=>{

    cy.stub($window,'prompt').returns('This is a test text')
    cy.get('[onclick="jsPrompt()"]').click()

    })

    cy.get('#result').should('have.text','You entered: This is a test text')
      
 });




})