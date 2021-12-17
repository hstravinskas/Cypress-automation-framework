/// <reference types="Cypress"/>
class TheInternetHomepagePO{
    navigateToLogin(){
        cy.get("ul > :nth-child(21) > a").click();
    }
    navigateToAddRemove(){
        cy.get("ul > :nth-child(2) > a").click();
    }
};
export default TheInternetHomepagePO;