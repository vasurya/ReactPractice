import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Col, Container, Row } from "react-bootstrap";
import { render } from "react-dom";

class Day5 extends Component {
  //COMPONENTDIDMOUNT
  // const [cardDetails, updateCardDetails] = useState(null);
  constructor(props) {
    super(props);
    this.state = {
      cardDetails: null,
    };
  }

  componentDidMount() {
    let context = this;
    let url = "https://finalspaceapi.com/api/v0/character/";
    async function getDeets() {
      let res = await fetch(url);
      res = await res.json();
      //console.log(res);
      createList(res);
    }
    getDeets();

    async function createList(totalData) {
      let cardDetails = totalData.map((datapoint) => createCard(datapoint));
      context.setState({ cardDetails: cardDetails });
      //console.log("cardDetails", cardDetails);
    }

    function createCard(user) {
      return (
        //    <div className="card col-md-4 col-xs-6">
        <Col lg={3} sm={6} xs={12}>
          <div className="card">
            <div>
              <img src={user.img_url} alt={user.name} className="avatar" />
            </div>
            <div className="user-info">
              <h2>{user.name}</h2>
              <p>{user.status}</p>
              <ul className="info">
                <li>
                  <strong>Species: </strong>
                  {user.species}
                </li>
                <li>
                  <strong>Gender: </strong>
                  {user.gender}
                </li>
                <li>
                  <strong>Main Ability: </strong>
                  {user.abilities[0] ? user.abilities[0] : "unknown"}
                </li>
                <li>
                  <strong>Origin: </strong>
                  {user.origin}
                </li>
              </ul>
            </div>
          </div>
        </Col>
        //</div>
      );
    }

    console.log("mounted");
  }
  render() {
    return (
      <Container fluid className="Day5">
        <Row>
          <h1>Day 5 - class component</h1>
        </Row>
        {this.state.cardDetails && (
          <Row className="main">{this.state.cardDetails}</Row>
        )}
      </Container>
    );
  }
}

export default Day5;
