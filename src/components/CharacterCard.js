import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

const CharacterCard = props => {
  console.log("character card props: ", props);
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setCurrent(response.data);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  if (!current) {
    return <div>Loading character information...</div>;
  }

  return (
    <div>
      <Card>
        {/* <CardImg width="100px" src={current.image} alt="Character image" /> */}
        <CardBody>
          <CardTitle>Name: {current.name}</CardTitle>
          <CardText>Status: {current.status}</CardText>
          <CardText>Species: {current.species}</CardText>
          <CardText>
            <Link to="/">Return Home</Link>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CharacterCard;
