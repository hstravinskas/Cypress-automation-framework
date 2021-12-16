/// <reference types="Cypress"/>
class TheInternetHomepagePO{
    navigateToLogin(){
        cy.get("[href='/login']").click();
    }
};
export default TheInternetHomepagePO;