import React, { Component } from "react";
import { dataBase } from "./dataBase.js";
import axios from "axios";

import imagenBack from "./assets/img/YouTube-logo.png";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      texto: "",
      modal: [],
    };
    // bind
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  buscar = (event) => {
    event.preventDefault();
    let consulta =
      // "https://search-mysearchdomain-noizompjlwok6xmh2wdztcafy4.sa-east-1.cloudsearch.amazonaws.com/2013-01-01/search?q=" +
      // this.state.texto +
      // "&return=_all_fields&highlight.urlimg=%7B%22max_phrases%22%3A3%2C%22format%22%3A%22text%22%2C%22pre_tag%22%3A%22*%23*%22%2C%22post_tag%22%3A%22*%25*%22%7D&highlight.urlvideo=%7B%22max_phrases%22%3A3%2C%22format%22%3A%22text%22%2C%22pre_tag%22%3A%22*%23*%22%2C%22post_tag%22%3A%22*%25*%22%7D&highlight.word=%7B%22max_phrases%22%3A3%2C%22format%22%3A%22text%22%2C%22pre_tag%22%3A%22*%23*%22%2C%22post_tag%22%3A%22*%25*%22%7D&sort=confidence+desc";

      "https://search-cloud-movies-zkeef6npwlljkwlydjpyfmcftm.sa-east-1.cloudsearch.amazonaws.com/2013-01-01/search?q=" +
      this.state.texto +
      "&return=_all_fields&highlight.urlimg=%7B%22max_phrases%22%3A3%2C%22format%22%3A%22text%22%2C%22pre_tag%22%3A%22*%23*%22%2C%22post_tag%22%3A%22*%25*%22%7D&highlight.urlvideo=%7B%22max_phrases%22%3A3%2C%22format%22%3A%22text%22%2C%22pre_tag%22%3A%22*%23*%22%2C%22post_tag%22%3A%22*%25*%22%7D&highlight.word=%7B%22max_phrases%22%3A3%2C%22format%22%3A%22text%22%2C%22pre_tag%22%3A%22*%23*%22%2C%22post_tag%22%3A%22*%25*%22%7D&sort=confidence+desc";
    axios
      .get(consulta)
      .then((response) => {
        console.log("responseee", response);
        let d = response.data.hits.hit;
        let ban = [];
        for (var i = 0; i < d.length; i++) {
          ban.push(false);
        }
        this.setState({
          data: d,
          modal: ban,
        });
      })
      .catch((error) => {
        console.log("error:: ", error);
      });
  };
  toggle = (e, i) => {
    let t = this.state.modal;
    t[i] = !t[i];
    this.setState({
      modal: t,
    });
  };
  render() {
    let { data, texto, modal } = this.state;
    console.log(texto);
    let ttt = this;
    return (
      <div style={{ background: "black", height: "1290px" }}>
        <Container>
          <img
            src={imagenBack}
            width="350px"
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
          />
          {/* <div style={{ paddingBottom: "100px" }} /> */}

          <Row>
            <Col xs={8} sm={8} sd={8}>
              <Input
                name="texto"
                value={this.state.texto}
                onChange={this.handleChange}
                placeholder="Buscar..."
              />
            </Col>
            <Col xs={4} sm={4} sd={4}>
              <Button onClick={(e) => this.buscar(e)}> Buscar</Button>
            </Col>
            <div style={{ paddingBottom: "100px" }} />
            {data.map(function (item, i) {
              return (
                <Col
                  key={item["id (S)"]}
                  xs={10}
                  sm={10}
                  sd={10}
                  style={{ padding: "10px" }}
                >
                  <Card>
                    <Row>
                      <Col xs={4} sm={4} sd={4}>
                        <video width="300" controls>
                          <source src={item.fields.urlvideo} type="video/mp4" />
                        </video>
                      </Col>
                      <Col xs={6} sm={6} sd={6}>
                        <CardBody>
                          <CardTitle tag="h5">{item.fields.word}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">
                            Precision: {item.fields.confidence}
                          </CardSubtitle>
                        </CardBody>
                      </Col>
                      <Col xs={2} sm={2} sd={2} style={{ alignSelf: "center" }}>
                        <Button onClick={(e) => ttt.toggle(e, i)}>
                          Ver imagen
                        </Button>
                      </Col>
                      <Modal isOpen={modal[i]} toggle={(e) => ttt.toggle(e, i)}>
                        <ModalHeader toggle={(e) => ttt.toggle(e, i)}>
                          <b>{item.fields.word}</b>
                          <br />
                          Precision: {item.fields.confidence}
                        </ModalHeader>
                        <ModalBody>
                          <CardImg
                            top
                            width="100%"
                            src={item.fields.urlimg}
                            alt="Card image cap"
                          />
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="secondary"
                            onClick={(e) => ttt.toggle(e, i)}
                          >
                            Cerrar
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </Row>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
