/// <reference types="Cypress"/>
class TheInternetLoginPO{
    performLogin(username, password){
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('i.fa-sign-in').click({force:true})
    }
};
export default TheInternetLoginPO;