import React from "react";
import "./../css/style.css";

export default class SingleDetail extends React.Component {

    state = {
        data: [],
        selectedWatchId: [],
    };


    // <div className="detail-container mt-3 ">
    //                     <div className="left col-12 col-lg-8">
    //                             <img id="watchDetailPhoto" src={single.image} alt="watchDetailPhoto" className="watchDetailPhoto"></img>
    //                     </div>
    //                     <div className="right col-12 col-lg-4 order-lg-first order-last">
    //                         <h5 className="big-title font">{single.brand}</h5>
    //                         <button onClick={this.props.changeToHomePage}>Back</button>
    //                     </div>

    render() {
        return (
            <React.Fragment>
                {this.props.singleDetailId.map((single) => (
                    <React.Fragment key={single._id}>
                        <div className="detail-container">
                            <div className="detail-img">
                                <img id="watchDetailPhoto" src={single.image} alt="watchDetailPhoto" className="watchDetailPhoto"></img>
                            </div>
                            <div className="detail-content">
                                <h5>{single.brand}</h5>
                                <button onClick={this.props.changeToHomePage}>Back</button>
                            </div>
                        </div>

                    </React.Fragment>
                ))
                }
            </React.Fragment>
        )
    }

}