
import React, { Component } from "react";

class NumberofEvents extends Component {

    state = {
        numberOfEvents: 32,
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 1 || value > 32) {
            this.setState({
                numberOfEvents: '',
            })
        } else {
            this.setState({
                numberOfEvents: value
            });
        }
        this.props.updateNumberOfEvents(value);
    }

    render() {
        return (
            <div className="number-of-events">
                <p>Number of Events</p>
                <input
                    type='number'
                    className="eventCount"
                    // value={this.props.NumberofEvents}
                    // onChange={(e) => this.props.updateNumberOfEvents(e)}>
                    onChange={this.handleInputChanged}
                    value={this.state.numberOfEvents}>
                </input>
            </div>
        )
    }

}

export default NumberofEvents;