// import React from "react";
// import axios from "axios";
// import Form from 'react-bootstrap/Form';
// // import Dropdown from 'react-bootstrap/Dropdown';
// // import Button from 'react-bootstrap/Button';

// export default class Add extends React.Component {
//     url = "https://3000-naushadbegu-project2wat-7gl4tkiecw5.ws-us77.gitpod.io/";

//     state = {
//         newBrand: "",
//         newModel: "",
//         newPrice: 0,
//         newYear: 0,
//         newWaterResistance: "",
//         newGlassMaterial: "",
//         newMovements: "",
//         newWatchCalender: {},
//         newImage: "",
//         newGender: "",
//         strap: [],
//         newStrap: "",
//         newUser: "",
//         newReview: [],
//         newWatchCase: ""
//     };


//     async addList() {
//         let brand = this.state.newBrand;
//         let model = this.state.newModel;
//         let price = this.state.newPrice;
//         let year_made = this.state.newYear;
//         let water_resistance = this.state.newWaterResistance;
//         let glass_material = this.state.newGlassMaterial;
//         let movements = this.state.newMovements;
//         let watch_calender = {};
//         let image = this.state.newImage;
//         let gender = this.state.newGender;
//         let strap = this.state.newStrap;
//         let user = "637b58307d101a38202d3194";
//         let watch_case = "637b58307d101a38202d3192";

//         try {
//             let response = await axios.post(this.url + "create-listings", {
//                 brand,
//                 model,
//                 price,
//                 year_made,
//                 water_resistance,
//                 glass_material,
//                 movements,
//                 watch_calender,
//                 image,
//                 gender,
//                 strap,
//                 user,
//                 watch_case
//             })
//             console.log(response);
//         } catch (e) {
//             console.log(e)
//         }
//     }

    


//     updateFormField = (e) => {
//         if (e.target.type === "checkbox") {
//             let currentValues = this.state[e.target.name];
//             let modifiedValues;
//             if (!currentValues.includes(e.target.value)) {
//                 modifiedValues = [...currentValues, e.target.value];
//             } else {
//                 modifiedValues = currentValues.filter((element) => {
//                     return element !== e.target.value
//                 })
//             }
//             this.setState({
//                 [e.target.name]: modifiedValues
//             })
//         } else {
//             this.setState({
//                 [e.target.name]: e.target.value
//             })
//         }
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <section className='container-fluid d-flex flex-coloumn justify-content-center align-items-center adjust-margin-top'>
//                     <div className='container mt-3 mb-5 px-2 px-md-5'>
//                         <h1 className='mt-3 mb-4 mb-lg-5'>List your watch</h1>
//                         <div className='new-watch-form px-5 py-3'>
//                             <h5 className='font-weight-500 mt-4'>
//                                 General Information
//                             </h5>
//                             <div className='recipe-form-group row px-3 py-3 mt-3'>
//                                 <Form.Group className='col-lg-6 mb-3'>
//                                     <Form.Label>Brand</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter brand name"
//                                         name="newBrand"
//                                         value={this.state.newBrand}
//                                         onChange={this.updateFormField}
//                                     />
//                                 </Form.Group>

//                                 <Form.Group className='col-lg-6 mb-3'>
//                                     <Form.Label>Model</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter model name"
//                                         name="newModel"
//                                         value={this.state.newModel}
//                                         onChange={this.updateFormField}
                                        
//                                     />
//                                 </Form.Group>
//                                 alert({this.state.newModel});

//                                 <Form.Group className='col-lg-6 mb-3'>
//                                     <Form.Label>Price</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter price in USD"
//                                         name="newPrice"
//                                         value={this.state.newPrice}
//                                         onChange={this.updateFormField}
//                                     />
//                                 </Form.Group>

//                                 <Form.Group className='col-lg-6 mb-3'>
//                                     <Form.Label>Year made</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter year made"
//                                         name="newYear"
//                                         value={this.state.newYear}
//                                         onChange={this.updateFormField}
//                                     />
//                                 </Form.Group>

//                                 <Form.Group className='col-lg-6 mb-3'>
//                                     <Form.Label>Image url</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter image url"
//                                         name="newImage"
//                                         value={this.state.newImage}
//                                         onChange={this.updateFormField}
//                                     />
//                                 </Form.Group>

//                                 <Form.Group className='col-lg-6 mb-3'>
//                                     <Form.Label>Gender</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter targeted gender"
//                                         name="newGender"
//                                         value={this.state.newGender}
//                                         onChange={this.updateFormField}
//                                     />
//                                 </Form.Group>
//                             </div>
//                             <h5 className='font-weight-500 mt-4'>
//                                 Strap Details
//                             </h5>
//                             <div classname='watch-form-group row px-3 mt-3'>

//                                 <Form.Group className='col-lg-6 mb-3'>
//                                     <Form.Label>
//                                         Water resistance
//                                     </Form.Label>
//                                     <Form.Select
//                                     onChange={this.updateFormField}
//                                     />
//                                     <option value="50m">50m</option>
//                                     <option value="100m">100m</option>
//                                     <option value="200m">200m</option>
//                                     <option value="more than 300m">more than 300m</option>
//                                     </Form.Select>
//                                 </Form.Group>
                                    
//                                 <Form.Group className='col-lg-6 mb-3'>
//                                     <Form.Label>
//                                         Material and Colour
//                                     </Form.Label>
//                                     <Form.Select
//                                     name="strap"
//                                     value={this.state.strap}
//                                     onChange={this.updateFormField}
//                                     >
//                                     console.log();


// {this.state.newStrap.map(strap => {
//                                         return(
//                                             <option value={strap._id}></option>
//                                         );
//                                     })}
//                                     </Form.Select>
//                                 </Form.Group>
//                             </div>


//                         </div>
//                     </div>
//                     <button className="btn btn-primary mt-3" onClick={() => { this.addList() }}>Add new watch</button>
//                 </section>
//             </React.Fragment>
//         );
//     }
// }