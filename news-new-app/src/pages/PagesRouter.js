import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Page_Home from './Page_Home';
import Page_Client from './Page_Client';
import Page_404 from './Page_404';

class PagesRouter extends React.Component {
          
  render() {
    
    return (
      <div>
        <Switch>
          <Route path="/news-new-app" exact component={Page_Home}/>
          <Route path="/news-new-app/new/:newid" component={Page_Client}/>
          <Route path="*" component={Page_404} />
        </Switch>



        
        {/* <Route path="/news-new-app" exact component={Page_Home} /> */}
        {/* <Route path="/404" exact component={Page_404} /> */}
        {/* <Route path="/company" component={Page_Company} />
        <Route path="/clients" component={Page_Clients} /> */}
        {/* <Route path="/news-new-app/new/:newid" component={Page_Client} /> */}
      </div>
    );
    
  }

}
    
export default PagesRouter;
    