import React from "react";
import axios from "axios";

export default class Search extends React.Component {
    url = "https://3000-naushadbegu-project2wat-7gl4tkiecw5.ws-us77.gitpod.io/";

    state = {
        data: []
    };
    
    render() {
    return (
        <React.Fragment>
        <div className="container">
           <h1>Search</h1>
           {this.state.data.map(s => <React.Fragment key={s._id}>
               <div className="card">
                   <div className="card-body">
                       <h3 className="card-title">
                           {s.brand}
                       </h3>
                       <h3 className="card-title">
                            {s.model}
                       </h3>
                   </div>
               </div>
           </React.Fragment>)}
       </div>
   </React.Fragment>
    )
}
async componentDidMount() {
    let response = await axios.get(this.url + "watch-listings");
    this.setState({
        data: response.data
    });
    // console.log(response.data);
}
}