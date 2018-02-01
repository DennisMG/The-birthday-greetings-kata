


function emailService (){
	return{
		send: function(email){
			if(!email.subject || !email.email || !email.content)
				return 404
			return 200
		}
	}
}

module.exports = emailService