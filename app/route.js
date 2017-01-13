import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/Application';
import Welcome from './components/Welcome';
import Listings from './components/Listings/Listings';
import ListItem from './components/Listings/ListItem';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Listings} />
    <Route path="/welcome" component={Welcome}/>
    <Route path="/lisitings" component={Listings}>
      <Route path="/:id" component={ListItem}/>
    </Route>
  </Route>);



//   <Route path="/:userId/favorites" component={Listings}>
//     <Route path="/:id" component={ListItem}/>
//   </Route>
//   <Route path="/:userId/my/listings" component={Listings}>
//     <Route path="/:id" component={ListItem}/>
//     <Route path="/edit/:id" component={EditListItem}/>
//   </Route>
//   <Route path="/:userId/messages" component={Messages}>
//     <Route path="/:id" component={Message}/>
//   </Route>
//   <Route path="/:userId/profile" component={requireAuth(Profile)}>
//     <Route path="/:id" component={EditUser}/>
//   </Route>
//   <Route path="/signin" component={Signin} />
//   <Route path="/signout" component={Signout}/>
//   <Route path="/signup" component={Signup}/>
// </Route>
