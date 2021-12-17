/// <reference types="Cypress"/>
class TheInternetCheckboxesPO{
    bothCheckboxesSelected(){
        cy.get("form#checkboxes > input:nth-of-type(1)").check()
    };
    firstCheckboxSelected(){
        cy.get("form#checkboxes > input:nth-of-type(1)").check()
        cy.get("form#checkboxes > input:nth-of-type(2)").uncheck()
    };
    bothCheckboxesUnselected(){
        cy.get("form#checkboxes > input:nth-of-type(2)").uncheck()
    };
}
export default TheInternetCheckboxesPO;