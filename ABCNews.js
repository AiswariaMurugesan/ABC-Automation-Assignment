module.exports = {
	url: 'http://abc.net.au/news',
	elements: {
		newsBanner: {
			selector: '//*[@id="header"]/div[1]/a/img[2]',
			locateStrategy: 'xpath'
		}
		
		justIn: {
			selector: '//*[@id="n-justin"]/a',
			locateStrategy: 'xpath'
		}
		
		justInHeader: {
			selector: '//*[@id="container_subheader"]/div/div/h1',
			locateStrategy: 'xpath'
		}
		
		article: {
			selector: '//*[@id="main_content"]/div/div/div[1]/div/ul/li',
			locateStrategy: 'xpath'
		}
		articleTitle: {
			selector: '//*[@id="main_content"]/div[2]/div/div[1]/div/ul/li/h3',
			locateStrategy: 'xpath'
		}
		
		articleAuthor: {
			selector: '//*[@id="main_content"]/div[2]/div/div[1]/div/ul/li/div',
			locateStrategy: 'xpath'
		}
		
		articleTimestamp: {
			selector: '//*[@id="main_content"]/div[2]/div/div[1]/div/ul/li/p[1]',
			locateStrategy: 'xpath'
		}
		
		articleContent: {
			selector: '//*[@id="main_content"]/div[2]/div/div[1]/div/ul/li/p[2]',
			locateStrategy: 'xpath'
		}
	}
	
}
