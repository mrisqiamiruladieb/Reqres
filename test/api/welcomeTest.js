const assert = require('chai').assert;
const app = require('../../assert')

//Asserting
//Cara assert menggunakan chai
describe('Welcome Test', function(){
    it('app should return welcome message', function(){
        assert.equal(app(), "welcome to QA course at myskill")
    })
})