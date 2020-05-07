describe("My First Test", function() {
    it("Visits the cardistryStats.", function() {
        cy.visit("http://localhost:3000");
        cy.get(".Arrow-right").click().click().click().click();
    });
})
;
