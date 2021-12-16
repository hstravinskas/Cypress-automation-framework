/// <reference types="Cypress"/>
const HomepagePO = require('../support/pageObjects/the-internet/the-internet_homepage_po');
const LoginPO = require('../support/pageObjects/the-internet/the-internet-login-po');
const hPO = new HomepagePO;
const lPO = new LoginPO;

describe('Test the login functionality', () => {
    
    it('Verify that user is able to login', () => {
        cy.visit('/');
        hPO.navigateToLogin();
        cy.fixture("../fixtures/login_data.json").then((user) => {
            lPO.performLogin(user.correct.username,user.correct.password)
        })
        cy.get('#flash').should('contain.text','You logged into a secure area')
        cy.get('[href="/logout"]').should('exist')
    });

    it('Verify that user gets an error when entering wrong username', () => {
        cy.visit('/');
        hPO.navigateToLogin();
        cy.fixture("../fixtures/login_data.json").then((user) => {
            lPO.performLogin(user.incorrectUsername.username,user.incorrectUsername.password)
        })
        cy.get('#flash').should('contain.text', " Your username is invalid!")
    });

    it('Verify that user gets an error when entering wrong password', () => {
        cy.visit('/');
        hPO.navigateToLogin();
        cy.fixture("../fixtures/login_data.json").then((user) => {
            lPO.performLogin(user.incorrectPassword.username,user.incorrectPassword.password)
        })
        cy.get('#flash').should('contain.text', "Your password is invalid!")
    });
});