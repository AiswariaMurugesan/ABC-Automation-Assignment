# ABC-Automation-Assignment

You would need the following in your system in order to run the test cases in the project.
  1. Java (Version 8)
  2. Node.js
  3. Nightwatch
  4. Selenium-webdriver
  5. Chrome driver

You will have to place the selenium-server-standalone jar and chrome driver.exe files inside a folder called bin, which is to be created in the same path where ypou have downloaded the code.
This is for "nightwatch.json" to identify the above mentioned files, as it looks for a folder "bin" which should contain selenium and chrome driver.

In order to download and install Node.js and Nightwatch, please follow th below link:
http://nightwatchjs.org/gettingstarted

Note: You dont have to manually start the selenium server for running the tests. "nightwatch.json" has the value of "start_server" of "selenium" section set to "true" which would automatically start the server while running the tests.

Project Details:
Mapping of Test Suites to the Assignment Questions:
  1. The Test suites with prefix "SectionA" corresponds to the questions in Section A of the assignment
  2. The Test suites with prefix "SectionB" corresponds to the questions in Section B of the assignment
  3. The Test Suite "Verify Json" corresponds to the 1st question in Section C
  4. Answers for questions 2 and 3 in Section C are given in the word document "AnsweraForSectionC.docx"
Please donwload the Test suites and place it in a folder called "tests" in your project.  
There are 2 different java script files available for section A, one with page objects and one without page objects.
  Follwoing are the ones without page objects:
    1. SectionA.js
    2. SectionB.js
    3. VerifyJson.js
    
   Follwoing are teh ones with page objects:
    1. SectionAWithPO.js
    2. ABCNews.js
    
For execution,
1. To see the behaviour of framework for full run without error, please use SectionA.js
2. To see how the framework responds in failures, please use SectionB.js. Since all the test cases inside a single JavaScript file are considered dependant test cases, failure should make the runner skip the remaining test cases
3. For reusability, I have created page objects. ABCNews.js is the page object and SectionAWithPO.js uses this page object. (For some unknown reasons, the test runner is unable to identify the "elements" section of the page object. I would recommend you not to use this for execution)
4. Remaining answers are documented in the file AnswersForSectionC.docx"
 
 Executing the Tests:
 In order to run the tests, please follow the below steps after installing the required softwares:
  1. Open command prompt
  2. Go to the folder where the .js files are located
  3. Run the command "nightwatch -test SectionA.js" (SectionA.js is a test suite) in order to run an individual suite
  4. TO run the test suites as a group, place the .js files in a folder and use the command "nightwatch -group tests", where tests is the folder in whcih you place the .js files
  
  After running the tests, you could see the XML reports generated for that Test Run inside a folder called "reports" that is newly generated.
 
 
 
    
  
