const request = require('supertest')
const assert = require('chai').assert;
const expect = require('chai').expect
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Post Request Create', () => {
    it('Create', async () => {
        const response = request(baseUrl())
        .post('/users')
        .send(DATA.CREATE_USER_DATA)
        
        console.log("-----------Request-----------")
        console.log("Method: ", (await response).request.method)
        console.log("Url: ", (await response).request.url)
        console.log("Header:\n", (await response).request.header)
        console.log("Request Body:\n", (await response).request._data)

        console.log("\n-----------Response-----------")
        console.log("Response Status Code: " + (await response).status)
        console.log("Response Body:\n", (await response).body)

        // parse the request body
        nameRequest = (await response).request._data.name
        jobRequest = (await response).request._data.job

        // parse the response body
        nameResponse = (await response).body.name
        jobResponse = (await response).body.job

        // assert
        // Check response status must be equal to 201
        expect(201, "response status must be equal to 201").to.equal((await response).status)

        // check requests and response bodies equal
        assert.equal(nameResponse, nameRequest, "Unexpected name: " + nameResponse)
        assert.equal(jobResponse, jobRequest, "Unexpected job: " + jobResponse)

        // check response body has a property
        expect((await response).body).to.haveOwnProperty('id')
        expect((await response).body).to.have.own.property('createdAt')
    })

})