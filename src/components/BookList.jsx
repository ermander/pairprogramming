import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleBook from './SingleBook';

let books = {
    fantasy: require("../data/fantasy.json"),
    history: require("../data/history.json"),
    horror: require("../data/horror.json"),
    romance: require("../data/romance.json"),
    scifi: require("../data/scifi.json")
}

class BookList extends Component {
    render() {
        // let _books = books["fantasy"]
        let _books = books.fantasy
        // console.log(_books)
        // return <></>

        return (
            <Container>
                <Row className="row-cols-1 row-cols-md-3 row-cols-lg-5">
                    {
                        _books.map( book => <SingleBook book={ book } />)
                    }
                </Row>
            </Container>
        );
    }
}

export default BookList;