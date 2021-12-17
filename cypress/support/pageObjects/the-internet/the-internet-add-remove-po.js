/// <reference types="Cypress"/>
class TheInternetAddRemovePO{
    addMultipleElements(x){
        for(let i=0; i<x; i++){
            cy.get("[onclick='addElement()']").click();
        }
    }
    removeAllElements(){
        cy.get("[onclick='deleteElement()']").click({multiple:true})
    }
    removeMultipleElements(x){
        for(let i=0; i<x; i++){
            cy.get("#elements > :nth-child(1)").click()
        }
    }
}
export default TheInternetAddRemovePO;