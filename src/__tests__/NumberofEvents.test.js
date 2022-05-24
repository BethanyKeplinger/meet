import React from "react";
import { shallow } from "enzyme";
import NumberofEvents from "../NumberofEvents";

describe('<NumberofEvents /> component', () => {
    let NumberofEventsWrapper;
    beforeAll(() => {
        NumberofEventsWrapper = shallow(<NumberofEvents />);
    });

    test('render text input', () => {
        expect(NumberofEventsWrapper.find('.number-of-events')).toHaveLength(1);
    });

    test('renders default number of events', () => {
        expect(NumberofEventsWrapper.state('eventCount')).toBe(32);
    });

    test('change number of events when input changes', () => {
        NumberofEventsWrapper.setState({ eventCount: '16' });
        NumberofEventsWrapper.find('.number-of-events').simulate('change', { target: { value: '16' } });
        expect(NumberofEventsWrapper.state('eventCount')).toEqual('16');
    })

})