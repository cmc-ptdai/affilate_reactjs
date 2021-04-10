import React from 'react';
import 'antd/dist/antd.css';
import MyMenu from './Menu/index'
import {Row, Col} from 'antd'
import BodyContent from './content/index'
import {
  BrowserRouter as Router ,
  useParams,
  useRouteMatch,
  Route
} from 'react-router-dom';

const Body = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="bodyAccount">
      <Router>
        <Row>
          <Col span={6}>
            <MyMenu url = {url}/>
          </Col>
          <Col span={18} >
            <BodyContent path={path}/>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default Body;
