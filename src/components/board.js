import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { config } from '../config/config';
import ListsListItem from './listsListItem';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      selectedBoard: null
    };
    this.getLists(this.props.boardId);
  }

  getLists(boardId) {
    let returnBoadr = fetch(
      config.URL_BOARDS + boardId + '/lists' + config.AUTH
    ).then(lists => {
      return lists.json();
    });
    returnBoadr.then(res => {
      this.setState({
        lists: res,
        selectedBoard: null
      });
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      lists: [],
      selectedBoard: nextProps.boardId
    };
  }

  render() {
    if (this.state.selectedBoard != null) {
      this.getLists(this.state.selectedBoard);
    }
    const listList = this.state.lists.map((list, index) => {
      return <ListsListItem key={list.id} list={list} />;
    });
    return <ListGroup className="col-md-10 list-group">{listList}</ListGroup>;
  }
}

export default Board;
