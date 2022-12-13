///<reference types="Cypress" />
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import '../../support/utilities' 

Given("I create a new pet {string} {string}", function (id,petname) {
  cy.createPet(id,petname).then((response) => {
    expect(response).to.eq(200)
  }) 
});

When("I build API request to search for a pet by id {string}", function (id) { 
  cy.findPetByID(id).then((response) => {
    expect(response).to.eq(200)
  })
});

When("I build API request to update the pet with name {string} {string}" , function (id, petname) { 
  cy.updatePet(id,petname).then((response) => {
    expect(response).to.eq(200)
  })  
});

Then("I validate the pet details {string} {string}", function (id, petname) {  
  cy.checkPetDetails(id,petname).then((response) => {
    expect(response).to.eq(200)
  })
});

Given("I build API request to delete the pet by id {string}", function (id) { 
  cy.deletePet(id).then((response) => {
    expect(response).to.eq(200)
  })    
});

Then("I validate the message {string} {string}", function (id, errormessage){
  cy.checkErrorMsg(id,errormessage).then((response) => {
    expect(response).to.eq(404)
  })  
});