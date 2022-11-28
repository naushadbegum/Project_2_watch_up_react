import axios from "axios";
import React from "react";

export default class Home extends React.Component {
    url = "https://3000-naushadbegu-project2wat-7gl4tkiecw5.ws-us77.gitpod.io/";
    state = {
        watchListings: [],
    }

    async componentDidMount() {
        try {
            let watchListingsResponse = await axios.get(this.url + "watch-listings");
            console.log(watchListingsResponse.data);
            let watchListingsData = watchListingsResponse.data;

            this.setState({
                watchListings: watchListingsData
            })
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                <h1>Home</h1>
                    {this.state.watchListings.map(listings => (
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">
                                    {listings.brand}
                                </h3>
                                <h3 className="card-title">
                                    {listings.model}
                                </h3>
                                <h3 className="card-title">
                                    {listings.price}
                                </h3>
                                <h3 className="card-title">
                                    {listings.year_made}
                                </h3>
                                <h3 className="card-title">
                                    {listings.water_resistance}
                                </h3>
                                <h3 className="card-title">
                                    {listings.gender}
                                </h3>
                                <h3 className="card-title">
                                    {listings.image}
                                </h3>
                                <h3 className="card-title">
                                    {listings.strap.name}
                                </h3>
                            </div>
                        </div>))}
                </div>  
            </React.Fragment>
        );
    }
}