0/// <reference types="cypress" />

describe('Login Testing', () => {
    beforeEach(() => {
      return cy.visit('/')
    })
    
    it('Success Login', () => {
        // user login
        cy.contains('Sign In').click()
        cy.get('#email').type('jihanmariana2@gmail.com')
        cy.get('#pass').type('Jihan123')
        cy.get('#send2').click()
    })
    it('Failed Login --Empty Fill', () => {
        // user login
        cy.contains('Sign In').click()
        cy.get('#send2').click()
        cy.get('[data-hasrequired="* Required Fields"]').should('be.visible')
    })
    it('Failed Login --Wrong Creds', () => {
        // user login
        cy.contains('Sign In').click()
        cy.get('#email').type('johndoe@domain.com')
        cy.get('#pass').type('pass')
        cy.get('#send2').click()
        cy.get('[data-ui-id="message-error"]').should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })    
})
