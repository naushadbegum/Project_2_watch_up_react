import React from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const url = "https://3000-naushadbegu-project2wat-7gl4tkiecw5.ws-us77.gitpod.io/";

export default class Edit extends React.Component {
    url = "https://3000-naushadbegu-project2wat-7gl4tkiecw5.ws-us77.gitpod.io/";
    state = {
        brand: "",
        model: "",
        price: 0,
        year_made: 0,
        water_resistance: "",
        glass_material: "",
        movements: "",
        image: "",
        gender: "",
        strapId: "",
        caseId: "",

        straps: [],
        cases: [],
        contentLoaded: false,
    };

    async componentDidMount() {
        
        let watchlistingRequest = axios.get(url + "watch-listings");
        let strapsRequest = axios.get(url + "straps");
        let casesRequest = axios.get(url + "cases");

        let [watchlistingResponse, strapsResponse, casesResponse] =
            await axios.all([
                watchlistingRequest,
                strapsRequest,
                casesRequest
            ]);

        let watchlisting =  watchlistingResponse.data;
        let straps = strapsResponse.data;
        let cases = casesResponse.data;

        this.setState({
            brand: watchlisting.brand,
            model: watchlisting.model,
            price: watchlisting.price,
            year_made: watchlisting.year_made,
            glass_material: watchlisting.glass_material,
            movements:watchlisting.movements,
            image: watchlisting.image,
            gender: watchlisting.gender,
            strapId: straps._id,
            caseId: cases._id,
            straps: straps,
            cases: cases,
            contentLoaded: true
        });
    }
    watchUpdate = async () => {
        let errors = this.validateUpdate();

        if (errors.length === 0) {

            let requestBody ={
            brand : this.state.brand,
            model : this.state.model,
            price : Number(this.state.price),
            year_made : Number(this.state.year_made),
            gender: this.state.gender,
            image : this.state.image,
            water_resistance : this.state.water_resistance,
            glass_material : this.state.glass_material,
            movements : this.state.movements,
            strapId :  this.state.strapId,
            caseId : this.state.caseId,
        };

try {
    await axios.put(url + 'watchlistings', requestBody);
} catch (error) {
    console.log(error);
}
this.setState({
    errors: errors
});
} else {
        this.setState({
            errors: errors
        });
    }
};

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

validateUpdate = () => {
    let errors = [];
    this.state.brand.trim()
        if (!this.state.brand || this.state.brand.length > 50 || this.state.brand === 0) {
            this.setState({
                showBrandError: true
            })
        } else {
            this.setState({
                showBrandError: false
            })
        }
        this.state.model.trim()
        if (!this.state.model || this.state.model.length > 50 || this.state.model === 0) {
            this.setState({
                showModelError: true
            })
        } else {
            this.setState({
                showModelError: false
            })
        }

        // this.state.price.trim()
        if (!this.state.price || this.state.price <= 0 || this.state.price > 100000000000 || this.state.price === 0) {
            this.setState({
                showPriceError: true
            })
        } else {
            this.setState({
                showPriceError: false
            })
        }
        // this.state.year_made.trim()
        if (!this.state.year_made || this.state.year_made > 9999 || this.state.year_made === 0) {
            this.setState({
                showYearError: true
            })
        } else {
            this.setState({
                showYearError: false
            })
        }

        // this.state.image.trim()
        if (!this.state.image || this.state.image > 300 || this.state.image === 0) {
            this.setState({
                showImageError: true
            })
        } else {
            this.setState({
                showImageError: false
            })
        }
        if (!this.state.gender || this.state.username == null) {
            this.setState({
                showGenderError: true
            })
        } else {
            this.setState({
                showGenderError: false
            })
        }

        if (!this.state.username || this.state.username.length > 100) {
            this.setState({
                showUserNameError: true
            })
        } else {
            this.setState({
                showUserNameError: false
            })
        }

        if ((this.state.email.includes("@") && this.state.email.includes("."))) {
            this.setState({
                showEmailError: false
            })
        } else {
            this.setState({
                showEmailError: true
            })
        }
        return errors;
};


    render() {
        return (
            <React.Fragment>
                <section className='container-fluid d-flex flex-coloumn justify-content-center align-items-center adjust-margin-top'>
                    <div className='container mt-3 mb-5 px-2 px-md-5'>
                        <h1 className='mt-3 mb-4 mb-lg-5'>Edit your watch</h1>
                        <div className='new-watch-form px-5 py-3'>
                            <h5 className='font-weight-500 mt-4'>
                                General Information
                            </h5>
                            <div className='watch-form-group row px-3 py-3 mt-3'>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Brand</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter brand name"
                                        name="brand"
                                        value={this.state.brand}
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
                                        type="text"
                                        placeholder="Enter model name"
                                        name="model"
                                        value={this.state.model}
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
                                        type="text"
                                        placeholder="Enter price in USD"
                                        name="price"
                                        value={this.state.price}
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
                                        type="text"
                                        placeholder="Enter year made"
                                        name="year_made"
                                        value={this.state.year_made}
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
                                            <div value={this.state.gender}
                                                onChange={this.updateFormField}
                                                key={`inline-${type}`}
                                                className="mb-3">
                                                <Form.Check
                                                    inline
                                                    name="gender"
                                                    type="radio"
                                                    label="Male"
                                                    value="male"
                                                    checked={this.state.gender === "male"}
                                                    onChange={this.updateRadioField} />
                                                <Form.Check
                                                    inline
                                                    name="gender"
                                                    type="radio"
                                                    label="Female"
                                                    value="female"
                                                    checked={this.state.gender === "female"}
                                                    onChange={this.updateRadioField}
                                                />
                                                <Form.Check
                                                    inline
                                                    name="gender"
                                                    type="radio"
                                                    label="Unisex"
                                                    value="unisex"
                                                    checked={this.state.gender === "unisex"}
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
                                        type="text"
                                        placeholder="Enter image url"
                                        name="image"
                                        value={this.state.image}
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
                            <h5 className='font-weight-500 mt-4'>
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
                                        name="water_resistance"
                                        value={this.state.water_resistance}
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
                                        name="glass_material"
                                        value={this.state.glass_material}
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
                                        name="movements"
                                        value={this.state.movements}
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

                                <Form.Group className='col-lg-6 mb-3'></Form.Group>
                            </div>
                            <h5 className='font-weight-500 mt-4'>
                                Personal Information
                            </h5>
                            <div className='watch-form-group row px-3 py-3 mt-3'>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter username"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.updateFormField}
                                    />
                                    {this.state.showUserNameError ? (
                                        <Form.Text className='errorMessage'>
                                            Enter a valid username
                                        </Form.Text>
                                    ) : (
                                        ''
                                    )}
                                </Form.Group>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.updateFormField}
                                    />
                                    {this.state.showEmailError ? (
                                        <Form.Text className='errorMessage'>
                                            Enter a valid email
                                        </Form.Text>
                                    ) : (
                                        ''
                                    )}
                                </Form.Group>

                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                </section>
                <button className="btn btn-primary mt-3" onClick={() => { this.watchUpdate() }}>Update Watch</button>
            </React.Fragment>
        
    );

    }
}