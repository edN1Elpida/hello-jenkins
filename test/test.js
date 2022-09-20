var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello penghuni isekai', function(done) {
    request(app).get('/').expect('hello penghuni isekai', done);
  });
});