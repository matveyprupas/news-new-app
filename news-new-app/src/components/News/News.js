import React from 'react';
import PropTypes from 'prop-types';
import NewsPortal from '../NewsPortal';
import NewPreview from '../NewPreview';

import { newsEvents } from '../../events/events';

import './News.css';

class News extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  state = {
    newsLoaded: undefined,
    articles: undefined,
  };

  showNews = (newsLoaded) => {
    console.log(newsLoaded.articles);
    let stateNewsLoaded = newsLoaded.articles.map ( (el, i) => {
      return <NewPreview key = {i} article = {el}></NewPreview>
    } );
    this.setState( {
      newsLoaded: newsLoaded,
      articles: stateNewsLoaded,
    }, () => console.log(this.state) )
  };

  componentDidMount = () => {
    newsEvents.addListener('newsLoaded', this.showNews);
  };

  componentWillUnmount = () => {
    newsEvents.removeListener('newsLoaded', this.showNews);
  };

  render() {

    console.log("News render");

    return (
      <div className='news'>
        <h1>CoolestNews</h1>
        <div className="news__subheader">
          {this.props.name}
        </div>
        <div className = "news__slider">
          <NewsPortal choosed = {false} name = "Onliner.BY"></NewsPortal>
        </div>
        {
        this.state.articles || 
        <h2 className='news__without-news'>There are no articles matching tour request.</h2>
        }
        <span className='news__footer'>© Copyright <a href='https://newsapi.org/' target="_blank" rel="noreferrer">News API</a></span>
      </div>
    );

  }

}

export default News;
