import React, { Component } from 'react';
import './App.css';
import './nprogress.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberofEvents from './NumberofEvents';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';

import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { OfflineAlert } from './Alert';


class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    showWelcomeScreen: undefined,
    offlineText: ""
  }

  async componentDidMount() {
    this.mounted = true;
    if (!navigator.onLine) {
      this.setState({
        offlineText: 'You are currently offline. The events displayed may not be up to date.'
      });
    } else {
      this.setState({
        offlineText: '',
      });
    }

    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };



  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className='App' />
    const { locations, numberOfEvents, events } = this.state;
    console.log("offline", this.state.offlineText);
    return (
      <div className="App">
        <h1>Meet App</h1>

        <CitySearch locations={locations} updateEvents={this.updateEvents} />

        <NumberofEvents numberOfEvents={numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />


        <div className='data-vis-wrapper'>

          <EventGenre events={events} />

          <ResponsiveContainer height={400} >
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="City" />
              <YAxis allowDecimals={false} type="number" dataKey="number" name="number of events" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <h4> Events in each city</h4>

        <EventList events={events} />

        <div className={navigator.onLine === true ? "alert-container" : "alert-container-visible"}>
          <OfflineAlert className="OfflineAlert" text={this.state.offlineText} />
        </div>


        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />


      </div>
    );
  }
}

export default App;
