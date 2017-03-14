module.exports = {
	'Verify JSON': function (browser){
		
		var xhr = new XMLHttpRequest();
		xhr.open('get', 'http://program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json', true);
		xhr.responseType = 'json';
		 var status = xhr.status;
		if (status == 200) {
			resolve(xhr.response);
		} else {
			 reject(status);
      }
	}	
	
}