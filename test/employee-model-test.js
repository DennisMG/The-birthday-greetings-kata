var Employee = require('../src/models/employee.js')
var chai = require('chai');
var expect = chai.expect;
var moment = require('moment')


describe('Employee Model', function() {
	it('should have property name, bornDate and email', function() {

		var employee = new Employee("carlos", moment('1992-01-01'), 'carlos@carlos.com')
		expect(employee).to.have.property('bornDate');
		expect(employee).to.have.property('email');
		expect(employee).to.have.property('name');

    });

})