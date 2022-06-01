Feature: Specify Number of Events

    Scenario: When the user hasnt specified a number, 32 is the default number
        Given the user opens the app
        When the user hasnt specified the number of events
        Then the user will see a maximum of 32 events

    Scenario: User can change the number of events they see
        Given the user hasnt specified the number of events
        When the user decides to change how many events they want to see
        Then the amount requested with show up, if available
