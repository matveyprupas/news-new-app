import React from 'react';
import PropTypes from 'prop-types';
import NewsPreview from '../components/NewPreview';
import NewsPage from '../components/NewsPage';
import { NavLink } from 'react-router-dom';
import { newsEvents } from '../events/events';

import './Page_Client.css';
import NewPreview from '../components/NewPreview';

class Page_Client extends React.PureComponent {
  
  static propTypes = {
    match: PropTypes.object,
    location: PropTypes.object,
  };

  state = {
    newsOpened: false,
  };

  openNew = (obj) => {
    // console.log(obj);
    // this.setState({});
  };

  componentDidMount = () => {
    newsEvents.addListener('openNew', this.openNew);
  };

  componentWillUnmount = () => {
    newsEvents.removeListener('openNew', this.openNew);
  };

  render() {

    let newId=parseInt(this.props.match.params.newid);

    // let clientData=appData.clientsArr.find( c => c.id==clientId );
    let article = this.props.location.state.article;
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

    // console.log(article);

    return (
      <div>
        <NavLink to="/news-new-app" exact className="PageLink" activeClassName="ActivePageLink">
          <h1>CoolestNews</h1>
        </NavLink>
        <div className="page-article">
          <div className="page-article__img-wrap">
            <img src={article.urlToImage}/>
            <h2>{article.title}</h2>
          </div>
          <div className="page-article__text-wrap">
            <p>{article.content}</p>
            <div className="page-article__date-source">
              <span>{publishedAtMonth + " " + publishedAt.getDate() + ", " + publishedAt.getFullYear()}</span>
              <span>{article.author}</span>
              <span>{article.source.name}</span>
            </div>
            <p>{}</p>
          </div>
        </div>
      </div>
    );
    
  }

}
    
export default Page_Client;
    