/// <reference types="Cypress"/>
class TheInternetUploadPO{
    uploadFile(file){
        console.log(file)
        cy.get('#file-upload').attachFile(file);
        cy.get('#file-submit').click();
    }
};
export default TheInternetUploadPO;