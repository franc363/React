import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Trello from 'trello';
import { config } from './config/config';

import Board from './components/board';
import BoardList from './components/boardList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      selectedBoard: null,
      render: false
    };

    let returned_boards = fetch(
      config.URL_MEMBER + config.MEMBER_ID + '/boards' + config.AUTH
    ).then(res => {
      return res.json();
    });
    returned_boards.then(res => {
      this.setState({
        boards: res,
        selectedBoard: null
      });
    });
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(board) {
    this.setState({ render: true, selectedBoard: board.id });
  }
  render() {
    return (
      <div>
        <Nav bsStyle="tabs">
          <NavItem eventKey="1">Boards</NavItem>
        </Nav>
        <BoardList boards={this.state.boards} handleClick={this.handleClick} />
        {this.state.render && <Board boardId={this.state.selectedBoard} />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
