describe('Home Page Tests', () => {
    it('Deve carregar a página inicial', () => {
      cy.visit('/src/pages/');
      cy.contains('Yi Sang');
    });
  });
  