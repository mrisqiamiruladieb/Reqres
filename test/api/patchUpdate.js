const request = require('supertest')
const baseUrl = require('../../env')

describe('Patch Request Update', () => {
    it('Update', async () => {
        const response = request(baseUrl())
        .patch('/users/2')
        .send({
            "name": "morpheus",
            "job": "lion resident"
        })
        console.log((await response).status)
        console.log((await response).body)
    })

})