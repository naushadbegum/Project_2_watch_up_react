import React from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Edit from './Edit';

export default class MyWatch extends React.Component {
    url = "https://3000-naushadbegu-project2wat-7gl4tkiecw5.ws-us78.gitpod.io/";

    state = {
        data: [],
        searchEmail: "",
        user: {},

        page: "mywatch",
        singleWatchId: null,
        singleWatchClicked: false,
        singleWatchObject: [],
        isLoading: false,
    }

    clickToEditPage = (id) => {
        this.setState({
            page: "edit",
            singleWatchId: id,
            singleWatchClicked: true,
        });
    };

    changeToMyWatchPage = () => {
        this.setState({ page: "mywatch" });
    }

    isLoading = () => {
        this.setState({ isLoading: true })
    }

    closeLoading = () => {
        this.setState({ isLoading: false })
    }

    deleteWatch = async (singleWatchId) => {
        
        let response = await axios.delete(this.url + "watch-listings/" + `${singleWatchId}`)
        console.log(response);
    }

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
        console.log(this.state.searchEmail)
    };

    searchMyWatch = async (e) => {
        this.isLoading();
        try {
            let response = await axios.get(this.url + "watch-listings", {
                params: {
                    user: this.state.user,
                    email: this.state.searchEmail,
                },
            });
            console.log(response.data)
            this.setState({
                data: response.data
            });
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
        this.closeLoading();
    };

    // let 
    // showConfirmDelete = async (watchId) => {
    //     let response = await axios.get(this.url + "watch-listing/" + watchId)
    //     this.setState({
    //         showConfirmDelete: true,
    //     })
    // }

    renderPage = () => {
        if (this.state.page === "edit") {
            try {
                console.log([this.state.singleWatchId]);
            } catch (e) {
                console.log(e);
            }
        return (
            <React.Fragment>
                <Edit
                    // changeToMyWatchPage={this.changeToMyWatchPage}
                    singleWatchId={[this.state.singleWatchId]}
                />
            </React.Fragment>
        );
        } else if (this.state.page === "mywatch") {
            return (
                <React.Fragment>
            <div className="container">
                <input
                    name="searchEmail"
                    type="textbox"
                    className="form-control"
                    id="searchEmail"
                    placeholder="Search for your watch using email"
                    value={this.state.searchEmail}
                    onChange={this.updateFormField}
                />
                <div>
                    <button
                        className="mt-4 btn btn-primary"
                        onClick={this.searchMyWatch}
                    >
                        Search
                    </button>
                </div>
                {this.state.isLoading ? (
                    <div id="loading">Loading</div>
                ) : (
                    ""
                )}
                <div className='d-flex'>
                    {this.state.data.map(single => (
                        <React.Fragment key={single._id}>
                            <Card className='watch-card mt-3' >
                                {/* <Card.Img variant="top" src={require('./watchOne.webp')} />  */}
                                <Card.Img variant='top' src={single.image} />
                                <Card.Body>
                                    <Card.Title>{single.model}</Card.Title>
                                    <Card.Text>
                                        {single.brand}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => {
                                        this.clickToEditPage(single._id);
                                    }}
                                    >Update</Button>
                                    <Button variant="primary" onClick={() => {
                                                this.deleteWatch(single._id);
                                    }}
                                    >Delete</Button>
                                    
                                </Card.Body>
                            </Card>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </React.Fragment>
        );
                                            }
    }

    render() {
        return <React.Fragment>{this.renderPage()}</React.Fragment>;
    }
}
