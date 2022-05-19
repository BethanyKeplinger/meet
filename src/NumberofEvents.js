import React, { Component } from "react";

class NumberofEvents extends Component {

    state = {
        numberofEvents: 32,
        eventCount: 32
    }

    render() {
        return (
            <div className="numberofEvents">
                <input
                    type='number'
                    className="inputnumberofEvents"
                />
            </div>
        )
    }

}

export default NumberofEvents;