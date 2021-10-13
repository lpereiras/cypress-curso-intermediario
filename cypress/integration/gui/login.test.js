/// <reference types="Cypress" />

describe('Login', () => {
  it('successfully logged', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('exist')
  })
})