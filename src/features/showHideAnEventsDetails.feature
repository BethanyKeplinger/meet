Feature: Show/Hide and Events Details

    Scenario: An event element is collapsed by default
        Given the user hasnt clicked on an event
        When the user opens the app
        Then the event details will be collapsed

    Scenario: User can expand an event to see its details
        Given the user hasnt clicked on event
        When the user clicks the show details button
        Then  the event details will be displayed

    Scenario: User can collapse an event to hide its details
        Given the user has clicked on an event
        When the user clcks on the hide details button
        Then the event details will collapse