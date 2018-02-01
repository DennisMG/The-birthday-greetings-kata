function Email (subject, content, email){

	return {
		subject: subject,
		content: content,
		email: email,		
		toString: function(){
			return 'Subject: ' + subject + '\n\n' + content 
		}
	}

	



}

module.exports = Email