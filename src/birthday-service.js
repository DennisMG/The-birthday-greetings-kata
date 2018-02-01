var Email = require('./models/email.js')

function birthdayService (employeeRepository, emailService){

	this.sendGreetings = function(date, callback){

		var allEmployees = employeeRepository.all(function(allEmployees){

			var emailsSent = []

			
			allEmployees.forEach(function(employee){
				var email = new Email('Happy birthday!', 'Happy birthday, dear '+employee.name+'!', employee.email)
				if(isHavingBirthday(employee, date) && emailService.send(email) === 200){
					emailsSent.push(employee) 
				}

			})

			callback(emailsSent) 

		})
		
	}

	function isHavingBirthday(employee, date){

		if(employee.bornDate.date() == date.date() && employee.bornDate.month() == date.month()){
				return true
		}
		return false
	}
}

module.exports = birthdayService