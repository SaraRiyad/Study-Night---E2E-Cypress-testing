describe("Navigation Page Rendering testing", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234/");
        cy.get("nav");
    });
    it("Open card set page", () => {
        cy.get('[data-cy="cardSet"]').click();
        cy.get('[data-cy="study-set-header"]').should("be.visible");
        cy.get(".cardSets").should("have.length.at.least", 4);
        cy.get(".cardSets").each((card) => {
            cy.wrap(card).should("be.visible");
        });
        cy.get('[data-cy="toggle_form"]').should("be.visible");
    });
    it("Open about page", () => {
        cy.get('[data-cy="about"]').click();
        cy.contains("h2", "About Study Night").should("be.visible");
        cy.contains("h3", "Flash Cards Anywhere Anytime").should("be.visible");
        cy.contains("p").should("be.visible");
    });
    it("Open home page", () => {
        cy.get('[data-cy="home"]').click();
        cy.get('[data-cy="home_header"]').should("contain", "Study Night");
        cy.contains(
            "h2",
            "A Digital Study Solution for the Modern World",
        ).should("be.visible");
    });
});
