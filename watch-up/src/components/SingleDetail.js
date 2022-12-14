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
                                <h4>{single.model}</h4>
                                <h5>US$ {single.price}</h5>
                                <h5 className="heading">Specifications</h5>
                                <table>
                                    <tbody>
                                        <tr className="specs-table">
                                            <td className="specs-name" width="213">
                                                Brand:</td>
                                            <td className="specs-detail" width="213">
                                                {single.brand}</td>
                                        </tr>
                                        <tr className="specs-table">
                                            <td className="specs-name" width="213">
                                                Model:</td>
                                            <td className="specs-detail" width="213">
                                                {single.model}</td>
                                        </tr>
                                        <tr className="specs-table">
                                            <td className="specs-name" width="213">
                                                Price:</td>
                                            <td className="specs-detail" width="213">
                                                {single.price}</td>
                                        </tr>
                                        <tr className="specs-table">
                                            <td className="specs-name" width="213">
                                                Year:</td>
                                            <td className="specs-detail" width="213">
                                                {single.year_made}</td>
                                        </tr>
                                        <tr className="specs-table">
                                            <td className="specs-name" width="213">
                                                Movement:</td>
                                            <td className="specs-detail" width="213">
                                                {single.movements}</td>
                                        </tr>
                                        <tr className="specs-table">
                                            <td className="specs-name" width="213">
                                                Targeted gender:</td>
                                            <td className="specs-detail" width="213">
                                                {single.gender}</td>
                                        </tr>
                                        <tr className="specs-table">
                                            <td className="specs-name" width="213">
                                                Water Resistance:</td>
                                            <td className="specs-detail" width="213">
                                                {single.water_resistance}</td>
                                        </tr>
                                        <tr className="specs-table">
                                            <td className="specs-name" width="213">
                                                Glass Material:</td>
                                            <td className="specs-detail" width="213">
                                                {single.glass_material}</td>
                                        </tr>
                                        <tr className="specs-table">
                                            <td className="specs-name" width="213">
                                                Case Material:</td>
                                            <td className="specs-detail" width="213">
                                                {single.caseId[0].caseMaterial}</td>
                                        </tr>
                                        <tr className="specs-table">
                                            <td className="specs-name" width="213">
                                                Strap Material:</td>
                                            <td className="specs-detail" width="213">
                                                {single.strapId[0].strapMaterial}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button onClick={this.props.changeToHomePage} className="button--primary-detail">Back to Home page</button>
                            </div>
                        </div>
                        <div className="footer">
                        <p> © WATCH UP. All rights reserved.</p>    
                    </div>

                    </React.Fragment>
                ))
                }
            </React.Fragment>
        )
    }

}