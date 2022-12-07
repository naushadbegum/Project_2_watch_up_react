import React from "react";

export default class SingleDetail extends React.Component {

    state = {
        data: [],
        selectedWatchId: [],
    };

    render() {
        return (
            <React.Fragment>
                <h1>Watch Details</h1>
                {this.props.singleDetailId.map((single) => (
                    <React.Fragment key={single._id}>
                        <div className="card mt-3 ms-3">
                            <h5 className="card-title">{single.brand}</h5>
                            <button onClick={this.props.changeToHomePage}>Back</button>
                        </div>
                    </React.Fragment>
                ))
                }
            </React.Fragment>
        )
    }

}