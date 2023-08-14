export const RequestHelpers = {
  sendGetRequest(endPoint, headers = {}) {
    cy.request({
      method: "GET",
      url: Cypress.env("apiUrl") + endPoint,
      headers: headers,
      failOnStatusCode: false,
    }).as("getResp");
  },

  sendPostRequest(endPoint, headers = {}, body) {
    cy.request({
      method: "POST",
      url: Cypress.env("apiUrl") + endPoint,
      headers: headers,
      body: body,
      failOnStatusCode: false,
    }).as("postResp");
  },

  sendPutRequest(endPoint, headers = {}, body) {
    cy.request({
      method: "PUT",
      url: Cypress.env("apiUrl") + endPoint,
      headers: headers,
      body: body,
      failOnStatusCode: false,
    }).as("putResp");
  },

  sendDeleteRequest(endPoint, headers, body = {}) {
    cy.request({
      method: "DELETE",
      url: Cypress.env("apiUrl") + endPoint,
      headers: headers,
      body: body,
      failOnStatusCode: false,
    }).as("deleteResp");
  },
};
