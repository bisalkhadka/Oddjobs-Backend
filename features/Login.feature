Feature: <Feature Name>
<feature description>

  Scenario: Pass test
    Given Browse to web site "file:///D:/Oddjobs_Final/Oddjobs/Front%20End/login.html"
    When user input Email "manish@gmail.com"
    And user input Password "123"
    Then click Login button

  Scenario: Fail test (wrong info)
    Given Browse to web site "file:///D:/Oddjobs_Final/Oddjobs/Front%20End/login.html"
    When user input Email "asdadsf@asdf.com"
    And user input Password "111"
    Then click Login button