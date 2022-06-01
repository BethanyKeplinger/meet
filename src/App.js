import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberofEvents from './NumberofEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all'
  }

  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = location === 'all'
        ? events
        : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, numberOfEvents),
          currentLocation: location,
        });
      }
    });
  };

  updateNumberOfEvents = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount,
    });
    this.updateEvents(currentLocation, eventCount);
  }


  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <h1>Meet App</h1>
        <CitySearch currentLocation={this.state.currentLocation} locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberofEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
        <EventList events={this.state.events} />


      </div>
    );
  }
}

export default App;
