const should = require('chai').should();
const expect = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-fs'));
var assert = require('chai').assert;

const app = require('../app');

const request = require('supertest');

// const config = require('./test.config')
// const newUser = config.user1

const asset = chai
// test the NewsAPI_Auth API folder Structure

describe('NewsApi_DB Should contain the api Folder', () => {
    it("should contain api folder", (done) => {
        assert.isDirectory(__dirname + "/../api", "should contain API folder");
        done();
    })
    it("api folder should not empty", (done) => {
        assert.notIsEmptyDirectory(__dirname + "/../api", "API should not be empty");
        done();
    })

})
// Testing V1 of Auth Modules 
describe('API Should contain the V1 Folder', () => {
    it("should contain V1 folder", (done) => {
        assert.isDirectory(__dirname + "/../api/v1", "should contain V1 folder");
        done();
    })
    it("V1 folder should not empty", (done) => {
        assert.notIsEmptyDirectory(__dirname + "/../api/v1", "V1 should not be empty");
        done();
    })
})
// V1 should contain User Modules
describe('V1 Should contain the Users Folder', () => {
    it("should contain V1 folder", (done) => {
        assert.isDirectory(__dirname + "/../api/v1/news", "should contain V1 folder");
        done();
    })
    it("Users folder should not empty", (done) => {
        assert.notIsEmptyDirectory(__dirname + "/../api/v1/news", "Users should not be empty");
        done();
    })
})

// Testing test is implemented or Not
describe('NewsApi_Auth Should contain the test Folder', (done) => {
    it("should contain test folder", (done) => {
        assert.isDirectory(__dirname + "/../test", "should contain test folder");
        done();
    })
    it("test folder should not empty", (done) => {
        assert.notIsEmptyDirectory(__dirname + "/../test", "test should not be empty");
        done();
    })
})

