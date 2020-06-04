import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class SingleBook extends Component {
    render() {
        return (
            <div className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>
                            {this.props.title}
                        </Card.Title>
                        <Card.Text>
                        <div className="d-flex justify-content-around">
                            <div>
                                {this.props.category}
                            </div>
                            <div>
                                €{this.props.price}
                            </div>                            
                        </div>
                        <div>
                        <Button variant="primary">Add To Cart</Button> 
                        </div>                                                    
                        </Card.Text>                        
                    </Card.Body>
                </Card>                                    
            </div>
        );
    }
}

export default SingleBook;


/*
Create a SingleBook component. The component receives as a prop a book object and display the cover and the
title of the book. Use react-bootstrap Cards to display a book (The book object can be read from the one of the .json
book files)
*/