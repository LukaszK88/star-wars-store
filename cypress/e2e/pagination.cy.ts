import { starshipResponse } from '../../app/tests/fixtures/starship';

describe('pagination', () => {
  before(() => {
    cy.intercept('GET', 'https://swapi.dev/api/starships?page=1', {
      statusCode: 200,
      body: {
        ...starshipResponse,
        count: 15,
      },
    });
    cy.intercept('GET', 'https://swapi.dev/api/starships?page=2', {
      statusCode: 200,
      body: {
        ...starshipResponse,
        count: 15,
        results: starshipResponse.results.slice(0, 5),
      },
    });
  });

  it('should navigate through pages', () => {
    cy.visit('/');

    cy.get('button:contains("Add to Basket")').its('length').should('eq', 10);

    cy.scrollTo('bottom');

    cy.contains('1–10 of 15 items').should('be.visible');

    cy.get('button[aria-label="Next page"]:first').click();

    cy.scrollTo('bottom');

    cy.contains('11–15 of 15 items').should('be.visible');

    cy.get('button[aria-label="Previous page"]:first').click();

    cy.scrollTo('bottom');

    cy.contains('1–10 of 15 items').should('be.visible');
  });
});
