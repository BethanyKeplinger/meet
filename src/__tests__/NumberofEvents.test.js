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

    test('renders text input correctly', () => {
        const numberOfEvents = NumberofEventsWrapper.prop('numberOfEvents');
        expect(NumberofEventsWrapper.find('.number-of-events').prop('value')).toBe(numberOfEvents);
    });

    test('renders default number of events', () => {
        expect(NumberofEventsWrapper.state('numberOfEvents')).toBe(32);
    });

    test('change number of events when input changes', () => {
        NumberofEventsWrapper.setState({ numberOfEvents: '16' });
        NumberofEventsWrapper.find('.number-of-events').simulate('change', { target: { value: '16' } });
        expect(NumberofEventsWrapper.state('numberOfEvents')).toEqual('16');
    })

})