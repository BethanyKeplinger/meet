import React, { Component } from "react";

class NumberofEvents extends Component {

    state = {
        numberofEvents: 32,
        eventCount: 32
    }

    handleInputChanged = (event) => {
        const value = event.target.value;

        if (value <= 0 || value > 32) {
            this.setState({
                numberofEvents: ""
            })
        } else {
            this.setState({
                numberofEvents: value,
            });
        }
        this.props.updateNumberOfEVents(value);
    };

    render() {
        return (
            <div className="numberofEvents">
                <p className="eventcount">Number of Events</p>
                <input
                    type='number'
                    className="inputnumberofEvents"
                    onChange={this.handleInputChanged}
                    value={this.state.numberofEvents}
                />
            </div>
        )
    }

}

export default NumberofEvents;