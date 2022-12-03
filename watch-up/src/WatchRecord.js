import React from "react";
import Home from "./components/Home";
// import Search from "./components/Search";
import AddNew from "./components/AddNew";
import Edit from "./components/Edit";

export default class WatchRecord extends React.Component {
  state={
    'active': 'home'
  }
  setActive = (page) => {
    this.setState({
      'active' : page
    })
  }
    render() {
        return <React.Fragment>
            <div className="container">
         <ul className="nav nav-tabs">
           <li className="nav-item">
             <button className="nav-link active" 
                     aria-current="page"
                     onClick={() => {this.setActive("home");
            }}
            >
               Home</button>
           </li>
           <li className="nav-item">
             <button className="nav-link" 
                     onClick={() => {this.setActive("edit");
            }}
            >
              Edit</button>
           </li>
           <li className="nav-item">
             <button className="nav-link"
                     onClick={() => {this.setActive("addnew");
            }}
             >
              Add New</button>
           </li>

         </ul>
         {this.renderContent()}
       </div>
        </React.Fragment>;
    }
    renderContent(){
      if (this.state.active === "home") {
        return(
          <React.Fragment>
            <Home />
          </React.Fragment>
        );
      } else if (this.state.active === "edit") {
        return(
          <React.Fragment>
            <Edit />
          </React.Fragment>
        );
      } else if (this.state.active === "addnew") {
        return(
        <React.Fragment>
          <AddNew />
        </React.Fragment>
        );
      } 
    }
}