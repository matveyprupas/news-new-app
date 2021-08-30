import React from 'react';
import PropTypes from 'prop-types';
import { newsEvents } from '../../events/events';

import './NewPreview.css';

class NewsPreview extends React.PureComponent {

  static propTypes = {
    article: PropTypes.object.isRequired,
  };

  state = {
  };


  render() {

    console.log("NewsPreview render");
    // console.log(this.props);

    return (
        <div className ="new-preview">
            <h2>{this.props.article.title}</h2>
        </div>
    );

  }

}

export default NewsPreview;
