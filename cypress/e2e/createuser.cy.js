/// <reference types="cypress" />

describe('reqres API Testing - Create User', () => {
  it('create user', () => {
    cy.request({
      method: 'POST', 
      url: 'https://reqres.in/api/users',
      body: {
        "name":"Jihan Mariana",
        "job": "Quality Assurance"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
    })
 })
})
