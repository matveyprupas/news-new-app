import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Page_Client.css';

class Page_Client extends React.PureComponent {
  
  static propTypes = {
    match: PropTypes.object,
  };

  render() {

    // раз написано <Route path="/client/:clid" component={Page_Client} />
    // значит Page_Client получит то что в УРЛе после /client/ под именем props.match.params.clid в виде строки
    // let clientId=parseInt(this.props.match.params.clid);

    // let clientData=appData.clientsArr.find( c => c.id==clientId );

    return (
      <div>
        <NavLink to="/news-new-app" exact className="PageLink" activeClassName="ActivePageLink">
          <h1>CoolestNews</h1>
        </NavLink>
        Hello
      </div>
    );
    
  }

}
    
export default Page_Client;
    