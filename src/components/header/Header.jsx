import React, { useState } from 'react';
import '../../scss/Header.scss';
import { Affix } from 'antd';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const Header = () => {
  const [current, setCurrent] = useState('home');

  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className="header">
      <Router>
        <Affix offsetTop={0} >
          <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
            <Menu.Item key="home" icon={<MailOutlined />}>
             <Link to='/'>Trang chủ</Link>
            </Menu.Item>
            <Menu.Item key="newca" icon={<AppstoreOutlined />}>
              Về NewCA
            </Menu.Item>
            <SubMenu key="chukyso" icon={<SettingOutlined />} title="Chữ ký số">
              <Menu.ItemGroup title="Tin tức">
                <Menu.Item key="setting:1">Tin tức</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="dichvu">
              DỊch vụ newCA++
            </Menu.Item>
            <Menu.Item key="support">
              Hỗ trợ
            </Menu.Item>
            <Menu.Item key="download">
              Download
            </Menu.Item>
            <Menu.Item key="mynewca">
              My NewCA
            </Menu.Item>
            <Menu.Item key="account">
              <Link to='/account'>Account</Link>
            </Menu.Item>
            <Menu.Item key="cart">
              <Link to='/cart'>giỏ hàng</Link>
            </Menu.Item>
          </Menu>
        </Affix>
      </Router>
    </div>
  );
}

export default Header
