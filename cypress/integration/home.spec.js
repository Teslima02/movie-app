/// <reference types="cypress"/>

context('Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should find our welcome page message', () => {
        cy.get('h1').contains('Welcome');
    });
});