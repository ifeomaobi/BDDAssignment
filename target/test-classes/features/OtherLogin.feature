@OtherLogin 
Feature: Validate Techfios Login 

Background: 
	Given User is on the Techfios Login Page 

@Scenario1  @smoke
Scenario Outline: 1 User should be able to log in with valid credentials
	When User enters "<userName>" and "<password>" 
	When User clicks on signin button 
	Then User should land on Dashboard page 
	Then User should click on Bank and Cash 
	Then User should click on new account 
	Then User should be able to fill the form entering "<AccountTitle>" and "<Description>" and "<InitialBalance>"
	Then User should be able to validate 
	
	

	
	Examples:
	|userName			|password|
	|demo@techfios.com	|abc123 | 
	
	
	