import React, { Component } from 'react';
import { Button, ListGroupItem, FormControl } from 'react-bootstrap';
import { config } from '../config/config';
import CardList from './cardList';
import { Trello } from 'trello';

class ListsListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      render: false,
      inputValue: '',
      lastCard: ''
    };
  }

  buttonNew() {
    this.setState({ render: true });
  }

  saveCard() {
    const resp = fetch(
      config.getSaveCardUrl(this.state.list.id, this.input.value),
      {
        method: 'post'
      }
    ).then(function(response) {
      return response.json();
    });
    resp.then(res => {
      this.setState({
        render: false,
        lastCard: res.id
      });
    });
  }

  render() {
    return (
      <div>
        <ListGroupItem className="col-md-3 list-group-item">
          <div>{this.state.list.name}</div>
          <div>
            <CardList
              list={this.state.list.id}
              lastCard={this.state.lastCard}
            />
            {!this.state.render && (
              <Button bsStyle="primary" onClick={() => this.buttonNew()}>
                NEW
              </Button>
            )}
            {this.state.render && (
              <Button bsStyle="success" onClick={() => this.saveCard()}>
                GUARDAR
              </Button>
            )}
            {this.state.render && (
              <input type="text" ref={input => (this.input = input)} />
            )}
          </div>
        </ListGroupItem>
      </div>
    );
  }
}

export default ListsListItem;
