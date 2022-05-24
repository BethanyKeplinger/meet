import React, { Component } from "react";

class NumberofEvents extends Component {

    state = {
        eventCount: 32,
    }

    render() {
        return (
            <div className="eventCount">
                <p className="eventcount">Number of Events</p>
                <input
                    type='number'
                    className="number-of-events"
                    onChange={(e) => this.props.updateNumberOfEvents}
                    value={this.props.eventCount}
                />
            </div>
        )
    }

}

export default NumberofEvents;