import React from 'react';
import BoardListItem from './boardListItem';
import { ListGroup } from 'react-bootstrap';

const BoardList = props => {
  const boardItem = props.boards.map((board, index) => {
    return (
      <BoardListItem
        key={board.id}
        board={board}
        handleClick={props.handleClick}
      />
    );
  });
  return <ListGroup className="col-md-4 list-group">{boardItem}</ListGroup>;
};

export default BoardList;
