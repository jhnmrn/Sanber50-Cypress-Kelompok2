describe('Negatif Shop Cart', () => {
    beforeEach(() => {
      return cy.visit('/')
    })
    
    it('Number Stock of item less than 0', () => {
        // user login
        cy.contains('Sign In').click()
        cy.get('#email').type('fake@email.com')
        cy.get('#pass').type('Mastermeong!2')
        cy.get('#send2').click()

        // user redirect to shopping cart
        cy.visit('https://magento.softwaretestingboard.com/checkout/cart/configure/id/399725/product_id/334/')
        cy.get('#qty').type(-1)
        cy.get('#product-updatecart-button').click()
        cy.get('#qty-error.mage-error').contains('Please enter a quantity greater than 0.')

    })
})
