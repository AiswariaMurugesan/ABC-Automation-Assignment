module.exports = {
	
	before: function(browser){
			browser
				.windowMaximize()
				.url('http://www.abc.net.au/radionational/')

	},
  'Verify Page Load' : function (browser) {
		browser
			.waitForElementVisible('body', 1000);  
		browser.execute("return document.readyState;", function(result) {
			if(result.value = 'complete') {
			console.log("Page Loaded Succesfully");
		}
		});   
  },

 'Navigate to program' : function (browser){
		browser
			.useXpath();
		//Locationg and clicking the menu item "Programs"
			console.log("Finding element: Programs");
		browser
			.waitForElementVisible('//*[@id="rn-navigation"]/ul/li[2]/a', 5000)
			.click('//*[@id="rn-navigation"]/ul/li[2]/a');
		//Locating the sub menu "A Big Country"
			console.log("Finding sub menu: A Big Country");
		browser
			.waitForElementVisible('//*[@id="rn-programindex"]/li[1]/a', 5000);
			

 },

 'Navigate to Submenu: Big Ideas' : function (browser){
		//Locating and clicking sub menu "A Big Country"
		console.log("Finding Sub menu: A Big Country");
		browser
			.waitForElementVisible('//*[@id="rn-programindex"]/li[3]/a', 5000)
			.click('//*[@id="rn-programindex"]/li[3]/a');
		//Asserting the header of the page
		browser
			.assert.containsText('//*[@id="header"]/div/div[1]/h2/a', 'A Big Country')
			

 },

 'Navigate to last item in Program Guide' : function (browser){
		// Navigating to the last element by trying to locate the button "View full Program guide" and then clicking on the last element 
		
		browser
			.useXpath();
		//Clicking on the "Home" icon
		browser
			.click('//*[@id="rn-navigation"]/ul/li[1]/a')		
			.elements('xpath', '//*[@id="content"]/div[1]/div/div/div[2]/ul/li[8]', function(result){
				if(result.value.length > 0){
					for(var count =1; count < result.value.length; count++){
						browser					   	
						.isVisible('xpath' , '//*[@id="content"]/div[1]/div/div/div[2]/ul/li[22]/a/div', function(result){
						if(result.value == -1){
							browser.click('//*[@id="right-arrow"]');
						}
					})
					.click('//*[@id="content"]/div[1]/div/div/div[2]/ul/li[22]/a/div');
					}
				}
			});	

 },

 'Search For A Program' : function (browser){
		var text = 'infant stress';
		browser
			.useXpath();
		//Clicking on the "Home" icon and then entering text in the search field and clicking Enter
		browser
			.click('//*[@id="rn-navigation"]/ul/li[1]/a')
			.sendKeys('tag name', 'input', text)
			.Keys.ENTER;
		//Waiting for the article title to get displayed	
		browser
			.waitForElementVisible('//*[@id="content"]/div[1]/div/div[2]/ul/li[1]/div/div[1]/h3/a', 5000)
			.assert.containsText('//*[@id="content"]/div[1]/div/div[2]/ul/li[1]/div/div[1]/h3/a', text);
 },
 
 'Click on Share button and Verify the PopUp' : function (browser){
		browser
			.url('http://www.abc.net.au/radionational/programs/bigideas/a-fortunate-universe/8076406');
			//Locating Share Button
			console.log("Finding element: Share button");
			browser
			.waitForElementVisible('//*[@id="u_0_2"]/div/span[2]', 5000)
			.click('xpathofSharebutton')
			.timeoutsImplicitlyWait(5000, function(result){
				browser.windowHandles(function(winHandle){
					browser
						.assert.equal(winHandle.value.length, 2)
						.switchWindow(winHandle.value[1])
						.assert.title('Facebook');
				})
			})
 },
	after:function(browser){
		browser.end();
	}
};	

  
