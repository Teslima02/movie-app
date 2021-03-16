/// <reference types="cypress"/>

context('Navbar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should find home link', () => {
        cy.get('h1').contains('Welcome');
    });
});