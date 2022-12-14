import React from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Edit from './Edit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./../css/style.css";

export default class MyWatch extends React.Component {
    url = "https://project-2-watchup.onrender.com/";

    state = {
        data: [],
        searchEmail: "",

        page: "mywatch",
        singleWatchId: null,
        singleWatchClicked: false,
        singleWatchObject: [],
        isLoading: false,

        invalidEmail: false,
        emailSearchSuccess: false,
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

    // isLoading = () => {
    //     this.setState({ isLoading: true })
    // }

    // closeLoading = () => {
    //     this.setState({ isLoading: false })
    // }

    deleteWatch = async (singleWatchId) => {

        let response = await axios.delete(this.url + "watch-listings/" + `${singleWatchId}`)
        console.log(response);
        const notify = () => toast.success('Your collection is deleted! It will not be in the Home page anymore!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        notify()
    }

    async componentDidMount() {
        // this.isLoading();
        try {
            let response = await axios.get(this.url + "watch-listings");
            this.setState({ data: response.data });
        } catch (e) {
            console.log(e);
        }
        // this.closeLoading();
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log(this.state.searchEmail)
    };

    searchMyWatch = async (e) => {

        if (!this.state.searchEmail.includes("@") || !this.state.searchEmail.includes(".")) {
            this.setState({
                invalidEmail: "formatIncorrect",
                data: [],
                emailSearchSuccess: false
            })
        } else {
            // this.isLoading();
            try {
                let response = await axios.get(this.url + "watch-listings", {
                    params: {
                        email: this.state.searchEmail,
                    },
                });
                // console.log(response.data)
                this.setState({
                    data: response.data,
                    emailSearchSuccess: true,
                    invalidEmail: false,
                });

                // console.log(response.data);
            } catch (e) {
                console.log(e);
                this.setState({
                    data: [],
                    emailSearchSuccess: false,
                    invalidEmail: "emailIncorrect"
                })
            }
            // this.closeLoading();
        };
    }

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
                    <section className='search-page container-fluid d-flex flex-coloumn justify-content-center align-items-center adjust-margin-top '>
                        <div className='container mt-3 mb-5 px-2 px-md-5'>
                            <h3 className='title mt-4'>My Watch Up Collection</h3>
                            <div className="search-container px-5 py-3">
                                <h5 className='search-bar mt-4'>
                                    Email
                                </h5>
                                <input
                                    name="searchEmail"
                                    type="text"
                                    className="form-control--mywatch"
                                    id="searchEmail"
                                    placeholder="Search using your email"
                                    value={this.state.searchEmail}
                                    onChange={this.updateFormField}
                                />
                                <div>
                                    <button
                                        className="button--primary-my-watch-search mt-4"
                                        id="mywatch-button"
                                        onClick={this.searchMyWatch}
                                    >
                                        Search
                                    </button>
                                </div>
                                {this.state.invalidEmail === "emailIncorrect" && <div className='mywatch-error-message'> Email not found. Enter the email you used to create the watch listing.</div>}
                                {this.state.invalidEmail === "formatIncorrect" && <div className='mywatch-error-message'> Enter email in valid format eg. watch@gmail.com </div>}
                                
                                {this.state.emailSearchSuccess ?
                                    // {this.state.isLoading ? (
                                    //     <div id="loading">Loading</div>
                                    // ) : (
                                    //     ""
                                    // )}
                                    <React.Fragment>
                                        <div className='my-watch-card d-flex'>
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
                                                            <Button className="button--primary-mywatch-card" variant="primary" onClick={() => {
                                                                this.clickToEditPage(single._id);
                                                            }}
                                                            >Update</Button>
                                                            <Button className="button--primary-mywatch-card" variant="primary" onClick={() => {
                                                                this.deleteWatch(single._id);
                                                            }}
                                                            >Delete</Button>
                                                            <ToastContainer
                                                                position="top-center"
                                                                autoClose={5000}
                                                                hideProgressBar
                                                                newestOnTop={false}
                                                                closeOnClick
                                                                rtl={false}
                                                                pauseOnFocusLoss
                                                                draggable
                                                                pauseOnHover
                                                                theme="light"
                                                            />

                                                        </Card.Body>
                                                    </Card>
                                                </React.Fragment>

                                            ))}

                                        </div>
                                    </React.Fragment>
                                    : ""}

                            </div>
                        </div>
                    </section>
                    <div className="footer">
                        <p> © WATCH UP. All rights reserved.</p>    
                    </div>

                </React.Fragment>
            );
        }
    }

    render() {
        return <React.Fragment>{this.renderPage()}</React.Fragment>;
    }
}
