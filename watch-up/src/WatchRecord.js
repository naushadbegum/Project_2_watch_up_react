import React from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import Add from "./components/Add";
import Login from "./components/Login";

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
                     onClick={() => {this.setActive("search");
            }}
            >
              Search</button>
           </li>
           <li className="nav-item">
             <button className="nav-link"
                     onClick={() => {this.setActive("add");
            }}
             >
              Add</button>
           </li>
           <li className="nav-item">
             <button className="nav-link"
                     onClick={() => {this.setActive("login");
            }}
            >
              Login</button>
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
      } else if (this.state.active === "search") {
        return(
          <React.Fragment>
            <Search />
          </React.Fragment>
        );
      } else if (this.state.active === "add") {
        return(
        <React.Fragment>
          <Add setActive={this.setActive}/>
        </React.Fragment>
        );
      } else if (this.state.active === "login") {
        <React.Fragment>
          <Login />
        </React.Fragment>
      }
    }
}