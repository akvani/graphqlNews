// const chai = require('chai').should();
// const expect = chai.expect;
// const request = require('supertest');
// const app = require('../app');

// const config = require('./test.config');
// // Test Users Route
// describe('Testing to Register a user', () => {
//     it("should Get All Users", (done) => {
//         request(app)
//             .post('/api/v1/users')
//             .send({ query: '{ users{userName,fullName,_id,password}}' })
//             .expect(200)
//             .end((err, res) => {
//                 res.body.data.users[0].should.have.property('userName')
//             })
//         done()
//     })
//     it("Shoud Register a New User", ((done) => {
//         request(app)
//             .post('/api/v1/users')
//             .send({ query: 'mutation{ register(userInput:{userName:"newkumar",fullName:"Kumar D",email:"newkumar@gmail.com", password:"kumar@123"}){_id}}' })
//             .expect(200)
//             .end((err, res) => {
//                 if (err)
//                     done()
//                 res.body.data.register.should.have.property('_id')
//             })
//         done()
//     }))

// })

// // Test a login
// describe("Test User Login", () => {
//     it("Shoud Login a valid User", ((done) => {
//         request(app)
//             .post('/api/v1/users')
//             .send({ query: '{ login(username:"dkumar",password:"kumar@123"){userId}}' })
//             .expect(200)
//             .end((err, res) => {
//                 if (err)
//                     done()
//                 res.body.data.login.should.have.property('userId')
//             })
//         done()
//     }))
// })
