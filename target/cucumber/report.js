$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/OtherLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Techfios Login",
  "description": "",
  "id": "validate-techfios-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "1 User should be able to log in with valid credentials",
  "description": "",
  "id": "validate-techfios-login;1-user-should-be-able-to-log-in-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    },
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should click on Bank and Cash",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User should click on new account",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should be able to fill the form entering \"\u003cAccountTitle\u003e\" and \"\u003cDescription\u003e\" and \"\u003cInitialBalance\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User should be able to validate",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "validate-techfios-login;1-user-should-be-able-to-log-in-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 21,
      "id": "validate-techfios-login;1-user-should-be-able-to-log-in-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 22,
      "id": "validate-techfios-login;1-user-should-be-able-to-log-in-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4750317100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_the_Techfios_Login_Page()"
});
formatter.result({
  "duration": 2003199600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "1 User should be able to log in with valid credentials",
  "description": "",
  "id": "validate-techfios-login;1-user-should-be-able-to-log-in-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@OtherLogin"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should click on Bank and Cash",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User should click on new account",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should be able to fill the form entering \"\u003cAccountTitle\u003e\" and \"\u003cDescription\u003e\" and \"\u003cInitialBalance\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User should be able to validate",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 850089900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 5281816000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 570300400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_click_on_Bank_and_Cash()"
});
formatter.result({
  "duration": 2182159400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_click_on_new_account()"
});
formatter.result({
  "duration": 4925015800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cAccountTitle\u003e",
      "offset": 47
    },
    {
      "val": "\u003cDescription\u003e",
      "offset": 68
    },
    {
      "val": "\u003cInitialBalance\u003e",
      "offset": 88
    }
  ],
  "location": "StepDefinition.user_should_be_able_to_fill_the_form_entering_and_and(String,String,String)"
});
formatter.result({
  "duration": 2519828600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_able_to_validate()"
});
formatter.result({
  "duration": 37800,
  "status": "passed"
});
formatter.after({
  "duration": 1139653800,
  "status": "passed"
});
});