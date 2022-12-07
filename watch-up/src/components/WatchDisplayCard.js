import React from 'react';
import Card from 'react-bootstrap/Card';


export default class WatchDisplayCard extends React.Component {
    url = "https://3000-naushadbegu-project2wat-7gl4tkiecw5.ws-us77.gitpod.io/";

    state = {

    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="watchOne.webp/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">More details</Button>
                </Card.Body>
            </Card>
        );

    }
}