Feature: Validate Petstore - Create, Update, Retrieve and Delete Operation
 
    Scenario Outline: Search a Pet by ID
    Given I create a new pet "<id>" "<Petname>" 
    When I build API request to search for a pet by id "<id>"
    Then I validate the pet details "<id>" "<Petname>"
    Examples:
    | Petname | id   | 
    | dog8    | 123  |
 
    Scenario Outline: Update Pet Name
    Given I build API request to update the pet with name "<id>" "<Petname>"
    Then I validate the pet details "<id>" "<Petname>"
    Examples:
    | Petname | id   | 
    | Cat8    | 123  |
        
    Scenario Outline: Delete Pet by ID
    Given I build API request to delete the pet by id "<id>" 
    Then I validate the message "<id>" "<errormessage>"
    Examples:
    | id  | errormessage |
    | 123 | Pet not found| 