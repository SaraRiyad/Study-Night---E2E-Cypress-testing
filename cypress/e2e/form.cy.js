describe("Create Set Form Valedation", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234/");
        cy.get("#cardSetPage").click();
        cy.get("button").click();
        cy.contains("label", "Card Set Title").should("be.visible");
    });
    it("Happy path passes", () => {
        cy.get("#titleInput")
            .should("be.visible")
            .type("Data Analysis")
            .should("have.value", "Data Analysis");
        cy.get('input[type= "submit"]').should("be.visible").click();
        cy.get('p[class= "error"]').should("not.exist");
        cy.get(".cardSets")
            .contains("li", "Data Analysis")
            .parent()
            .within(() => {
                cy.contains("li", "Terms: 0").should("be.visible");
            });
    });
    it("Unhappy path passes", () => {
        cy.get("#titleInput").should("be.visible").should("be.empty");
        cy.get('input[type= "submit"]').should("be.visible").click();
        cy.get('p[class= "error"]').should("be.visible");
    });
});

describe("Add Card Form Valedation", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234/");
        cy.get("#cardSetPage").click();
    });
    it("Happy path passes", () => {
        cy.get("button").click();
        cy.get("#titleInput").type("Data Analysis");
        cy.get('input[type= "submit"]').click();
        cy.get(".cardSets").contains("li", "Data Analysis").parent().click();
        cy.contains("button", "Shuffle Cards").should("be.visible");
        cy.contains("button", "Add New Card").should("be.visible").click();
        cy.contains("h3", "Create Cards").should("be.visible");
        cy.get("form").within(() => {
            cy.contains("label", "Term").should("be.visible");
            cy.get('input[name="termInput"]').should("exist").type("ETL");
            cy.contains("label", "Description").should("be.visible");
            cy.get('input[name="descriptionInput"]')
                .should("exist")
                .type("Extract, Transform, Load");
        });
        cy.get('input[type="submit"]').should("be.visible").click();
    });
    it("Unhappy path passes", () => {});
});
