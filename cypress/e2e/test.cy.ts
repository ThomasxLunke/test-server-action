describe("Dog breeds page", () => {
  beforeEach(() => {
    cy.task("startMockServer").should("not.be.undefined");

    cy.task("setupResponse", { 
      path: "https://dogapi.dog/api/v2/breeds", 
      body: {        
        data: [
          {
            id: "mocked-id",
            type: "breed",
            attributes: {
              name: "Mocked Breed",
              description: "This is a mocked description",
            },
            relationships: {},
          },
        ],
      }, 
      statusCode: 200,
    }).should("not.be.undefined");
  });

  afterEach(() => {
    cy.task("stopMockServer").should("not.be.undefined");
  });

  it("displays mocked dog breeds", () => {
    cy.visit("/cypress-example");

    // Vérifie que les données mockées s'affichent
    cy.contains("Mocked Breed").should("be.visible");
    cy.contains("This is a mocked description").should("be.visible");
  });
});