import React from 'react';
import '../../../../scss/content.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import routerAccount from '../routerAccount';

const Content = () => {
  return (
    <div className="content">
      <Switch>
        {
          routerAccount.map((item, index)=> {
            const {Component} = item
            return (
              <Route path={item.path} exact={item.exact} key={index}>
                <Component/>
              </Route>
            )
          })
        }
      </Switch>
    </div>
  );
}

export default Content;
