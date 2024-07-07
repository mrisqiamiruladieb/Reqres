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

describe("Get Request Single User", () => {
  it("Get Single User", async () => {
      //path params
      let pathParams = 2;
    const response = request(baseUrl())
      .get("/users/" + pathParams)
      //.get('/users/23') //Single user not found
      .set("accept", "application/json");

    console.log("-----------Request-----------");
    console.log("Method: ", (await response).request.method);
    console.log("Url: ", (await response).request.url);
    console.log("Header:\n", (await response).request.header);

    console.log("\n-----------Response-----------");
    console.log("Response Status Code: " + (await response).status);
    console.log("Response Body:\n", (await response).body);

    // parse the response body
    // akses dan store array/objek respons bodi
    idResponse = (await response).body.data.id;

    // assert
    // Check response status must be equal to 200
    expect(200, "response status must be equal to 200").to.equal(
      (await response).status
    );

    // cek respons bodi not empty
    assert.isNotEmpty((await response).body);

    // check requests and response bodies equal
    assert.equal(idResponse, pathParams, "Unexpected id: " + idResponse);

    // check response body has a property
    // akses dan store array/objek respons bodi
    expect((await response).body).to.have.nested.property("data.email");
    assert.deepNestedInclude((await response).body, { "data.id": pathParams });

    // validasi json schema
    console.log("\n-----------Validasi JSON Schema-----------");
    const isValid = ajv.validate(
      DATA.VALID_GET_SINGLE_USER_SCHEMA,
      (await response).body
    );
    if (!isValid) {
      console.error("Validation errors:", ajv.errorsText());
    } else {
      console.log("JSON data is valid");
    }
  });
});
