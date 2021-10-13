/// <reference types="Cypress" />

beforeEach(() => cy.login())
  describe('Logout', () => {
    it('successfully logged out', () => {
      cy.logout()

      cy.url().should('be.equal', `${Cypress.config('baseUrl')}users/sign_in`)
    })
})