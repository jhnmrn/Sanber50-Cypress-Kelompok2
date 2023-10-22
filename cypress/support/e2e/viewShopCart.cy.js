describe('View Shop Cart', () => {
    beforeEach(() => {
      return cy.visit('/')
    })
    
    it('User redirect to shpping cart page successfully', () => {
        // user login
        cy.contains('Sign In').click()
        cy.get('#email').type('jihanmariana2@gmail.com')
        cy.get('#pass').type('Jihan123')
        cy.get('#send2').click()

        // user redriect to shopping cart
        cy.get('.action.showcart').click();
    })
})

