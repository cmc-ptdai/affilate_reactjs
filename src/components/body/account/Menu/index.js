import React from 'react';
import '../../../../scss/menu.scss';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import {
  AppstoreOutlined,
  DesktopOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const MyMenu = ({url}) => {

  console.log(url);

  return (
    <div className="myMenu">
      <Menu
          mode="inline"
          theme="light"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Thông tin tài khoản">
            <Menu.Item key="5"><Link to={`${url}/editAccount`}>Sửa thông tin tài khoản</Link></Menu.Item>
            <Menu.Item key="6"><Link to={`${url}/editPassword`}>Thay đồi mật khẩu</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Thông Tin mua sắm">
            <Menu.Item key="9"><Link to={`${url}/purchaseOder`}>Đơn hàng đã mua</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<DesktopOutlined />}  title="Tiếp thị liên kết">
            <Menu.Item key="11"><Link to={`${url}/affiliate`}>Tài khoản affiliate</Link></Menu.Item>
            <Menu.Item key="12">Cấu hình affiliate</Menu.Item>
          </SubMenu>
        </Menu>
    </div>
  )
}

export default MyMenu;
