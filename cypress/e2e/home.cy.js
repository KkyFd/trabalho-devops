describe('Home Page Tests', () => {
    it('Deve carregar a página inicial', () => {
      cy.visit('/');
      cy.wait(2000);
      cy.contains('Yi Sang');
    });
  });
  