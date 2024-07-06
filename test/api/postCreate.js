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

describe("Post Request Create", () => {
  it("Create", async () => {
    const response = request(baseUrl())
      .post("/users")
      .send(DATA.CREATE_USER_DATA);

    console.log("-----------Request-----------");
    console.log("Method: ", (await response).request.method);
    console.log("Url: ", (await response).request.url);
    console.log("Header:\n", (await response).request.header);
    console.log("Request Body:\n", (await response).request._data);

    console.log("\n-----------Response-----------");
    console.log("Response Status Code: " + (await response).status);
    console.log("Response Body:\n", (await response).body);

    // parse the request body
    nameRequest = (await response).request._data.name;
    jobRequest = (await response).request._data.job;

    // parse the response body
    nameResponse = (await response).body.name;
    jobResponse = (await response).body.job;

    // assert
    // Check response status must be equal to 201
    expect(201, "response status must be equal to 201").to.equal(
      (await response).status
    );

    // cek respons bodi not empty
    expect((await response).body).to.not.be.empty;
    assert.isNotEmpty((await response).body);

    // check requests and response bodies equal
    assert.equal(nameResponse, nameRequest, "Unexpected name: " + nameResponse);
    assert.equal(jobResponse, jobRequest, "Unexpected job: " + jobResponse);

    // check response body has a property
    expect((await response).body).to.haveOwnProperty("id");
    expect((await response).body).to.have.own.property("createdAt");

    // validasi json schema
    console.log("\n-----------Validasi JSON Schema-----------");
    const isValid = ajv.validate(DATA.VALID_CREATE_USER_SCHEMA, (await response).body);
    if (!isValid) {
      console.error("Validation errors:", ajv.errorsText());
    } else {
      console.log("JSON data is valid");
    }
  });
});