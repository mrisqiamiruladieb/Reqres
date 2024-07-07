// import library
const request = require("supertest");
// assert
const assert = require("chai").assert;
const expect = require("chai").expect;
// validasi json schema
const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true }); // Enabling detailed reporting of all errors
// helper
const baseUrl = require("../../env");
const DATA = require("../../data/userData.js");

describe("Delete Request Delete", () => {
  it("Delete an user", async () => {
    //path params
    let pathParams = 2;
    const response = request(baseUrl())
      .delete("/users/" + pathParams)
      .set("accept", "*/*");

    console.log("-----------Request-----------");
    console.log("Method: ", (await response).request.method);
    console.log("Url: ", (await response).request.url);
    console.log("Header:\n", (await response).request.header);

    console.log("\n-----------Response-----------");
    console.log("Response Status Code: " + (await response).status);

    // assert
    // Check response status must be equal to 204
    expect(204, "response status must be equal to 204").to.equal(
      (await response).status
    );

    // cek respons bodi is empty
    expect((await response).body).to.be.empty;

    // check response body has a property
    expect((await response).body).to.not.have.property("updatedAt");
  });
});
