import React from 'react';
import { NavLink } from 'react-router-dom';

import './Page_404.css';

class Page_404 extends React.PureComponent {
          
  render() {

    return (
      <div className="page404">
        <h1>We are really sorry, but this page not found. You can try to find in somewhere else. </h1>
        <NavLink to="/news-new-app" exact className="PageLink" activeClassName="ActivePageLink">
          <h2>On home page, for example :)</h2>
        </NavLink>
      </div>
    );
    
  }

}
    
export default Page_404;
    