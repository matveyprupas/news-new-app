import React from 'react';
import PropTypes from 'prop-types';
import { newsEvents } from '../../events/events';
import { Link } from 'react-router-dom';

import './NewPreview.css';

class NewsPreview extends React.PureComponent {

  static propTypes = {
    article: PropTypes.object.isRequired,
  };

  state = {
  };

  openNew = () => {
    newsEvents.emit('openNew', this.props.article);
  };


  render() {

    // console.log("NewsPreview render");
    let article = this.props.article;
    let publishedAt = new Date (article.publishedAt);
    let publishedAtMonth = "";

    switch (publishedAt.getMonth() + 1) {
      case 1:
        publishedAtMonth = "January";
        break;
      case 2:
        publishedAtMonth = "February";
        break;
      case 3:
        publishedAtMonth = "March";
        break;
      case 4:
        publishedAtMonth = "April";
        break;
      case 5:
        publishedAtMonth = "May";
        break;
      case 6:
        publishedAtMonth = "June";
        break;
      case 7:
        publishedAtMonth = "July";
        break;
      case 8:
        publishedAtMonth = "August";
        break;
      case 9:
        publishedAtMonth = "September";
        break;
      case 10:
        publishedAtMonth = "October";
        break;
      case 11:
        publishedAtMonth = "November";
        break;
      case 12:
        publishedAtMonth = "December";
        break;
    }
    
    let linkID = (article.source.id + article.author + article.publishedAt);

    return (
        <div className ="new-preview">
          <div className="new-preview__logo">
            <div className="new-preview__logo_hover">
              <div className="new-preview__source-info">
                <span>{article.source.name}</span>
                <span>{publishedAtMonth + " " + publishedAt.getDate() + ", " + publishedAt.getFullYear()}</span>
              </div>
            </div>
            <img src={article.urlToImage}/>
          </div>
          <div className="new-preview__text">
            <h2>{article.title}</h2>
            <div className="new-preview__underline-header"></div>
            <p>{article.description}</p>
            <Link 
              to={{
                pathname: "/news-new-app/new/"+linkID, 
                state: {article: article}
              }} className="PageLink" activeclassname="ActivePageLink">
              <span>Read More</span>
            </Link>
            
          </div>
        </div>
    );

  }

}

export default NewsPreview;
