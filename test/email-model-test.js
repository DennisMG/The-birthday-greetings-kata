
var chai = require('chai');
var expect = chai.expect;
var Email = require('../src/models/email.js')

describe('Email model', function() {

	it('should have properties', function() {
		
		var email = new Email('','','')

		expect(email).to.have.property('subject');
		expect(email).to.have.property('content');
		expect(email).to.have.property('email');
		expect(email).to.have.property('toString');

    });

    it('should compose a message', function() {
		
		var email = new Email('Happy birthday!', 'Happy birthday, dear John!', 'john@email.com')	

		expect(email.toString()).to.be.equals('Subject: Happy birthday!\n\n'+
 											  'Happy birthday, dear John!')	

		

    });

})