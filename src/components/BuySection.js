import React, { useState, useEffect } from "react";

import Axios from "axios";
import faker from "faker";
import { Container, Col, Row } from "reactstrap";
import CardItem from "./CardItem";


const apikey = "INSERT_YOUR_KEY";

const url = "https://jsonkeeper.com/b/HBP6";

const BuySection = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(url, {});
    // console.log("DATA", data);

    const { photos } = data;

    const allProducts = photos.map((photo) => ({
      smallImages: photo.src.medium,
      tinyImages: photo.src.tiny,
      productName: faker.random.word(),
      productPrice: faker.commerce.price(),
      id:faker.random.uuid()
    }));

    setProduct(allProducts);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">this is a list</h1>
      <Row>
        {product.map((product) => (
          <Col md="4" key={product.id}>
              <CardItem product={product} addInCart={addInCart}/>
              {console.log}
          </Col>
        ))}
      </Row>
    </Container>
  );
};


export default BuySection;
