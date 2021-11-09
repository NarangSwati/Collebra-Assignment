Feature: Register New User

@Register
  Scenario: As a user, I can register on website

    Given I am on the landing page
    When I click on Sign in
    Then I am on authentication page
    When I enter my email to create an account 
    Then I am on personal info page
    When I enter personal info on the personal info page and click on register
    |Title| FirstName| LastName|pwd|DOBDay|DOBMonth|DOBYear|Company|AddrLine1|AddrLine2|City|State|Zip|Country|Mobile|aliasAddress|
    |Mrs|Test|Test|coll12345|23|9|1981|Collabera|add1|add2|CollCity|California|90011|United States|987876656|My Address|
    Then the correct first name and surname is displayed
    When I click on signout button
    Then I am on authentication page

  @LoginLogout
  Scenario: As a user, I can login and logout into the website

    Given I am on the landing page
    When I click on Sign in
    Then I am on authentication page
    When I signin with following username and password
    | username | password     |
      |random@trial.com|Test12345|
    Then the correct first name and surname is displayed
    When I click on signout button
    Then I am on authentication page

    
      
  
  @AddtoCart
  Scenario: As a user, I can add a product to the cart and proceed to payment

    Given I am on the landing page
    When I click on Sign in
    Then I am on authentication page
    When I signin with following username and password
    | username | password     |
      |random@trial.com|Test12345|
    Then the correct first name and surname is displayed
    When I select the 'Blouse' product and add it in cart and navigate to payments screen
    Then I validate the details on payment screen

    
      




    

  

