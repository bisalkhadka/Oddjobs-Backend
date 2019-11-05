Feature: <Feature Name>
<feature description>

  Scenario: <Scenario Name>
    Given Browse to web site "file:///D:/Oddjobs_Final/Oddjobs/Front%20End/addjobs.html"
    When user input Title "ever"
    And user input Description "For" 
    And user input Latitude "444"
    And user input Category ""
    And user input Type ""
    And user input fileToUpload ""
    And user input Location "Here"
    And user input Longitude "888"
    And user input JobDt "11/18/2019"
    And user input Email "asd@asd.com"
    Then click Submit button 