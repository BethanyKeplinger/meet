import React from "react";
import { shallow } from "enzyme";
import NumberofEvents from "../NumberofEvents";

describe('<NumberofEvents /> component', () => {
    let NumberofEventsWrapper;
    beforeAll(() => {
        NumberofEventsWrapper = shallow(<NumberofEvents />);
    });

    test('render text input', () => {
        expect(NumberofEventsWrapper.find('.inputnumberofEvents')).toHaveLength(1);
    });

    test('renders default number of events', () => {
        expect(NumberofEventsWrapper.state('numberofEvents')).toBe(32);
    });

    test('change number of events when input changes', () => {
        NumberofEventsWrapper.setState({ numberofEvents: '16' });
        NumberofEventsWrapper.find('.numberofEvents').simulate('change', { target: { value: '16' } });
        expect(NumberofEventsWrapper.state('numberofEvents')).toEqual('16');
    })


})