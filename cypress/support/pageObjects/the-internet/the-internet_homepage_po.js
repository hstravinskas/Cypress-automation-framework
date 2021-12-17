/// <reference types="Cypress"/>
class TheInternetHomepagePO{
    navigateToLogin(){
        cy.get("ul > :nth-child(21) > a").click();
    }
    navigateToAddRemove(){
        cy.get("ul > :nth-child(2) > a").click();
    }
    navigateToCheckboxes(){
        cy.get("ul > :nth-child(6) > a").click();
    }
};
export default TheInternetHomepagePO;