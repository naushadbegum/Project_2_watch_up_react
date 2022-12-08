import React from "react";
import axios from "axios";
import "../components/SingleDetail";
import SingleDetail from "../components/SingleDetail";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./../css/style.css";

export default class Home extends React.Component {
    url = "https://3000-naushadbegu-project2wat-7gl4tkiecw5.ws-us78.gitpod.io/";
    state = {
        data: [],

        // search criteria
        searchBrand: "",
        searchModel: "",
        searchMovements: "",
        searchGender: "",

        page: "home",
        singleDetailId: null,
        singleDetailClicked: false,
        singleWatchObject: [],
        isLoading: false,
    };

    isLoading = () => {
        this.setState({ isLoading: true })
    }

    closeLoading = () => {
        this.setState({ isLoading: false })
    }


    // async componentDidMount() {
    //     try {
    //         let watchListingsResponse = await axios.get(this.url + "watch-listings");
    //         console.log(watchListingsResponse.data);
    //         let watchListingsData = watchListingsResponse.data;

    //         this.setState({
    //             watchListings: watchListingsData
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    async componentDidMount() {
        this.isLoading();
        try {
            let response = await axios.get(this.url + "watch-listings");
            this.setState({ data: response.data });
        } catch (e) {
            console.log(e);
        }
        this.closeLoading();
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
        this.isLoading();
        try {
            let response = await axios.get(this.url + "watch-listings", {
                params: {
                    brand: this.state.searchBrand,
                    model: this.state.searchModel,
                    movements: this.state.searchMovements,
                    gender: this.state.searchGender,
                },
            });
            this.setState({
                data: response.data
            });
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
        this.closeLoading();
    };

    clickToDetailPage = (single) => {
        this.setState({
            page: "detail",
            singleDetailClicked: true,
            singleDetailId: single,
        });
    };

    changeToHomePage = () => {
        this.setState({ page: "home" });
    };

    renderPage = () => {
        if (this.state.page === "detail") {
            try {
                console.log([this.state.singleDetailId]);
            } catch (e) {
                console.log(e);
            }
            return (
                <React.Fragment>
                    <h1>Watch Details</h1>
                    <SingleDetail
                        changeToHomePage={this.changeToHomePage}
                        singleDetailId={[this.state.singleDetailId]}
                    />
                </React.Fragment>
            );
        } else if (this.state.page === "home") {
            return (
                <React.Fragment>
                    <h1>Home</h1>
                    <div className="container mt-3">
                        <div className="container mt-3 mb-5 px-2 px-md-5" id="searchContainer">
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
                    {this.state.isLoading ? (
                        <div id="loading">Loading</div>
                    ) : (
                        ""
                    )}
                    <div className='cards d-flex'>
                        {this.state.data.map(single => (
                            <React.Fragment key={single._id}>
                                <Card className='watch-card mt-5' >
                                    {/* <Card.Img variant="top" src={require('./watchOne.webp')} />  */}
                                    <Card.Img variant='top' src={single.image} />
                                    <Card.Body>
                                        <Card.Title>{single.model}</Card.Title>
                                        <Card.Text>
                                            {single.brand}
                                        </Card.Text>
                                        <Button className= "button-card" variant="primary" onClick={() => {
                                                this.clickToDetailPage(single);
                                            }}>More details</Button>
                                    </Card.Body>
                                </Card>
                            </React.Fragment>
                        ))}
                    </div>
                </React.Fragment >
            );
        }
    };

    render() {
        return <React.Fragment>{this.renderPage()}</React.Fragment>;
    }
}