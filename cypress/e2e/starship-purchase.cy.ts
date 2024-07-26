import { starshipResponse } from '../../app/tests/fixtures/starship';

describe('starship purchase', () => {
  before(() => {
    cy.intercept('GET', 'https://swapi.dev/api/starships', {
      statusCode: 200,
      body: starshipResponse,
    });
  });

  it('should add starship to basket', () => {
    cy.visit('/');

    cy.contains('Add to Basket').click();

    cy.contains(
      `Added 1 - ${starshipResponse.results[0].name} to basket`
    ).should('be.visible');
  });

  it('should add multiple starships to basket', () => {
    cy.visit('/');

    cy.get('button[title="Increment number"]:first').click();
    cy.get('button[title="Increment number"]:first').click();

    cy.contains('Add to Basket').click();

    cy.contains(
      `Added 3 - ${starshipResponse.results[0].name} to basket`
    ).should('be.visible');
  });
});
