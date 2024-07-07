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

describe("Post Request Login", () => {
  it("Login - Successful", async () => {
    const response = request(baseUrl())
      .post("/login")
      .set({ "Content-Type": "application/json", Accept: "application/json" })
      .send(DATA.LOGIN_USER_DATA);

    // parsing request body
    // console.log("Data email: " + DATA.CREATE_USER_DATA.email)

    console.log("-----------Request-----------");
    console.log("Method: ", (await response).request.method);
    console.log("Url: ", (await response).request.url);
    console.log("Header:\n", (await response).request.header);

    console.log("\n-----------Response-----------");
    console.log("Response Status Code: " + (await response).status);
    console.log("Response Body:\n", (await response).body);

    // assert
    // Check response status must be equal to 200
    expect(200, "response status must be equal to 200").to.equal(
      (await response).status
    );

    // cek respons bodi not empty
    assert.isNotEmpty((await response).body);

    // check response body has a property
    expect((await response).body).to.have.property("token");

    // validasi json schema
    console.log("\n-----------Validasi JSON Schema-----------");
    const isValid = ajv.validate(
      DATA.VALID_LOGIN_SCHEMA,
      (await response).body
    );
    if (!isValid) {
      console.error("Validation errors:", ajv.errorsText());
    } else {
      console.log("JSON data is valid");
    }
  });

  it("Login - unsuccessful", async () => {
    const response = request(baseUrl())
      .post("/login")
      .set({ "Content-Type": "application/json", Accept: "application/json" })
      .send({
        email: "peter@klaven",
      });

    console.log("-----------Request-----------");
    console.log("Method: ", (await response).request.method);
    console.log("Url: ", (await response).request.url);
    console.log("Header:\n", (await response).request.header);

    console.log("\n-----------Response-----------");
    console.log("Response Status Code: " + (await response).status);
    console.log("Response Body:\n", (await response).body);

    // assert
    // Check response status must be equal to 400
    expect(400, "response status must be equal to 400").to.equal(
      (await response).status
    );

    // cek respons bodi not empty
    assert.isNotEmpty((await response).body);

    // check response body has a property
    expect((await response).body).to.have.property("error");

    // validasi json schema
    console.log("\n-----------Validasi JSON Schema-----------");
    const isValid = ajv.validate(
      DATA.INVALID_LOGIN_SCHEMA,
      (await response).body
    );
    if (!isValid) {
      console.error("Validation errors:", ajv.errorsText());
    } else {
      console.log("JSON data is valid");
    }
  });
});
