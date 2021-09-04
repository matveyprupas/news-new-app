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
    console.log(obj);
    // this.setState({});
  };

  componentDidMount = () => {
    newsEvents.addListener('openNew', this.openNew);
  };

  componentWillUnmount = () => {
    newsEvents.removeListener('openNew', this.openNew);
  };

  render() {

    // раз написано <Route path="/client/:clid" component={Page_Client} />
    // значит Page_Client получит то что в УРЛе после /client/ под именем props.match.params.clid в виде строки
    let newId=parseInt(this.props.match.params.newid);

    // let clientData=appData.clientsArr.find( c => c.id==clientId );
    let article = this.props.location.state.article;
    console.log(article);

    return (
      <div>
        <NavLink to="/news-new-app" exact className="PageLink" activeClassName="ActivePageLink">
          <h1>CoolestNews</h1>
        </NavLink>
        <h2>{article.title}</h2>
      </div>
    );
    
  }

}
    
export default Page_Client;
    