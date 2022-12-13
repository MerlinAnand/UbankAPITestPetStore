///<reference types="Cypress" />

import  petStoreRequest   from '../fixtures/petStore.json'

//function to find the Pet using ID
Cypress.Commands.add('findPetByID', (id) => {
    cy.request({
      method : 'GET',
      url : Cypress.env('url')+id,
      headers: { 'api-key': Cypress.env('special-key') }   
    }).then((res)=> {
      return res.status 
    }) 
  })

//function to create Pet using id and petname
Cypress.Commands.add('createPet', (id, petName) => {
    const requestBody = petStoreRequest.createPet
    requestBody.id = id
    requestBody.category.id = id
    requestBody.name = petName
    cy.request({
      method : 'POST',
      url : Cypress.env('url'),
      headers: { 'api-key': Cypress.env('special-key') },
      body: requestBody 
    }).then((res)=> {
      expect(res.status).to.eq(200)
      return res.status
    }) 
})
  
//function to update Pet using id and petname
  Cypress.Commands.add('updatePet', (id, petName) => {
    const requestBody = petStoreRequest.updatePet
    requestBody.id = id
    requestBody.category.id = id
    requestBody.name = petName
    cy.request({
      method : 'PUT',
      url : Cypress.env('url'),
      headers: { 'api-key': Cypress.env('special-key') },
      body: requestBody 
    }).then((res)=> {
      expect(res.status).to.eq(200)
      return res.status
    }) 
  })
  
  //function to delete Pet using id 
  Cypress.Commands.add('deletePet', (id) => {
    cy.request({
      method : 'DELETE',
      url : Cypress.env('url')+id,    
      headers: { 'api-key': Cypress.env('special-key') }   
    }).then((res)=> {    
      expect(res.status).to.eq(200)
      return res.status
    }) 
  })
  
  //function to check error message post delete
  Cypress.Commands.add('checkErrorMsg', (id,errorMessage) => {
    cy.request({
      method : 'GET',
      url : Cypress.env('url')+id,
      failOnStatusCode: false,
      headers: { 'api-key': Cypress.env('special-key') }   
    }).then((res)=> {
      expect(res.body.message).to.be.equal(errorMessage)
      return res.status
    }) 
  }) 
  
  //function to check pet details
  Cypress.Commands.add('checkPetDetails', (id,petName) => {
    cy.request({
      method : 'GET',
      url : Cypress.env('url')+id,
      headers: { 'api-key': Cypress.env('special-key') }   
    }).then((res)=> {    
      expect(res.body.name).to.be.equal(petName)
      return res.status
    })  
  })