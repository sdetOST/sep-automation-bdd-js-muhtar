@sep29
Feature: Error message for the invalid CVC number

    As a user, I want to be informed when the CVC number I enter is incorrect or too short.

    #* AC1: The Immediate error message should be thrown if the CVC number is too short or wrong. 
    #* AC1: The error message is:
    # "Your card's security code is incomplete."


    Background:
        Given user is on the enrollment page
        And user has completed start application step
        And user has completed payment plan step


    @sep29-1
    Scenario Outline: CVC error message is displayed when user enters incomplete CVC number
        When user enters "<short_CVC_number>" as the CVC number
        And user clicks the terms and contidions checkbox
        Then user should see the error message "Your security code is incomplete."

        Examples:
            | short_CVC_number      |
            | 22                    |
            | 2                     |


    @sep29-2
    Scenario Outline: CVC error message is displayed when user enters invalid CVC number
        When user enters "<invalid_CVC_number>" as the CVC number
        And user clicks the terms and contidions checkbox
        Then user should see the error message "Your security code is incomplete."

        Examples:
            | invalid_CVC_number     |
            | 00                     |
            | 0                      |

    @sep29-3
    Scenario: CVC error message is displayed when user enters invalid CVC number from data.json
        When user enters invalid CVC numbers from "data.json"
        And user clicks the terms and contidions checkbox
        Then user should see the error message "Your security code is incomplete."