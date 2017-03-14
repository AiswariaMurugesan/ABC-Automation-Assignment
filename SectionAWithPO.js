module.exports = {
	
  before : function(browser) {
	  var 
	  try{
		  browser
		  .windowMaximize()
		  .url('http://abc.net.au/news');
	  } catch (myError) {
		  done(myError)
	  }
  }
  'Verify Page Load' : function (browser) {
	try{
	browser	
		.waitForElementVisible('body', 1000);  
	browser.execute("return document.readyState;", function(result) {
  	  if(result.value = 'complete') {
		console.log("Page Loaded Succesfully");
	}
	});   
	} catch (myError) {
		done(myError);
	};
  },	

  'Verify News Banner' : function (browser) {
	try{
		var ABCNews = browser.page.ABCNews();
		ABCNews
		.useXpath()
		.waitForElementVisible('@newsBanner', 1000);
	console.log("News Banner is Present");
	}catch(myError){
		done(myError);
	};
 },

  'Navigate to Just In' : function (browser) {
	try{
		var ABCNews = browser.page.ABCNews();
		ABCNews
			.useXpath()
			.waitForElementVisible('@justIn', 5000)
			.click('@justIn')
			.waitForElementVisible('@justInHeader', 5000)
			.verify.containsText('justInHeader', 'Just In');
			
	} catch (myError){
		done(myError);
	};
 },

  'Verify Author Present for every Article' : function (browser) {
	try{
		var ABCNews = browser.page.ABCNews();
		
		function iter(elements){
			if(elements.value.length>1){
				console.log('function called');	
				console.log(elements.value.length);	
				ABCNews.elements('xpath', '@articleTitle', function(newElements){
					console.log(newElements.value.length);
					ABCNews.verify.equal(elements.value.length, newElements.value.length);
        			})
		}
		};
		ABCNews
			.useXpath()
			.waitForElementVisible('@article', 5000)
			.elements('xpath','@articleAuthor', iter);
		}catch (myError){
			done(myError);
		};
 },
 
  'Verify TimeStamp Present for every Article' : function (browser) {
	try{
		var ABCNews = browser.page.ABCNews();
	
		function iter(elements){
			if(elements.value.length>1){
				console.log('function called');	
				console.log(elements.value.length);	
				ABCNews.elements('xpath', '@articleTitle', function(newElements){
					console.log(newElements.value.length);
					ABCNews.verify.equal(elements.value.length, newElements.value.length);
        			})
		}
		};
		ABCNews
			.useXpath()
			.waitForElementVisible('@article', 5000)
			.elements('xpath','@articleTimestamp', iter);
		}catch (myError){
			done(myError);
		};
 },

 'Verify Text Present for every Article' : function (browser) {
	try{
		var ABCNews = browser.page.ABCNews();
	
		function iter(elements){
			if(elements.value.length>1){
				console.log('function called');	
				console.log(elements.value.length);	
				ABCNews.elements('xpath', '@articleTitle', function(newElements){
					console.log(newElements.value.length);
					ABCNews.verify.equal(elements.value.length, newElements.value.length);
        			})
		}
		};
		ABCNews
			.useXpath()
			.waitForElementVisible('@article', 5000)
			.elements('xpath','@articleContent', iter);
		}catch (myError){
			done(myError);
		};
 },

