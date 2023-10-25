describe('Edit Shop Cart', () => {
    beforeEach(() => {
      return cy.visit('/')
    })
    
    it('User update shpping cart successfully', () => {
    cy.contains('Sign In').click()
    cy.get('#email').type('erin.test@gmail.com')
    cy.get('#pass').type('Test123!')
    cy.get('#send2').click()

    cy.contains('Radiant Tee').click()

    cy.get('[option-label="XS"]').click();

    cy.get('[option-label="Blue"]').click();

    cy.contains('Add to Cart').click()

    cy.wait(5000);
    cy.contains('My Cart').click();

    cy.contains('Proceed to Checkout').click()

    cy.wait(5000);
    cy.contains('Next').click()

    cy.wait(5000);
    cy.contains('Place Order').click()
    })
})

