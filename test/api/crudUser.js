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

// inisialisasi variabel global
let myId;

describe("CRUD User", () => {
  it("Create an user", async () => {
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
    myId = (await response).body.id;

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
    const isValid = ajv.validate(
      DATA.VALID_CREATE_USER_SCHEMA,
      (await response).body
    );
    if (!isValid) {
      console.error("Validation errors:", ajv.errorsText());
    } else {
      console.log("JSON data is valid");
    }
  });

  it("Get Single User", async () => {
    //path params
    let pathParams = 2;
    // let pathParams = myId;
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

  it("Get List Users", async () => {
    const response = request(baseUrl())
      // .get("/users?page=2")
      .get("/users")
      // query params
      .query({ page: 2 })
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
    assert.equal(
      firstNameId7Response,
      "Michael",
      "Unexpected first name id 7: " + firstNameId7Response
    );
    assert.equal(
      lastNameId8Response,
      "Ferguson",
      "Unexpected last name id 8: " + lastNameId8Response
    );

    // check response body has a property
    // akses dan store array/objek respons bodi
    expect((await response).body).to.have.nested.property("data[2].avatar");
    assert.deepNestedInclude((await response).body, { "data[2].id": 9 });

    // validasi json schema
    console.log("\n-----------Validasi JSON Schema-----------");
    const isValid = ajv.validate(
      DATA.VALID_GET_LIST_USERS_SCHEMA,
      (await response).body
    );
    if (!isValid) {
      console.error("Validation errors:", ajv.errorsText());
    } else {
      console.log("JSON data is valid");
    }
  });

  it("Update an user", async () => {
    //path params
    let pathParams = 2;
    const response = request(baseUrl())
      .put("/users/" + pathParams)
      .send(DATA.UPDATE_USER_DATA)
      .set("accept", "application/json");

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
    // Check response status must be equal to 200
    expect(200, "response status must be equal to 200").to.equal(
      (await response).status
    );

    // cek respons bodi not empty
    expect((await response).body).to.not.be.empty;

    // check requests and response bodies equal
    assert.equal(nameResponse, nameRequest, "Unexpected name: " + nameResponse);
    assert.equal(jobResponse, jobRequest, "Unexpected job: " + jobResponse);

    // check response body has a property
    expect((await response).body).to.have.own.property("updatedAt");

    // validasi json schema
    console.log("\n-----------Validasi JSON Schema-----------");
    const isValid = ajv.validate(
      DATA.VALID_UPDATE_USER_SCHEMA,
      (await response).body
    );
    if (!isValid) {
      console.error("Validation errors:", ajv.errorsText());
    } else {
      console.log("JSON data is valid");
    }
  });

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
