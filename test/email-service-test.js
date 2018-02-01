var Employee = require('../src/models/employee.js')
var chai = require('chai');
var expect = chai.expect;
var EmailService = require('../src/email-service.js')
var Email = require('../src/models/email.js')

describe('Email Service', function() {

	it('should have a send function', function() {
		
		var emailService = new EmailService()

		expect(emailService).to.have.property('send');

    });

    it('should send email', function() {
		
		var emailService = new EmailService()

		var newEmail = new Email('Testing service', 'We are testing','test@email.com')

		var response = emailService.send(newEmail)

		expect(response).to.be.equals(200)


    });

})