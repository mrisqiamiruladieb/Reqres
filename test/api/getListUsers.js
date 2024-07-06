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

describe("Get Request List Users", () => {
  it("Get List Users", async () => {
    const response = request(baseUrl())
      // .get("/users?page=2")
      .get("/users")
      // query params
      .query({ page: 2 });

    console.log("-----------Request-----------");
    console.log("Method: ", (await response).request.method);
    console.log("Url: ", (await response).request.url);
    console.log("Header:\n", (await response).request.header);

    console.log("\n-----------Response-----------");
    console.log("Response Status Code: " + (await response).status);
    console.log("Response Body:\n", (await response).body);

    // parse the response body
    // akses dan store array/objek respons bodi
    firstNameId7Response = (await response).body.data[0].first_name;
    lastNameId8Response = (await response).body.data[1].last_name;

    // assert
    // Check response status must be equal to 200
    expect(200, "response status must be equal to 200").to.equal(
      (await response).status
    );

    // cek respons bodi not empty
    assert.isNotEmpty((await response).body);

    // check requests and response bodies equal
    assert.equal(firstNameId7Response, "Michael", "Unexpected first name id 7: " + firstNameId7Response);
    assert.equal(lastNameId8Response, "Ferguson", "Unexpected last name id 8: " + lastNameId8Response);

    // check response body has a property
    // akses dan store array/objek respons bodi
    expect((await response).body).to.have.nested.property('data[2].avatar');
    assert.deepNestedInclude((await response).body, {'data[2].id': 9});

    // validasi json schema
    console.log("\n-----------Validasi JSON Schema-----------");
    const isValid = ajv.validate(DATA.VALID_GET_LIST_USERS_SCHEMA, (await response).body);
    if (!isValid) {
      console.error("Validation errors:", ajv.errorsText());
    } else {
      console.log("JSON data is valid");
    }
  });
});
