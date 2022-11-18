/// <reference types="Cypress" />

import {faker} from '@faker-js/faker'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('try to access a room with the wrong code', () => {
        const randomCharacters = faker.random.alphaNumeric(10)
        cy.get('input')
            .should('be.empty')
            .type(randomCharacters)
            .should('have.value', randomCharacters)
        
        cy.get('.button')
            .click();
    });
})