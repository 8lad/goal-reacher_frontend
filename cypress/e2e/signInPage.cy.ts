describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('a').as('links');
    cy.get('@links').first().click();
  });
});
