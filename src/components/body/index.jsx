import React from 'react';
import '../../scss/body.scss'
import PageLoading from './FullpageLoading';
import router from '../../router';
import { Switch, Route } from "react-router-dom"
import Home from './home/index';
import Cart from './cart/index';
import Account from './account/index';
import Affiliate from './account/content/affiliate/showAffiliate'

const Body = () => {
  return (
    <div className="myBody">
      {
        router.map((item, index)=> {
          const {Component} = item
          return (
            <Route path={item.path} exact={item.exact} key={index}>
              <Component/>
            </Route>
          )
        })
      }
      <PageLoading/>
    </div>
  )
}

export default Body
