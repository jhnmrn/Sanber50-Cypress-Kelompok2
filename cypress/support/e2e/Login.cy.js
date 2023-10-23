0/// <reference types="cypress" />

describe('Login Testing', () => {
    beforeEach(() => {
      return cy.visit('/')
    })   
    it('Success Login', () => {
        // login berhasil
        cy.contains('Sign In').click()
        cy.get('#email').type('jihanmariana2@gmail.com')
        cy.get('#pass').type('Jihan123')
        cy.get('#send2').click()
    })
    it('Failed Login --Empty Fill', () => {
        // gagal login kosong
        cy.contains('Sign In').click()
        cy.get('#send2').click()
        cy.get('[data-hasrequired="* Required Fields"]').should('be.visible')
    })
    it('Failed Login --Wrong Creds', () => {
        // gagal login tidak terdaftar
        cy.contains('Sign In').click()
        cy.get('#email').type('johndoe@domain.com')
        cy.get('#pass').type('pass')
        cy.get('#send2').click()
        cy.get('[data-ui-id="message-error"]').should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })
    it('Failed Login --Wrong Format', () => {
        // gagal login salah format --> sering gagal test karena popup muncul di skip atau only test
        cy.contains('Sign In').click()
        cy.get('#email').type('johnmail.com@')
        cy.get('#pass').type('pass')
        cy.get('#send2').click()
        cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('contain','Please enter a valid email address (Ex: johndoe@domain.com).')
    })  
    it('Forgot Password --Reset Success', () => {
        // reset password
        cy.contains('Sign In').click()
        cy.contains('Forgot Your Password?').click()
        cy.get('#email_address').type('eziodfrz@gmail.com')
        cy.contains('Reset My Password').click()
        cy.contains('If there is an account associated with eziodfrz@gmail.com you will receive an email with a link to reset your password.').should('contain','If there is an account associated with eziodfrz@gmail.com you will receive an email with a link to reset your password.')
    })
    it('Forgot Password --Wrong Format', () => {
        // gagal reset password
        cy.contains('Sign In').click()
        cy.contains('Forgot Your Password?').click()
        cy.get('#email_address').type('ezio')
        cy.contains('Reset My Password').click()
        cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('contain','Please enter a valid email address (Ex: johndoe@domain.com).')
    })   
})
