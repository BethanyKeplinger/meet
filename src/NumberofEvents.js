
import React, { Component } from "react";

class NumberofEvents extends Component {

    state = {
        numberOfEvents: 32,

    }

    handleInputChanged = (event) => {
        const number = event.target.value;
        if (number < 1 || number > 32) {
            this.setState({
                numberOfEvents: '',
            })
        } else {
            this.setState({
                numberOfEvents: number,
            });
        }
        this.props.updateEvents(number);
    }

    render() {
        return (
            <div className="number-of-events">
                <p>Number of Events</p>
                <input
                    type='number'
                    className="eventCount"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged} />
            </div>
        )
    }

}

export default NumberofEvents;