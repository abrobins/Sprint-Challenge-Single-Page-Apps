import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardTitle, CardText, Button } from "reactstrap";

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
      <Card body outline color="secondary">
        {/* <CardImg
          width="50%"
          src={current.image}
          alt="Character image"
        /> */}

        <CardTitle>
          <strong>Name:</strong> {current.name}
        </CardTitle>
        <CardText>
          <strong>Status:</strong> {current.status}
        </CardText>
        <CardText>
          <strong>Species:</strong> {current.species}
        </CardText>
        <CardText>
          <Link to="/">
            <Button outline color="primary">
              Return Home
            </Button>
          </Link>
        </CardText>
      </Card>
    </div>
  );
};

export default CharacterCard;
