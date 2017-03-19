module.exports = {
	before : function (browser) {
	browser
		.windowMaximize()
		.url('http://abc.net.au/news');
	},
  'Verify Page Load' : function (browser) {

	browser
		.waitForElementVisible('body', 1000);  
	browser.execute("return document.readyState;", function(result) {
  	  if(result.value = 'complete') {
		console.log("Page Loaded Succesfully");	
	  };
	})
	      .verify.title("ABC News (Australian Broadcasting Corporation)");
	
  },	
  'Verify News Banner' : function (browser, done) {

	browser
		.useXpath()			//Locating the element "News Banner"
		.waitForElementVisible('//*[@id="header"]/div[1]/a/img[2]', 1000);
		console.log("News Banner is Present");
	
 },
  'Navigate to Just In' : function (browser, done) {
	
	browser	
		.useXpath()
		//Locating the menu item "JustIn"
		.waitForElementVisible('//*[@id="n-justin"]/a', 5000)
		.click('//*[@id="n-justin"]/a')
		//Waiting for the page header with text "JustIn" to bet displayed
		.waitForElementVisible('//*[@id="container_subheader"]/div/div/h1', 5000)
		.verify.containsText('//*[@id="container_subheader"]/div/div/h1', 'Just In');
			
 },

  'Verify Author Present for every Article' : function (browser, done) {
	function iter(elements){
		if(elements.value.length>1){
			console.log('function called');	
			console.log(elements.value.length);	
			//Finding all the article titles and comparing it with the number of author elements retrieved
			browser.elements('xpath', '//*[@id="main_content"]/div[2]/div/div[1]/div/ul/li/h3', function(newElements){
				console.log(newElements.value.length);
				browser.verify.equal(elements.value.length, newElements.value.length);
        		})
		}
		};
	browser
		.useXpath()
		.waitForElementVisible('//*[@id="main_content"]/div/div/div[1]/div/ul/li', 5000)
		.elements('xpath','//*[@id="main_content"]/div[2]/div/div[1]/div/ul/li/div', iter);
 },
 
  'Verify TimeStamp Present for every Article' : function (browser, done) {
	function iter(elements){
		if(elements.value.length>1){
			console.log('function called');	
			console.log(elements.value.length);	
			//Finding all the article titles and comparing it with the number of Timestamp elements retrieved
			browser.elements('xpath', '//*[@id="main_content"]/div[2]/div/div[1]/div/ul/li/h3', function(newElements){
				console.log(newElements.value.length);
				browser.verify.equal(elements.value.length, newElements.value.length);
        		})
		}
		};
	browser
		.useXpath()
		.waitForElementVisible('//*[@id="main_content"]/div/div/div[1]/div/ul/li', 5000)
		.elements('xpath','//*[@id="main_content"]/div[2]/div/div[1]/div/ul/li/p[1]', iter);
 },

 'Verify Text Present for every Article' : function (browser, done) {
	function iter(elements){
		if(elements.value.length>1){
			console.log('function called');	
			console.log(elements.value.length);	
			//Finding all the article titles and comparing it with the number of Text elements retrieved
			browser.elements('xpath', '//*[@id="main_content"]/div[2]/div/div[1]/div/ul/li/h3', function(newElements){
				console.log(newElements.value.length);
				browser.verify.equal(elements.value.length, newElements.value.length);
        		})
		}
		};
	browser
		.useXpath()
		.waitForElementVisible('//*[@id="main_content"]/div/div/div[1]/div/ul/li', 5000)
		.elements('xpath','//*[@id="main_content"]/div[2]/div/div[1]/div/ul/li/p[2]', iter);

 },



 'Verify Video Load' : function (browser, done){

		//Finding the readyState of the video
	browser
		.url('http://www.abc.net.au/news/2017-02-09/weatherill-promises-to-intervene-dramatically/8254908')
		.execute("document.getElementById('jwplayer-video-0').readyState;", function (result) {
			if(result.value>0){
				console.log("Video Loaded Succesfully");
			}else{
				console.log("Video Not Loaded");
			}
			});
 },

 'Verify the images displayed' : function (browser, done){
	 
	function compare(result){
		if(result.value.length>0){
		result.value.forEach(function(element){
			//Clicking the Right arrow for each image and waiting for the new image to load
			browser
			.click('//*[@id="main_content"]/div[1]/div/div/div/div/div/a[2]')
			.waitForElementVisible('//*[@id="main_content"]/div[2]/div/div/div/div/ul', 5000)
		})
		}
	};
		
	browser
		.url('http://www.abc.net.au/news/2017-02-10/abc-open-pic-of-the-week/8256256')
		//Finding the total number of images present and waiting for them to load
		.waitForElementVisible('//*[@id="main_content"]/div[2]/div/div/div/ul/li', 5000)
		.elements('xpath', '//*[@id="main_content"]/div[2]/div/div/div/ul/li', compare);
	
 },
   after: function(browser){
		 browser.end();
	 }
};
