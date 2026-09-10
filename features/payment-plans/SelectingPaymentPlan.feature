@sep14
Feature: Selecting a price plan

    As a customer, I want to be able to Choose a payment plan from the available options 
    so that I can choose the one that best suits my needs.

    #* AC1: When the user selects any payment plan (Accordion) that option should be highlighted to indicate selection.
    #* AC2: Upon selecting any pricing option, the 'Next' button should become active (indicating the user can proceed).
    #* AC3: Users should be able to change their plan selections at any time before finalizing their choice.



    Background:
        Given user is on the enrollment page
        And user has completed start application step

    #=============
    # AC1
    #-------------
    @sep14-1
    Scenario Outline: Selected payment plan accordion is highlighted
        When user clicks "<payment_plan>" payment plan
        Then "<payment_plan>" payment plan option should be highlighted

        Examples:
            | payment_plan |
            | upfront      |
            | installments |

    #=============
    # AC2
    #-------------
    @sep14-2
    Scenario Outline: Selecting any pricing option activates the next button
        Then the next button is disabled by default
        When user clicks "<payment_plan>" payment plan
        Then the next button is enabled

        Examples:
            | payment_plan |
            | upfront      |
            | installments |

    #=============
    # AC3
    #-------------
    @sep14-3
    Scenario Outline: Changing payment plan selection before finalizing choice
        When user clicks "<initial_plan>" payment plan
        Then "<initial_plan>" payment plan option should be highlighted
        When user clicks "<new_plan>" payment plan
        Then "<new_plan>" payment plan option should be highlighted
        And the next button is enabled

        Examples:
            | initial_plan | new_plan     |
            | upfront      | installments |
            | installments | upfront      |