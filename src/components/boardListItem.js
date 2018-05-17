import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const BoardListItem = ({ board, handleClick }) => {
  return (
    <ListGroupItem
      className="list-group-item"
      onClick={() => handleClick(board)}
    >
      <a>{board.name}</a>
    </ListGroupItem>
  );
};

export default BoardListItem;
