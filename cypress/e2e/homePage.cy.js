describe('home page user flow', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: 'allTricks'
    }).as('allTricks')
    .visit('http://localhost:3000')
  })

  it('should have header, tricks and form displayed on page load', () => {
    cy.wait(['@allTricks'])
    cy.get('.App').contains('h1', 'Sick Trick Wish List')

    cy.get('form').should('exist')
    cy.get('form').children()
      .should('have.length', 5)

    cy.get('.tricks-container').children()
      .should('have.length', 3)

    cy.get('.trick-card').first().should('contain', 'regular')
    cy.get('.trick-card').first().should('contain', 'treflip')
    cy.get('.trick-card').first().should('contain', `Obstacle:`)
    cy.get('.trick-card').first().should('contain', `flat ground`)
    cy.get('.trick-card').first().should('contain', 'Link to tutorial:')
    cy.get('.trick-card').first().should('contain', 'https://www.youtube.com/watch?v=XGw3YkQmNig')
      
  })

  it('should submit form and render card on DOM', () => {
    cy.get('.stance').select('Regular')
    cy.get('.trick-type').type('Test')
    cy.get('.obstacle').select('Flatground')
    cy.get('.tutorial-link').type('https://www.testtest.com')

    cy.get('button').contains('Send It!').click()

    cy.get('.trick-card').last().should('contain', 'Test')
    cy.get('.trick-card').last().should('contain', 'Obstacle: flatground')
    cy.get('.trick-card').last().should('contain', 'Link to tutorial:')
    cy.get('.trick-card').last().should('contain', 'https://www.testtest.com')

  })
  
})