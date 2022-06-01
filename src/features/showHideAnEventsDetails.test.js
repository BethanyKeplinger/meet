import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { shallow, mount } from "enzyme";

import App from "../App";
import { mockData } from "../mock-data";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;

    //scenario 1
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user hasnt clicked on an event', () => {

        });

        when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        then('the event details will be collapsed', () => {
            expect(AppWrapper.find('.extra-details')).toHaveLength(0);

        });
    });

    //scenario 2
    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the user hasnt clicked on event', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user clicks the show details button', () => {
            AppWrapper.update();
            AppWrapper.find('.show-details').at(0).simulate('click');
        });

        then('the event details will be displayed', () => {
            expect(AppWrapper.find('.extra-details')).toHaveLength(1);
        });
    });

    //scenario 3
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the user has clicked on an event', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.show-details').at(0).simulate('click');
            expect(AppWrapper.find('.extra-details')).toHaveLength(1);
        });

        when('the user clcks on the hide details button', () => {
            AppWrapper.find('.hide-details').at(0).simulate('click');
        });

        then('the event details will collapse', () => {
            expect(AppWrapper.find('.extra-details')).toHaveLength(0);
        });
    });

})