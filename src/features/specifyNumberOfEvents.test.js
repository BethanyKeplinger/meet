import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";

import NumberofEvents from "../NumberofEvents";
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    let AppWrapper;

    //scenario 1
    test('When the user hasnt specified a number, 32 is the default number', ({ given, when, then }) => {
        given('the user opens the app', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user hasnt specified the number of events', () => {
            AppWrapper.update();
        });

        then('the user will see a maximum of 32 events', () => {
            expect(AppWrapper.find('.event')).toHaveLength(4);

        });
    });

    //scenario 2
    test('User can change the number of events they see', ({ given, when, then }) => {
        given('the user hasnt specified the number of events', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user decides to change how many events they want to see', () => {
            const NumberofEventsWrapper = AppWrapper.find(NumberofEvents);
            NumberofEventsWrapper.find('.eventCount').simulate('change', { target: { value: 2 } });
        });

        then('the amount requested with show up, if available', () => {
            const NumberofEventsWrapper = AppWrapper.find(NumberofEvents);
            NumberofEventsWrapper.find('.eventCount').simulate('change', { target: { value: 2 } });
            expect(AppWrapper.state('numberOfEvents')).toEqual(2)

        });
    });



})