
import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberofEvents extends Component {

    state = {
        numberOfEvents: 32,
        infoText: ''

    }

    handleInputChanged = (event) => {
        const number = event.target.value;
        if (number < 1 || number > 32) {
            this.setState({
                numberOfEvents: '',
                infoText: 'Select number from 1 to 32'
            })
        } else {
            this.setState({
                numberOfEvents: number,
                infoText: ''
            });
        }
        this.props.updateNumberOfEvents(number);
    }

    render() {

        return (
            <div className="number-of-events">
                <ErrorAlert text={this.state.infoText} />
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