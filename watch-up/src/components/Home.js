import axios from "axios";
import React from "react";

export default class Home extends React.Component {
    url = "https://3000-naushadbegu-project2wat-7gl4tkiecw5.ws-us77.gitpod.io/";
    state = {
        watchListings: [],

        // search criteria
        searchBrand: "",
        searchModel: "",
        searchMovements: "",
        searchGender: "",
        searchUsername: "",
        username: "",


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

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    // updateRadioField = (event) => {
    //     this.setState({
    //         selectedOption: event.target.value
    //     });
    // }

    filterSearch = async () => {
        try {
            const response = await axios.get(this.url + "watch-listings", {
                params: {
                    watchListings: this.state.watchListings,
                    brand: this.state.searchBrand,
                    model: this.state.searchModel,
                    movements: this.state.searchMovements,
                    gender: this.state.searchGender,
                    username: this.state.searchUsername,

                },
            });
            this.setState({
                watchListings: response.data
            });
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <React.Fragment>
                <h1>Home</h1>
                <div className="container">
                    <div className="container" id="searchContainer">
                        <div className="container">
                            <h5>Brand Name</h5>
                            <input
                                name="searchBrand"
                                type="textbox"
                                className="form-control"
                                id="searchBrand"
                                placeholder="Search for watch brand"
                                value={this.state.searchBrand}
                                onChange={this.updateFormField}
                            />
                        </div>
                        <div className="container mt-3">
                            <h5>Model name</h5>
                            <input
                                name="searchModel"
                                type="textbox"
                                className="form-control"
                                id="searchModel"
                                placeholder="Search for watch model"
                                value={this.state.searchModel}
                                onChange={this.updateFormField}
                            />
                        </div>

                        <div className="container mt-3">
                            <h5>Gender</h5>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="searchGender"
                                    id="searchGender"
                                    value="male"
                                    checked={this.state.searchGender === "male"}
                                    onChange={this.updateFormField}
                                />
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="searchGender"
                                    id="searchGender"
                                    value="female"
                                    checked={this.state.searchGender === "female"}
                                    onChange={this.updateFormField}
                                />
                                <label className="form-check-label">Female</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="searchGender"
                                    id="searchGender"
                                    value="unisex"
                                    checked={this.state.searchGender === "unisex"}
                                    onChange={this.updateFormField}
                                />
                                <label className="form-check-label">Unisex</label>
                            </div>
                        </div>
                        <div className="container mt-3">
                            <h5>Movement</h5>
                            <select
                                className="form-select inputbox"
                                name="searchMovements"
                                onChange={this.updateFormField}
                                value={this.state.searchMovements}
                            >
                                <option value='' disabled>
                                    --- Select watch movement ---
                                </option>
                                <option value="mechanical">Mechanical</option>
                                <option value="automatic">Automatic</option>
                                <option value="quartz">Quartz</option>
                                <option value="smartwatch">Smartwatch</option>
                                <option value="hybridSmartwatch">Hybrid Smartwatch</option>
                                <option value="solarpowered">Solar-powered</option>
                            </select>
                        </div>
                        <div className="container mt-3">
                            <h5>Watch Collectors</h5>
                            <select
                                className="form-select inputbox"
                                name="searchUsername"
                                onChange={this.updateFormField}
                                value={this.state.searchUsername}
                            >
                                <option value='' disabled>
                                    --- Select watch collector ---
                                </option>
                                {this.state.watchListings.map((listings) => (
                                    <option key={listings.user.username} value={listings.user.username}>
                                        {listings.user.username}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>
                    <div>
                        <button
                            className="mt-4 btn btn-primary"
                            onClick={this.filterSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="row">
                    {this.state.watchListings.map(listings => (
                        <React.Fragment key={listings._id}>
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
                                        {listings.gender}
                                    </h3>
                                    <h3 className="card-title">
                                        {listings.image}
                                    </h3>
                                    <h3 className="card-title">
                                        {listings.water_resistance}
                                    </h3>
                                    <h3 className="card-title">
                                        {listings.glass_material}
                                    </h3>
                                    <h3 className="card-title">
                                        {listings.user.username}
                                    </h3>
                                    {/* <h3 className="card-title">
                                    {listings.strapId[0].strapMaterial}
                                </h3>
                                <h3 className="card-title">
                                    {listings.caseId[0].caseMaterial}
                                </h3> */}
                                    {/* <h3 className="card-title">
                                    {listings.movements}
                                </h3>
                                 */}
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </React.Fragment >
        );
    }
}