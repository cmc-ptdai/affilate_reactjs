import React, { useEffect, useState } from 'react'
import { Card, Button, Modal, Form, Input } from 'antd';
import '../../../../../scss/affiliateProfile.scss'
import affiliateApi from '../../../../../api/affiliateApi'

const Profile = () => {
  const [affiliate, setAffiliate] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchAffiliate = async () => {
    const params = {
      email: "mr.tiennv@gmail.com",
      bank_name: "TCB",
      bank_branch: "CN Pham Hung",
      bank_account: "Nguyen Van Tien",
      bank_no: "603127966666"
    }
    const response = await affiliateApi.getAffiliate(params)
    setAffiliate(response);
  }

  useEffect(() => {
    fetchAffiliate();
    return;
  }, [])

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log(affiliate);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const changeFormEdit = event => {
    setAffiliate({
      ...affiliate,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="profileBank">
      <Card
        title="Thông Tin Ngân Hàng "
        extra={<Button type="primary"
        style={{ width: 100, borderRadius: 10 }}
        onClick={showModal}
      >sửa</Button>} >
        {affiliate && (
          <div className="profileBank__content">
            <p><i className="fas fa-university"></i> Ngân hàng: <span>{affiliate.bank_name}</span></p>
            <p><i className="fas fa-code-branch"></i> Chi nhánh: <span>{affiliate.bank_branch}</span></p>
            <p><i className="fas fa-user"></i> Chủ tài khoản: <span>{affiliate.bank_account}</span></p>
            <p><i className="fas fa-credit-card"></i> Số tài khoản: <span>{affiliate.bank_no}</span></p>
          </div>
        )}
      </Card>

      <Modal title="Sửa thông tin ngân hàng" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="profileBank__content__fromEdit">
          {affiliate && (
            <Form>
              <Form.Item
                name="bank_name"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <label><i className="fas fa-university"></i> Tên ngân hàng</label>
                <Input name="bank_name" onChange={changeFormEdit} value={affiliate.bank_name}/>
              </Form.Item>

              <Form.Item
                name="bank_branch"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <label><i className="fas fa-code-branch"></i> Chi nhánh </label>
                <Input name="bank_branch" onChange={changeFormEdit} value={affiliate.bank_branch}/>
              </Form.Item>

              <Form.Item
                name="bank_account"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <label><i className="fas fa-user"></i> chủ tài khoản </label>
                <Input name="bank_account" onChange={changeFormEdit} value={affiliate.bank_account}/>
              </Form.Item>

              <Form.Item
                name="bank_no"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <label><i className="fas fa-credit-card"></i> số tài khoản </label>
                <Input name="bank_no" onChange={changeFormEdit} value={affiliate.bank_no}/>
              </Form.Item>
            </Form>
          )}
        </div>
      </Modal>
    </div>
  )
}

export default Profile;
