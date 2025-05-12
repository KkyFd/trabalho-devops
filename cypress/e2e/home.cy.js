describe('Home Page Tests', () => {
    it('Deve carregar a página inicial', () => {
      cy.visit('http://localhost:8080/src/pages/index.html');
      cy.contains('Yi Sang');
    });
  });
  