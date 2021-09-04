import React from 'react';
import PropTypes from 'prop-types';
import { newsEvents } from '../../events/events';

import './NewsPortal.css';

class NewsPortal extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    choosed: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    cbSetChoosedPortalId: PropTypes.func.isRequired,
  };

  state = {
    name: this.props.name,
    choosed: this.props.choosed,
  };

  showNews = () => {
    var req = new Request(this.props.url);

    fetch(req)
      .then(function(response) {
        return response.json();
      })
      .then(function(obj) {
        newsEvents.emit('newsLoaded', obj);
      });

    this.props.cbSetChoosedPortalId(this.props.id);
  };

  render() {

    // console.log("NewsPortal render");
    // console.log(this.props);

    return (
      <span className={this.props.choosed ? "news-portal news-portal_choosed" : "news-portal"} onClick={this.showNews}>{this.state.name}</span>
    );

  }

}

export default NewsPortal;
