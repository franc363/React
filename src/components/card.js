import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Card = ({ card }) => {
  return (
    <div>
      <ListGroupItem className="col-md-12 list-group-item">
        <div>{card.name}</div>
      </ListGroupItem>
    </div>
  );
};

export default Card;
