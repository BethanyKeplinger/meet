import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberofEvents from '../NumberofEvents';


describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    //scenario 1
    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    //scenario 2
    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test('render NumberofEvents', () => {
        expect(AppWrapper.find(NumberofEvents)).toHaveLength(1);
    });
});