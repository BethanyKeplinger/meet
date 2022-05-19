import React from "react";
import { shallow } from "enzyme";
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[3]} />);
    });

    //feature 2 scenario 1 event collapsed by default
    test('render an event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test('render a start date to event', () => {
        expect(EventWrapper.find('.start-date')).toHaveLength(1);
    });

    test('render the location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test('render the event summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    //scenario 2 user can expand to see details
    test('render show details button', () => {
        expect(EventWrapper.find('.show-details')).toHaveLength(1);
    });

    test('details are collapsed by default', () => {
        expect(EventWrapper.state('collapsed')).toBe(true);
    })

    test('show details when button is clicked', () => {
        EventWrapper.setState({
            collapsed: true
        });
        EventWrapper.find('.show-details').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(false);
    });

    test('hide details when button is clicked again', () => {
        EventWrapper.setState({
            collapsed: false
        });
        EventWrapper.find('.hide-details').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(true);
    });


})