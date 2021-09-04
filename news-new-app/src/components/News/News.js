import React from 'react';
import PropTypes from 'prop-types';
import NewsPortal from '../NewsPortal';
import NewPreview from '../NewPreview';
import urlArray from '../../source/urlArray.json';
import { NavLink } from 'react-router-dom';

import { newsEvents } from '../../events/events';

import './News.css';

class News extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  state = {
    newsLoaded: undefined,
    articles: undefined,
    choosedPortalId: 0,
  };

  showNews = (newsLoaded) => {

    // console.log(newsLoaded.articles);

    let stateNewsLoaded = newsLoaded.articles.map ( (el, i) => {
      return <NewPreview key = {i} article = {el}></NewPreview>
    } );
    this.setState( {
      newsLoaded: newsLoaded,
      articles: stateNewsLoaded,
      sortText: '',
    });
  };
  
  setSearchText = (e) => {
    // console.log(e.target.value);
    this.setState({sortText: e.target.value})
  }

  sortNews = (e) => {
    e.preventDefault();
    let newsSorted = this.state.newsLoaded.articles.filter(el => el.title.toLowerCase().includes(this.state.sortText));

    let stateNewsSorted = newsSorted.map ( (el, i) => {
      return <NewPreview key = {i} article = {el}></NewPreview>
    } );
    this.setState( {
      articles: stateNewsSorted,
    });
  }

  componentDidMount = () => {
    newsEvents.addListener('newsLoaded', this.showNews);
  };

  componentWillUnmount = () => {
    newsEvents.removeListener('newsLoaded', this.showNews);
  };

  setChoosedPortalId = (id) => {
    this.setState( {choosedPortalId: id} )
  };

  render() {

    // console.log("News render");
    let newsPortalsJSX = urlArray.sources.map( el => {
      return <NewsPortal key = {el.id} id = {el.id} choosed = {this.state.choosedPortalId === el.id ? true : false} name = {el.name} url = {el.url} cbSetChoosedPortalId = {this.setChoosedPortalId}></NewsPortal>
    } );
    // console.log(newsPortalsJSX);

    return (
      <div className='news'>
        <NavLink to="/news-new-app" exact className="PageLink" activeClassName="ActivePageLink">
          <h1>CoolestNews</h1>
        </NavLink>
        <div className="news__content">
          <div className="news__subheader">
            {this.props.name}
          </div>
          <div className = "news__slider">
            {newsPortalsJSX}
          </div>
          <div className = "news__search">
            <form>
              <input type="text" placeholder="Title" onBlur={this.setSearchText}/>
              <input type="submit" value="Search" onClick={this.sortNews}/>
            </form>
          </div>
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
