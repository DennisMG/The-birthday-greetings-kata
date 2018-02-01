
var chai = require('chai');
var moment = require('moment')
var expect = chai.expect;
var EmailService = require('../src/email-service.js')
var FsRepository = require('../src/fsrepository.js')
var BirthdayService = require('../src/birthday-service.js')
var Employee = require('../src/models/employee.js')

describe('Birthday Service', function() {

    var fakeEmployee = new Employee('Carlos', moment('1992-02-01'), 'carlos@carlos.com')
    var fakeEmployee2 = new Employee('Maria', moment('1992-01-29'), 'email@email.com')
    var fakeEmployee3 = new Employee('Maria', moment('1992-03-29'), 'email@email.com')

    var fakeEmailService = EmailService()
    var RealRepo = FsRepository(__dirname + '/repository-test.txt') 


  	it('should send 0 emails because the repo is empty', function(done) {

  		var fakeEmployeeRepo = FakeEmployeeRepo([])
  		
    	var birthdayService = new BirthdayService(fakeEmployeeRepo, fakeEmailService)

      birthdayService.sendGreetings(moment('2018-01-31'),function(ids){
        
        expect(ids).to.have.lengthOf(0);
        
        done()
        
      })

  	});



    it('should send 0 email because no employee is having birthday', function(done) {

      var fakeEmployeeRepo = FakeEmployeeRepo([fakeEmployee, fakeEmployee2])
      
      var birthdayService = new BirthdayService(fakeEmployeeRepo, fakeEmailService)

      birthdayService.sendGreetings(moment('2018-01-01'), function(ids){
        
        expect(ids).to.have.lengthOf(0)
        
        done()
      })

    });



    it('should send 1 email because only 1 employee is turning X years', function(done) {

      var fakeEmployeeRepo = FakeEmployeeRepo([fakeEmployee, fakeEmployee2, fakeEmployee3])
      
      var birthdayService = new BirthdayService(RealRepo, fakeEmailService)

      birthdayService.sendGreetings(moment('2018-02-01'), function(ids){
        
        expect(ids).to.have.lengthOf(1)
        
        done()
      })

      


    });


});


function FakeEmployeeRepo(storedEmployees){
  return {
    all: function(callback){
      callback(storedEmployees)
    } 
  }
}

function FakeEmailService(params){
	return {
		send: function(){
      return 200
		}
	}
};

