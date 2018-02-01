var fs = require('fs')
var Employee = require('../src/models/employee.js')
var moment = require('moment')

function Repository (path){

	function parseFileInputString(input){
		var employees = []
		var lines = input.split('\n')
		
		lines.forEach(function(line){
			if (!isHeader(line) && line !== ''){
				employees.push(buildEmployee(line))
			}
		})
		return employees
	}
	function isHeader(line){
		return line.startsWith('last_name')
	}

	function buildEmployee(line){
		var tokens = line.split(', ')
		return new Employee(tokens[1] + ' '+tokens[0], moment(tokens[2], 'YYYY/MM/DD'), tokens[3] )
	}

	return {
		path: path,
		all: function(callback){
			fs.readFile(this.path, 'utf8', function(err, data){
				if (err) {callback([]);}
				var array = parseFileInputString(data)
				callback(array)
			})
			
		}
	}

}

module.exports = Repository