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
    eventCount: 32
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount)
      });
    });
  }

  updateNumberOfEvents = async (e) => {
    const number = e.target.value;
    if (number > 0 && number < 33) {
      await this.setState({
        eventCount: number,
      });
      this.updateEvents(this.state.eventCount);
    } else {
      await this.setState({
        eventCount: 32
      });
    }
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
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberofEvents eventCount={this.state.eventCount} updateNumberOfEvents={this.updateNumberOfEvents} />

      </div>
    );
  }
}

export default App;
