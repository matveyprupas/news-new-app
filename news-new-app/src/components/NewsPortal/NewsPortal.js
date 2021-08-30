import React from 'react';
import PropTypes from 'prop-types';
import { newsEvents } from '../../events/events';

import './NewsPortal.css';

class NewsPortal extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    choosed: PropTypes.bool.isRequired,
  };

  state = {
    name: this.props.name,
    choosed: this.props.choosed,
  };

  addChoosedClass = () => {
    this.setState( {choosed: true} );
  };

  showNews = () => {
    let url = 'https://newsapi.org/v2/everything?q=Apple&from=2021-08-30&sortBy=popularity&apiKey=71863802a400467a86c161d7ef1ba3ad';

    var req = new Request(url);

    fetch(req)
      .then(function(response) {
        return response.json();
      })
      .then(function(obj) {
        // console.log(obj);
        newsEvents.emit('newsLoaded', obj);
      });

    this.addChoosedClass();
  };

  render() {

    console.log("NewsPortal render");
    // console.log(this.props);

    return (
      <span className={this.state.choosed ? "news-portal news-portal_choosed" : "news-portal"} onClick={this.showNews}>{this.state.name}</span>
    );

  }

}

export default NewsPortal;
