import React from 'react';
import 'antd/dist/antd.css';
import MyMenu from './Menu/index'
import {Row, Col} from 'antd'
import '../../../scss/body.scss'
import BodyContent from './content/index'
import { BrowserRouter as Router } from 'react-router-dom';

const Body = () => {
  return (
    <div className="MyBody">
      <Router>
        <Row>
          <Col span={6}>
            <MyMenu/>
          </Col>
          <Col span={18} >
            <BodyContent/>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default Body;
