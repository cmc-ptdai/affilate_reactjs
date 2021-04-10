import React  from 'react';
import { Form, Input, Button } from 'antd';
import '../../../../scss/EditPassword.scss';
import MyTitle from './Title';

const EditPassword = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <MyTitle title="Thay đổi mật khẩu"/>
      <div className="editPassword">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="Password"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <label>Mật Khẩu: </label>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="newPassword"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <label>Nhập lại mật khẩu: </label>
            <Input.Password />
          </Form.Item>

          <Form.Item className="editPassword__submit">
            <Button type="primary" htmlType="submit">
                Xác nhận
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default EditPassword;
