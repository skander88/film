import React from "react";
import Card from "react-bootstrap/Card";

const MovieCard = ({ min }) => {
  const { Title, Description, PosterURL, Rate } = min;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={PosterURL} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          Description : {Description} <br /> Rate : {Rate}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
