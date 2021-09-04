import React from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_Home from './Page_Home';
import Page_Client from './Page_Client';

class PagesRouter extends React.Component {
          
  render() {
    
    return (
      <div>
        <Route path="/news-new-app" exact component={Page_Home} />
        {/* <Route path="/company" component={Page_Company} />
        <Route path="/clients" component={Page_Clients} /> */}
        <Route path="/news-new-app/new/:newid" component={Page_Client} />
      </div>
    );
    
  }

}
    
export default PagesRouter;
    