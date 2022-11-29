import React from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'


export default class AddNew extends React.Component {
    url = "https://3000-naushadbegu-project2wat-7gl4tkiecw5.ws-us77.gitpod.io/";

    state = {
        brand: "",
        model: "",
        price: 0,
        year_made: 0,
        water_resistance: "",
        glass_material: "",
        movements: "",
        watch_calender: {},
        image: "",
        gender: "",
        username: "",
        email: "",


        strapId: "",
        strap: [],

        watch_caseId: "",
        watch_case: [],

        showBrandError: false,
        showModelError: false,
        showPriceError: false,
        showYearError: false,
        showImageError: false,
        showUsernameError: false,
        showEmailError: false
    };



    async componentDidMount() {
        let strapResponse = await axios.get(this.url + "strap");
        console.log(strapResponse.data);
        let caseResponse = await axios.get(this.url + "case");
        console.log(strapResponse.data);

        this.setState({
            strap: strapResponse.data,
            watch_case: caseResponse.data
        })
    }

    async addNew() {
        //initialise the attributes
        let brand = this.state.brand;
        let model = this.state.model;
        let price = Number(this.state.price);
        let year_made = Number(this.state.year_made);
        let gender = this.state.gender;
        let image = this.state.image;
        let water_resistance = this.state.water_resistance;
        let glass_material = this.state.glass_material;
        let movements = this.state.movements;
        
        
        let watch_calender = {
            "day": Number(this.state.day),
            "month": Number(this.state.month),
            "year": Number(this.state.year)
        }


        this.state.brand.trim()
        if (!this.state.brand || this.state.brand.length > 50 || this.state.brand == 0) {
            this.setState({
                showBrandError: true
            })
        } else {
            this.setState({
                showBrandError: false
            })
        }
        this.state.model.trim()
        if (!this.state.model || this.state.model.length > 50 || this.state.model == 0) {
            this.setState({
                showModelError: true
            })
        } else {
            this.setState({
                showModelError: false
            })
        }

        // this.state.price.trim()
        if (!this.state.price || this.state.price <= 0 || this.state.price > 100000000000 || this.state.price == 0) {
            this.setState({
                showPriceError: true
            })
        } else {
            this.setState({
                showPriceError: false
            })
        }
        // this.state.year_made.trim()
        if (!this.state.year_made || this.state.year_made > 9999 || this.state.year_made == 0) {
          this.setState({
                showYearError: true
            })
        } else {
            this.setState({
                showYearError: false
            })
        }

        // this.state.image.trim()
        if (!this.state.image || this.state.image > 300 || this.state.image == 0) {
            this.setState({
                showImageError: true
            })
        } else {
            this.setState({
                showImageError: false
            })
        }

        if (!this.state.username || this.state.username.length > 100) {
            this.setState({
                showUserNameError: true
            })
        } else {
            await this.setState({
                showUserNameError: false
            })
        }

        if ((this.state.email.includes("@") && this.state.email.includes("."))) {
            this.setState({
                showEmailError: false
            })
        } else {
            await this.setState({
                showEmailError: true
            })
        }


        // if (!this.state.showBrandError){
        //     let createdBy = {

        //     }
        // }
        // let day = this.state.day;
        // let month = this.state.month;
        // let year = this.state.year;

        // let watch_calender = this.state.watch_calender;
        // let strapId = this.state.strapId;

        try {
            let response = await axios.post(this.url + "create-listings", {
                brand,
                model,
                price,
                year_made,
                water_resistance,
                glass_material,
                movements,
                image,
                gender,
                watch_calender

            })
            console.log(response)
        } catch (e) {
            console.log(e);
        }
    }

    // checkError = async () => {
    //     let addData = {
    //         brand: this.state.brand
    //     }
    //     let isValid = await addSchema.isValid(addData);
    //     console.log(isValid);
    //     this.setState({
    //         noError: isValid
    //     })
    // }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            //model: seiko
        });
    };

    onValueChange = (event) => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    // updateCheckbox = (event) => {
    //     if 
    //     this.setState({

    //     })
    // }

    errorPopupClose = () => {
        this.setState({
            addErrorShow: false
        })
    }

    errorPopupShow = () => {
        this.setState({
            addErrorShow: true
        })
    }



    render() {
        return (
            <React.Fragment>
                <section className='container-fluid d-flex flex-coloumn justify-content-center align-items-center adjust-margin-top'>
                    <div className='container mt-3 mb-5 px-2 px-md-5'>
                        <h1 className='mt-3 mb-4 mb-lg-5'>List your watch</h1>
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
                                    {/* <Form.Control
                                        name="gender"
                                        value={this.state.gender}
                                        onChange={this.updateFormField}
                                    /> */}
                                    <Form>
                                        {['radio'].map((type) => (
                                            <div value={this.state.gender}
                                                 onChange={this.updateFormField} 
                                                 key={`inline-${type}`} 
                                                 className="mb-3">
                                                <Form.Check
                                                    // inline
                                                    // label="Male"
                                                    // name="group1"
                                                    // type={type}
                                                    // id={`inline-${type}-1`}
                                                    inline
                                                    name="gender"
                                                    type="radio"
                                                    label="Male"
                                                    value="male"
                                                    checked={this.state.gender === "male"}
                                                    onChange={this.onValueChange}                                                />
                                                <Form.Check
                                                    // inline
                                                    // label="Female"
                                                    // name="group1"
                                                    // type={type}
                                                    // id={`inline-${type}-2`}
                                                    inline
                                                    name="gender"
                                                    type="radio"
                                                    label="Female"
                                                    value="female"
                                                    checked={this.state.gender === "female"}
                                                    onChange={this.onValueChange}  
                                                />
                                                      <Form.Check
                                                    // inline
                                                    // label="Unisex"
                                                    // name="group1"
                                                    // type={type}
                                                    // id={`inline-${type}-2`}
                                                    inline
                                                    name="gender"
                                                    type="radio"
                                                    label="Unisex"
                                                    value="unisex"
                                                    checked={this.state.gender === "unisex"}
                                                    onChange={this.onValueChange}  
                                                />
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
                                    <Form.Label>Case Material and Colour</Form.Label>
                                    <Form.Select name="watch_caseId" onChange={this.updateFormField}>
                                        {this.state.watch_case.map(watch_case => (
                                            <option value={watch_case._id}>{watch_case.name}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Strap Material and Colour</Form.Label>
                                    <Form.Select name="strapId" onChange={this.updateFormField}>
                                        {this.state.strap.map(strap => (
                                            <option value={strap._id}>{strap.name}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Water Resistance</Form.Label>
                                    <Form.Select
                                        name="water_resistance"
                                        value={this.state.water_resistance}
                                        onChange={this.updateFormField}>
                                        <option disabled>
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
                                        <option disabled>
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
                                        <option disabled>
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

                                <Form.Group className='col-lg-6 mb-3'>
                                    <Form.Label>Calender</Form.Label>
                                    <Form>
                                        {['checkbox'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3">
                                                <Form.Check
                                                    inline
                                                    label="Day"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Month"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Year"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                            </div>
                                        ))}
                                    </Form>
                                </Form.Group>

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
                                          {this.state.showUsernameError ? (
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
                    <button className="btn btn-primary mt-3" onClick={() => { this.addNew() }}>Add new watch</button>
                    <div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}