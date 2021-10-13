/// <reference types="Cypress" />

const faker = require('faker')

describe('Create Issue', () => {
  it('successfully created', () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: `${faker.random.words(4)}`,
    project: {
      name: `project${faker.datatype.uuid()}`,
      description: `${faker.random.words(5)}`
    }
  }
    cy.api_createIssue(issue)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.title).to.equal(issue.title)
        expect(response.body.description).to.equal(issue.description)
      })
  })

})