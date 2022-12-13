import React from "react";
import axios from "axios";
import "../components/SingleDetail";
import SingleDetail from "../components/SingleDetail";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./../css/style.css";
import Form from 'react-bootstrap/Form';

export default class Home extends React.Component {
    url = "https://project-2-watchup.onrender.com";
    state = {
        data: [],

        // search criteria
        searchBrand: "",
        searchModel: "",
        searchMovements: "",
        searchGender: "",
        searchGlassMaterial: "",


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
                    glass_material: this.state.glass_material,
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
                    <h3 className="title">Watch Details</h3>
                    <SingleDetail
                        changeToHomePage={this.changeToHomePage}
                        singleDetailId={[this.state.singleDetailId]}
                    />
                </React.Fragment>
            );
        } else if (this.state.page === "home") {
            return (
                <React.Fragment>
                    <div className="banner"></div>
                    <section className='home container-fluid d-flex flex-coloumn justify-content-center align-items-center adjust-margin-top '>
                        <div className='container mt-3 mb-5 px-2 px-md-5'>
                            <h3 className='title mt-4'>Explore our collection</h3>
                            <div className='px-5 py-3'>
                                <div className="container mt-3 mb-5 px-2 px-md-5" id="searchContainer">
                                    <Form.Group className="container col-lg-6 mb-3">
                                        <Form.Label>Brand</Form.Label>
                                        <Form.Control
                                            name="searchBrand"
                                            type="text"
                                            className="form-control"
                                            id="searchBrand"
                                            placeholder="Search by watch brand"
                                            value={this.state.searchBrand}
                                            onChange={this.updateFormField}
                                        />
                                    </Form.Group>
                                    <Form.Group className="container col-lg-6 mb-3">
                                        <Form.Label>Model</Form.Label>
                                        <Form.Control
                                            name="searchModel"
                                            type="text"
                                            className="form-control"
                                            id="searchModel"
                                            placeholder="Search by watch model"
                                            value={this.state.searchModel}
                                            onChange={this.updateFormField}
                                        />
                                    </Form.Group>

                                    <Form.Group className='container col-lg-6 mb-3'>
                                        <Form.Label>Targeted gender</Form.Label>
                                        <Form className="form-check form-check-inline">
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
                                        </Form>
                                        <Form className="form-check form-check-inline">
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
                                        </Form>
                                        <Form className="form-check form-check-inline">
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
                                        </Form>
                                    </Form.Group>
                                    <Form.Group className='container col-lg-6 mb-3'>
                                        <Form.Label>Movement</Form.Label>
                                        <Form.Select
                                            className="form-select inputbox"
                                            name="searchMovements"
                                            onChange={this.updateFormField}
                                            value={this.state.searchMovements}
                                        >
                                            <option value='' disabled>
                                                --- Search by watch movement ---
                                            </option>
                                            <option value="mechanical">Mechanical</option>
                                            <option value="automatic">Automatic</option>
                                            <option value="quartz">Quartz</option>
                                            <option value="smartwatch">Smartwatch</option>
                                            <option value="hybridSmartwatch">Hybrid Smartwatch</option>
                                            <option value="solarpowered">Solar-powered</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className='container col-lg-6 mb-3'>
                                    <Form.Label>Glass material</Form.Label>
                                    <Form.Select
                                        name="glass_material"
                                        value={this.searchGlassMaterial}
                                        onChange={this.updateFormField}>
                                        <option value='' disabled>
                                            --- Select glass material ---
                                        </option>
                                        <option value="acrylic crystal">Acrylic Crystal</option>
                                        <option value="mineral crystal">Mineral Crystal</option>
                                        <option value="sapphire crystal">Sapphire Crystal</option>
                                    </Form.Select>
                                </Form.Group>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <Button
                                        className="button--primary mt-4"
                                        onClick={this.filterSearch}
                                    >
                                        Explore
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </section >
                    {
                        this.state.isLoading ? (
                            <div id="loading">Loading</div>
                        ) : (
                            ""
                        )
                    }
                    < div className='cards d-flex' >
                        {
                            this.state.data.map(single => (
                                <React.Fragment key={single._id}>
                                    <Card className='watch-card mt-5' >
                                        {/* <Card.Img variant="top" src={require('./watchOne.webp')} />  */}
                                        <Card.Img variant='top' src={single.image} />
                                        <Card.Body className="card_info">
                                            <Card.Title>{single.model}</Card.Title>
                                            <Card.Text>
                                                {single.brand}
                                            </Card.Text>
                                            <Button className="button--primary-card" variant="primary" onClick={() => {
                                                this.clickToDetailPage(single);
                                            }}>More details</Button>
                                        </Card.Body>
                                    </Card>
                                </React.Fragment>
                            ))
                        }
                    </div >
                </React.Fragment >
            );
        }
    };

    render() {
        return <React.Fragment>{this.renderPage()}</React.Fragment>;
    }
}