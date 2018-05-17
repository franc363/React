import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from './card';
import { config } from '../config/config';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      lastCard: this.props.lastCard
    };
    this.getCards = this.getCards.bind(this);
    this.getCards(this.props.list);
  }

  getCards(listId) {
    let returnCards = fetch(
      config.URL_LISTS + listId + '/cards' + config.AUTH
    ).then(lists => {
      return lists.json();
    });
    returnCards.then(res => {
      this.setState({
        cards: res
      });
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.lastCard !== prevState.lastCard) {
      return {
        lastCard: nextProps.lastCard
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lastCard !== this.state.lastCard) {
      this.getCards(prevProps.list);
    }
  }

  render() {
    const cards = this.state.cards.map(card => {
      return <Card key={card.id} card={card} />;
    });
    return <ListGroup className="col-md-10 list-group">{cards}</ListGroup>;
  }
}

export default CardList;
