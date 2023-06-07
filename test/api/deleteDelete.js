const request = require('supertest')
const baseUrl = require('../../env')

describe('Delete Request Delete', () => {
    it('Delete Delete', async () => {
        const response = request(baseUrl())
        .delete('/users/2')
        console.log((await response).status)
        //console.log((await response).body)
    })
})