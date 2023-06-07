const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request Example', () => {
    const response = request(baseUrl())
    .post('/register')
    .send({
        "email": "sydney@fife"
    })

    it('response status equal to 400', async () => {
        //Check response status harus sama dengan 400
        expect((await response).status).to.equal(400)
    })

    it('response body to haveOwnProperty', async () => {
        //Expect dalam body response terdapat value error
        expect((await response).body).to.haveOwnProperty('error')
    })

    //Reporting in mochawesome
})