/// <reference types="Cypress"/>
const HomepagePO = require('../support/pageObjects/the-internet/the-internet_homepage_po');
const UploadPO = require('../support/pageObjects/the-internet/the-internet-upload-po');
const hPO = new HomepagePO;
const uPO = new UploadPO;

describe('Test if the upload functionality works as designed', () => {
    it("User should be able to upload a .jpg file", ()=>{
        cy.visit('/');
        hPO.navigateToUpload();
        uPO.uploadFile("computer.jpg");
        cy.get('#uploaded-files').should('contain.text',"computer.jpg")
    });
    it("User should be able to upload a .txt file", ()=>{
        cy.visit('/');
        hPO.navigateToUpload();
        uPO.uploadFile("../fixtures/text.txt");
        cy.get('#uploaded-files').should('contain.text',"text.txt")
    });
    it("User should be able to upload a .png file", ()=>{
        cy.visit('/');
        hPO.navigateToUpload();
        uPO.uploadFile("../fixtures/computer.png");
        cy.get('#uploaded-files').should('contain.text',"computer.png")
    });
});