import React from "react";
import axios from "axios";

export default class Add extends React.Component {
url =  "https://3000-naushadbegu-project2wat-7gl4tkiecw5.ws-us77.gitpod.io/";

state = {
    newBrand: "",
    newModel: ""
};

updateFormField = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
};

add = async () => {
    let response = await axios.post(this.url + "watch-listings", {
        brand: this.state.newBrand,
        model: this.state.newModel
    });
    this.props.setActive("home");
}

    render() {
    return (
        <React.Fragment>
            <h1>Add new watch</h1>
            <div>
                <div className ="label">Brand</div>
                <input
                    type="text"
                    className="form-control"
                    name="newBrand"
                    value={this.state.newBrand}
                    onChange={this.updateFormField}
                />
            </div>
            <div>
                <div className ="label">Model</div>
                <input
                    type="text"
                    className="form-control"
                    name="newModel"
                    value={this.state.newModel}
                    onChange={this.updateFormField}
                />
            </div>
            <button className="btn btn-primary mt-3" onClick={this.add}>Add new watch</button>
        </React.Fragment>
    );
    }
}