0/// <reference types="cypress" />

describe('Create an Account', () => {
  beforeEach(() => {
    return cy.visit('/')
  })

  it('User create account successfully', () => {
    cy.contains('Create an Account').click()
    cy.get('#firstname').type('Nadiyah')
    cy.get('#lastname').type('Fitriyah')
    cy.get('#email_address').type('nadiyahfitriyah3@gmail.com')
    cy.get('#password').type('Nadiyah05100')
    cy.get('#password-confirmation').type('Nadiyah05100')
    cy.get('button[title=\'Create an Account\'] span').click()
  })

  it('User create an account without fill first name', () => {
    cy.contains('Create an Account').click()
    cy.get('#lastname').type('Fitriyah')
    cy.get('#email_address').type('nadiyahfitriyah3@gmail.com')
    cy.get('#password').type('Nadiyah05100')
    cy.get('#password-confirmation').type('Nadiyah05100')
    cy.get('button[title=\'Create an Account\'] span').click()
    cy.contains('This is a required field.').should('contain','This is a required field.')
  })

  it('User create account with invalid format email', () => {
    cy.contains('Create an Account').click()
    cy.get('#firstname').type('Nadiyah')
    cy.get('#lastname').type('Fitriyah')
    cy.get('#email_address').type('nadiyahfitriyahgmail.com')
    cy.get('#password').type('Nadiyah05100')
    cy.get('#password-confirmation').type('Nadiyah05100')
    cy.get('button[title=\'Create an Account\'] span').click()
    cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('contain','Please enter a valid email address (Ex: johndoe@domain.com).')
  })

})