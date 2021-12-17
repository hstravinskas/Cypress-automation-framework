/// <reference types="Cypress"/>
const HomepagePO = require('../support/pageObjects/the-internet/the-internet_homepage_po');
const CheckboxesPO = require('../support/pageObjects/the-internet/the-internet-checkboxes-po');
const hPO = new HomepagePO;
const cPO = new CheckboxesPO;

describe('Test if the checkboxes work properly on the page', () => {
    
    it('Verify that user is able to select both checkboxes', () => {
        cy.visit('/');
        hPO.navigateToCheckboxes();
        cPO.bothCheckboxesSelected();
        cy.get("form#checkboxes > input:nth-of-type(1)").should('be.checked');
        cy.get("form#checkboxes > input:nth-of-type(2)").should('be.checked');
    });

    it('Verify that user is able to select first checkbox only', () => {
        cy.visit('/');
        hPO.navigateToCheckboxes();
        cPO.firstCheckboxSelected();
        cy.get("form#checkboxes > input:nth-of-type(1)").should('be.checked');
        cy.get("form#checkboxes > input:nth-of-type(2)").should('not.be.checked');
    });

    it('Verify that user is able to select second checkbox only', () => {
        cy.visit('/');
        hPO.navigateToCheckboxes();
        cy.get("form#checkboxes > input:nth-of-type(2)").should('be.checked');
        cy.get("form#checkboxes > input:nth-of-type(1)").should('not.be.checked');
    });

    it('Verify that user is able to uncheck both checkboxes', () => {
        cy.visit('/');
        hPO.navigateToCheckboxes();
        cPO.bothCheckboxesUnselected();
        cy.get("form#checkboxes > input:nth-of-type(2)").should('not.be.checked');
        cy.get("form#checkboxes > input:nth-of-type(1)").should('not.be.checked');
    });
});