import React from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./../css/style.css";
import "./../App.css";

const url = "https://project-2-watchup.onrender.com/";

export default class Edit extends React.Component {
    url = "https://project-2-watchup.onrender.com/";
    state = {
        updateBrand: "",
        updateModel: "",
        updatePrice: 0,
        update_year_made: 0,
        update_water_resistance: "",
        update_glass_material: "",
        updateMovements: "",
        updateImage: "",
        updateGender: "",
        strapId: "",
        caseId: "",


        straps: [],
        cases: [],
        selectedWatchId: [],
        singleWatch: [],


        showBrandError: false,
        showModelError: false,
        showPriceError: false,
        showYearError: false,
        showImageError: false,
        showGenderError: false,
        showUsernameError: false,
        showEmailError: false,

    };

    async componentDidMount() {

        let watchlistingRequest = axios.get(url + "watch-listings");
        let strapsRequest = axios.get(url + "straps");
        let casesRequest = axios.get(url + "cases");
        let singleWatchRequest = axios.get(url + "watch-listing/" + this.props.singleWatchId);
        console.log("this.props.props.singleWatchID=", this.props.singleWatchId)

        let [watchlistingResponse, strapsResponse, casesResponse, singleWatchResponse] =
            await axios.all([
                watchlistingRequest,
                strapsRequest,
                casesRequest,
                singleWatchRequest
            ]);

        let watchlisting = watchlistingResponse.data;
        let straps = strapsResponse.data;
        let cases = casesResponse.data;
        let single = singleWatchResponse.data[0];
        console.log(single);
        // console.log(this.state.singleWatch);


        await this.setState({
            updateBrand: single.brand,
            updateModel: single.model,
            updatePrice: single.price,
            update_year_made: single.year_made,
            update_water_resistance: single.water_resistance,
            update_glass_material: single.glass_material,
            updateMovements: single.movements,
            updateImage: single.image,
            updateGender: single.gender,
        })

        this.setState({
            brand: watchlisting.brand,
            model: watchlisting.model,
            price: watchlisting.price,
            year_made: watchlisting.year_made,
            glass_material: watchlisting.glass_material,
            water_resistance: watchlisting.water_resistance,
            movements: watchlisting.movements,
            image: watchlisting.image,
            gender: watchlisting.gender,
            strapId: straps._id,
            caseId: cases._id,
            straps: straps,
            cases: cases,
            contentLoaded: true,
            singleWatch: single,
        });
    }


    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            //model: seiko
        });
    };

    updateRadioField = (event) => {
        this.setState({
            selectedOption: event.target.value
        });
    };

    // validateUpdate = () => {
    //     let errors = [];
    //     // this.state.brand.trim()
    //     if (!this.state.updateBrand || this.state.updateBrand.length > 50 || this.state.updateBrand === 0) {
    //         this.setState({
    //             showBrandError: true
    //         })
    //     } else {
    //         this.setState({
    //             showBrandError: false
    //         })
    //     }
    //     // this.state.model.trim()
    //     if (!this.state.updateModel || this.state.updateModel.length > 50 || this.state.updateModel === 0) {
    //         this.setState({
    //             showModelError: true
    //         })
    //     } else {
    //         this.setState({
    //             showModelError: false
    //         })
    //     }

    //     // this.state.price.trim()
    //     if (!this.state.updatePrice || this.state.updatePrice <= 0 || this.state.updatePrice > 100000000000 || this.state.updatePrice === 0) {
    //         this.setState({
    //             showPriceError: true
    //         })
    //     } else {
    //         this.setState({
    //             showPriceError: false
    //         })
    //     }
    //     // this.state.year_made.trim()
    //     if (!this.state.update_year_made || this.state.update_year_made > 9999 || this.state.update_year_made === 0) {
    //         this.setState({
    //             showYearError: true
    //         })
    //     } else {
    //         this.setState({
    //             showYearError: false
    //         })
    //     }

    //     // this.state.image.trim()
    //     if (!this.state.updateImage || this.state.updateImage > 300 || this.state.updateImage === 0) {
    //         this.setState({
    //             showImageError: true
    //         })
    //     } else {
    //         this.setState({
    //             showImageError: false
    //         })
    //     }
    //     if (!this.state.updateGender || this.state.updateGender == null) {
    //         this.setState({
    //             showGenderError: true
    //         })
    //     } else {
    //         this.setState({
    //             showGenderError: false
    //         })
    //     }

    //     return errors;
    // };

    async watchUpdate () {
        if (!this.state.updateBrand || this.state.updateBrand.length > 50 || this.state.updateBrand === 0) {
            this.setState({
                showBrandError: true
            })
        } else {
            this.setState({
                showBrandError: false
            })
        }
        // this.state.model.trim()
        if (!this.state.updateModel || this.state.updateModel.length > 50 || this.state.updateModel === 0) {
            this.setState({
                showModelError: true
            })
        } else {
            this.setState({
                showModelError: false
            })
        }

        // this.state.price.trim()
        if (!this.state.updatePrice || this.state.updatePrice <= 0 || this.state.updatePrice > 100000000000 || this.state.updatePrice === 0) {
            this.setState({
                showPriceError: true
            })
        } else {
            this.setState({
                showPriceError: false
            })
        }
        // this.state.year_made.trim()
        if (!this.state.update_year_made || this.state.update_year_made > 9999 || this.state.update_year_made === 0) {
            this.setState({
                showYearError: true
            })
        } else {
            this.setState({
                showYearError: false
            })
        }

        // this.state.image.trim()
        if (!this.state.updateImage || this.state.updateImage > 300 || this.state.updateImage === 0) {
            this.setState({
                showImageError: true
            })
        } else {
            this.setState({
                showImageError: false
            })
        }
        if (!this.state.updateGender || this.state.updateGender == null) {
            this.setState({
                showGenderError: true
            })
        } else {
            this.setState({
                showGenderError: false
            })
        }

        try {
            await axios.put(url + 'watch-listings/' + this.state.singleWatch._id, {
                brand: this.state.updateBrand,
                model: this.state.updateModel,
                price: Number(this.state.updatePrice),
                year_made: Number(this.state.update_year_made),
                gender: this.state.updateGender,
                image: this.state.updateImage,
                water_resistance: this.state.update_water_resistance,
                glass_material: this.state.update_glass_material,
                movements: this.state.updateMovements,
                strapId: this.state.strapId,
                caseId: this.state.caseId,
            })
            const notify = () => toast.success('We have updated the watch detail! You can view in the Home page!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            if (this.state.updateBrand.length > 0 && this.state.updateModel.length > 0 && this.state.updateGender.length > 0 && this.state.updateImage.length > 0 && this.state.update_water_resistance.length && this.state.update_glass_material.length && this.state.updateMovements.length) {
                notify()
            } else {
                console.log("error")
            }
        } catch (error) {
            console.log(error);
        }
    };


    render() {
        return (
            <React.Fragment>
                <section className='edit-page container-fluid d-flex flex-coloumn justify-content-center align-items-center adjust-margin-top'>
                    <div className='container mt-3 mb-5 px-2 px-md-5'>
                        <h3 className='title mt-3 mb-4 mb-lg-5'>Update your watch details</h3>
                        <div className='new-watch-form px-5 py-3'>
                            <h5 className='edit-specs font-weight-500 mt-4'>
                                General Information
                            </h5>
                            <div className='watch-form-group row px-3 py-3 mt-3'>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Brand</Form.Label>
                                    <Form.Control
                                        className="form-control--edit"
                                        type="text"
                                        placeholder="Enter brand name"
                                        name="updateBrand"
                                        value={this.state.updateBrand}
                                        onChange={this.updateFormField}
                                    />
                                    {this.state.showBrandError ? (
                                        <Form.Text className='errorMessage'>
                                            Brand name is invalid
                                        </Form.Text>
                                    ) : (
                                        ''
                                    )}

                                </Form.Group>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Model</Form.Label>
                                    <Form.Control
                                        className="form-control--edit"
                                        type="text"
                                        placeholder="Enter model name"
                                        name="updateModel"
                                        value={this.state.updateModel}
                                        onChange={this.updateFormField}
                                    />
                                    {this.state.showModelError ? (
                                        <Form.Text className='errorMessage'>
                                            Model name is invalid
                                        </Form.Text>
                                    ) : (
                                        ''
                                    )}
                                </Form.Group>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        className="form-control--edit"
                                        type="text"
                                        placeholder="Enter price in USD"
                                        name="updatePrice"
                                        value={this.state.updatePrice}
                                        onChange={this.updateFormField}
                                    />
                                    {this.state.showPriceError ? (
                                        <Form.Text className='errorMessage'>
                                            Price enter an integer from 1 to 100billion
                                        </Form.Text>
                                    ) : (
                                        ''
                                    )}
                                </Form.Group>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Year</Form.Label>
                                    <Form.Control
                                        className="form-control--edit"
                                        type="text"
                                        placeholder="Enter year made"
                                        name="update_year_made"
                                        value={this.state.update_year_made}
                                        onChange={this.updateFormField}
                                    />
                                    {this.state.showYearError ? (
                                        <Form.Text className='errorMessage'>
                                            Enter a valid year
                                        </Form.Text>
                                    ) : (
                                        ''
                                    )}
                                </Form.Group>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Targeted gender</Form.Label>
                                    <Form>
                                        {['radio'].map((type) => (
                                            <div value={this.state.updateGender}
                                                onChange={this.updateFormField}
                                                key={`inline-${type}`}
                                                className="mb-3">
                                                <Form.Check
                                                    inline
                                                    name="updateGender"
                                                    type="radio"
                                                    label="Male"
                                                    value="male"
                                                    checked={this.state.updateGender === "male"}
                                                    onChange={this.updateRadioField} />
                                                <Form.Check
                                                    inline
                                                    name="updateGender"
                                                    type="radio"
                                                    label="Female"
                                                    value="female"
                                                    checked={this.state.updateGender === "female"}
                                                    onChange={this.updateRadioField}
                                                />
                                                <Form.Check
                                                    inline
                                                    name="updateGender"
                                                    type="radio"
                                                    label="Unisex"
                                                    value="unisex"
                                                    checked={this.state.updateGender === "unisex"}
                                                    onChange={this.updateRadioField}
                                                />
                                                {this.state.showGenderError ? (
                                                    <Form.Text className='errorMessage'>
                                                        Please select a gender
                                                    </Form.Text>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                        ))}
                                    </Form>
                                </Form.Group>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        className="form-control--edit"
                                        type="text"
                                        placeholder="Enter image url"
                                        name="image"
                                        value={this.state.updateImage}
                                        onChange={this.updateFormField}
                                    />
                                    {this.state.showImageError ? (
                                        <Form.Text className='errorMessage'>
                                            Enter a valid url
                                        </Form.Text>
                                    ) : (
                                        ''
                                    )}
                                </Form.Group>
                            </div>
                            <h5 className='edit-specs font-weight-500 mt-4'>
                                Case and Strap Information
                            </h5>
                            <div className='watch-form-group row px-3 py-3 mt-3'>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Case Material</Form.Label>
                                    <Form.Select name="caseId" onChange={this.updateFormField}>
                                        <option value='' disabled>
                                            --- Select strap material ---
                                        </option>
                                        {this.state.cases.map(cases => (
                                            <option value={cases._id}>{cases.caseMaterial}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Strap Material</Form.Label>
                                    <Form.Select name="strapId" onChange={this.updateFormField}>
                                        <option value='' disabled>
                                            --- Select strap material ---
                                        </option>
                                        {this.state.straps.map(straps => (

                                            <option value={straps._id}>{straps.strapMaterial}</option>

                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Water Resistance</Form.Label>
                                    <Form.Select
                                        name="update_water_resistance"
                                        value={this.state.update_water_resistance}
                                        onChange={this.updateFormField}>
                                        <option value='' disabled>
                                            --- Select water resistance ---
                                        </option>
                                        <option value="30m">30m</option>
                                        <option value="50m">50m</option>
                                        <option value="100m">100m</option>
                                        <option value="200m">200m</option>
                                        <option value="more than 300m">more than 300m</option>
                                        <option value="no water resistance">No water resistance</option>
                                    </Form.Select>

                                </Form.Group>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Glass material</Form.Label>
                                    <Form.Select
                                        name="update_glass_material"
                                        value={this.state.update_glass_material}
                                        onChange={this.updateFormField}>
                                        <option value='' disabled>
                                            --- Select glass material ---
                                        </option>
                                        <option value="acrylic crystal">Acrylic Crystal</option>
                                        <option value="mineral crystal">Mineral Crystal</option>
                                        <option value="sapphire crystal">Sapphire Crystal</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Movement</Form.Label>
                                    <Form.Select
                                        name="updateMovements"
                                        value={this.state.updateMovements}
                                        onChange={this.updateFormField}>
                                        <option value='' disabled>
                                            --- Select watch movement ---
                                        </option>
                                        <option value="mechanical">Mechanical</option>
                                        <option value="automatic">Automatic</option>
                                        <option value="quartz">Quartz</option>
                                        <option value="smartwatch">Smartwatch</option>
                                        <option value="hybridSmartwatch">Hybrid Smartwatch</option>
                                        <option value="solarpowered">Solar-powered</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Button className="button--primary mt-4" type='edit' onClick={this.watchUpdate.bind(this) }>I'm ready to update!</Button>
                                <ToastContainer position="top-center"
                                    autoClose={5000}
                                    hideProgressBar
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="light" />
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                </section>

            </React.Fragment>

        );

    }
}