describe('Edit Shop Cart', () => {
    beforeEach(() => {
      return cy.visit('/')
    })
    
    it('User update shpping cart successfully', () => {
        // user login
        cy.contains('Sign In').click()
        cy.get('#email').type('jihanmariana2@gmail.com')
        cy.get('#pass').type('Jihan123')
        cy.get('#send2').click()

        // user redriect to shopping cart
        cy.get('.action.showcart').click();

        // edit shop cart
        cy.get('[data-cart-item-id="WT09-L-White"]').clear()
        cy.get('[data-cart-item-id="WT09-L-White"]').type(5)
        cy.get('.action.update').click()
    })
})

