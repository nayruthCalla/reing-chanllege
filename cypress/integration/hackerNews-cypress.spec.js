/* eslint-disable */
describe('HACKER NEWS - 2to2', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Renders the header text of the home page.', () => {
    cy.contains('HACKER NEWS');
  });
  it('Renders the navigation text in the All News view', () => {
    cy.contains('All');
  });
  it('Renders the text of the navigation in the view of my favorite news', () => {
    cy.contains('My faves');
  });

  it('Renders the pagination', () => {
    cy.contains('1');
  });

  it('Renders news filter options', () => {
    cy.get('[name="select"]').click();
    cy.contains('Angular');
    cy.contains('Reacts');
    cy.contains('Vuejs');
  });

  it('Click the my favorite button', () => {
    cy.get('[ data-test="buttonFave"]').click({ multiple: true });
    cy.contains('My faves').click();
  });
});
