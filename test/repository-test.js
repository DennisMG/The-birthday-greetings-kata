var FsRepository = require('../src/fsrepository.js')
var chai = require('chai');
var expect = chai.expect;
var moment = require('moment')


describe('File System Repository', function() {
	it('should read employees from a file', function(done) {
		var all = []
		var repo = new FsRepository(__dirname + '/repository-test.txt')
		repo.all(function(allEmployees){
			all = allEmployees
			expect(all).to.have.lengthOf(2)
			done();
		})
		
	})

	it('should return empty array if the file doesnt exists', function(done) {
		var all = []
		var repo = new FsRepository(__dirname + '/invalid-repository-test.txt')
		repo.all(function(allEmployees){
			all = allEmployees
			expect(all).to.have.lengthOf(0)
			done();
		})
		
	})
})