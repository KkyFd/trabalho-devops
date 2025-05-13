describe('Biografia Page Tests', () => {
    it('Deve exibir biografia', () => {
      cy.visit('/src/pages/biografia.html');
      cy.contains('O Cientista do Espelho');
    });
  
    it('Deve haver imagens no carrossel e navegar corretamente', () => {
      cy.visit('/src/pages/biografia.html');
      
      cy.get('.carousel img').should('have.length.at.least', 4);
      
      cy.get('.carousel-image1').should('exist').and('be.visible');

      cy.get('.next').click();
      cy.get('.carousel-image1').should('not.be.visible');
      cy.get('.carousel-image2').should('be.visible');

      cy.get('.next').click();
      cy.get('.carousel-image2').should('not.be.visible');
      cy.get('.carousel-image3').should('be.visible');

      cy.get('.next').click();
      cy.get('.carousel-image3').should('not.be.visible');
      cy.get('.carousel-image4').should('be.visible');

      cy.get('.prev').click();
      cy.get('.carousel-image4').should('not.be.visible');
      cy.get('.carousel-image3').should('be.visible');

      cy.get('.prev').click();
      cy.get('.carousel-image3').should('not.be.visible');
      cy.get('.carousel-image2').should('be.visible');

      cy.get('.prev').click();
      cy.get('.carousel-image2').should('not.be.visible');
      cy.get('.carousel-image1').should('be.visible');
    });
  });
  