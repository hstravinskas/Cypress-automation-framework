/// <reference types="Cypress"/>
const HomepagePO = require('../support/pageObjects/the-internet/the-internet_homepage_po');
const AddRemovePO = require('../support/pageObjects/the-internet/the-internet-add-remove-po');
const hPO = new HomepagePO;
const arPO = new AddRemovePO;

describe('Test the add element and remove functionality on the page', () => {
    
    it('Verify that user can add x amount of elements and remove them all', () => {
        let numberOfElementsToAdd = 5;
        cy.visit('/');
        hPO.navigateToAddRemove();
        arPO.addMultipleElements(numberOfElementsToAdd);
        arPO.removeAllElements();
        cy.get('.added-manually').should('not.exist')
    });

    it('Verify that user can add x amount of elements and remove some of them', () => {
        let numberOfElementsToAdd = 5;
        let numberOfElementsToRemove = 5;
        cy.visit('/');
        hPO.navigateToAddRemove();
        arPO.addMultipleElements(numberOfElementsToAdd);
        arPO.removeMultipleElements(numberOfElementsToRemove);
        if (numberOfElementsToAdd > numberOfElementsToRemove){
            cy.get('.added-manually').should('exist')
        }
        else{
            cy.get('.added-manually').should('not.exist')
        }
    });
});