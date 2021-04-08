import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Input, Select } from 'antd'
import '../../../../scss/EditAccount.scss';
import userApi from '../../../../api/userApi'
import Button from '@material-ui/core/Button';
import MyTitle from './Title';

const { Option } = Select;
const EditAccount = () => {
  const [form] = Form.useForm();
  const [user, setUser] = useState(null)

  const fetchApi = async () => {
    const params = {
      email: "mr.tiennv@gmail.com"
    }
    const response = await userApi.getUsers(params)
    setUser(response)
  }

  useEffect(() => {
    fetchApi()
  },[])

  const setGender = value => {
    setUser({
      ...user,
      gender: value
    })
  }

  const setProvinces = value => {
    setUser({
      ...user,
      province: value
    })
  }

  const setDistrict = value => {
    setUser({
      ...user,
      district: value
    })
  }

  const setWard = value => {
    setUser({
      ...user,
      ward: value
    })
  }

  const onchangeUser = event => {
    setUser({
      ...user,
      [event.target.id]: event.target.value
    })
  }

  // const updateUser = () => {
  //   const params = {
  //     email: "mr.tiennv@gmail.com"
  //   }
  //   userApi.editUser(params,user)
  // }
  const deleteAvatar = () => {}

  return (
    <div className="editAccount">
      <MyTitle />
      {user && (
        <Row>
          <Col span={16} className="editAccount__left">
            <Form
              form={form}
              initialValues={{
                remember: true
              }}
            >
              <Form.Item>
                <label>Email: {user.email}</label>
              </Form.Item>

              <label>Họ tên:</label>
              <Form.Item
                name="name"
                onChange={onchangeUser}
                rules={[{ required: true, message: 'Please input your username!' },
                  // ({ getFieldValue }) => ({
                  //   validator(rule, value = "") {
                  //     const re = /^[a-zA-Z]+$/;
                  //     if (value.length > 0 && !re.test(value)) {
                  //       return Promise.reject("Nhập lại họ tên");
                  //     } else {
                  //       return Promise.resolve();
                  //     }
                  //   }
                  // })
                ]}
              >
                <Input defaultValue={user.name}/>
              </Form.Item>

              <label>Giới tính</label>
              <Form.Item
                name="gender"
              >
                <Select
                  placeholder="Select gender"
                  onChange={setGender}
                  defaultValue={user.gender}
                >
                  <Option value="1">Nam</Option>
                  <Option value="0">Nữ</Option>
                </Select>
              </Form.Item>

              <label>Sinh nhật</label>
              <Form.Item
                name="birthday"
                onChange={onchangeUser}
              >
                <Input type="date" defaultValue={user.birthday} />
              </Form.Item>

              <label>Số điện thoại:</label>
              <Form.Item
                name="phone"
                onChange={onchangeUser}
                rules={[{ required: true, message: 'Please input your phone!' },
                  ({ getFieldValue }) => ({
                    validator(rule, value = "") {
                      const re = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                      if (value.length > 0 && !re.test(value)) {
                        return Promise.reject("số điện thoại chưa đúng định dạng");
                      } else {
                        return Promise.resolve();
                      }
                    }
                  })
                ]}
              >
                <Input defaultValue={user.phone}/>
              </Form.Item>

              <label>Tỉnh / thành phố</label>
              <Form.Item
                name="province"
              >
                <Select
                  placeholder="chọn tỉnh / thành phố"
                  onChange={setProvinces}
                  defaultValue={user.province}
                >
                  <Option value="da nang">Đà nẵng</Option>
                  <Option value="hai phong">hải Phòng</Option>
                  <Option value="hai duong">hải Dương</Option>
                  <Option value="quang ning">Quảng Ninh</Option>
                  <Option value="ca mau">Cà mau</Option>
                  <Option value="Ha Noi">Hà Nội</Option>
                  <Option value="7">cần thơ</Option>
                </Select>
              </Form.Item>

              <label>Quận / Huyện</label>
              <Form.Item
                name="district"
              >
                <Select
                  placeholder="chọn quận / huyện"
                  onChange={setDistrict}
                  defaultValue={user.district}
                >
                  <Option value="1">ha nội</Option>
                  <Option value="2">Đà nẵng</Option>
                  <Option value="3">hải Phòng</Option>
                  <Option value="Ba Dinh">Ba Đình</Option>
                  <Option value="5">Quảng Ninh</Option>
                  <Option value="6">Cà mau</Option>
                  <Option value="7">cần thơ</Option>
                </Select>
              </Form.Item>

              <label>Phường / Xã</label>
              <Form.Item
                name="ward"
              >
                <Select
                  placeholder="chọn phường / xã"
                  onChange={setWard}
                  defaultValue={user.ward}
                >
                  <Option value="Thanh Cong">Thành Công</Option>
                  <Option value="2">Đà nẵng</Option>
                  <Option value="3">hải Phòng</Option>
                  <Option value="4">hải Dương</Option>
                  <Option value="5">Quảng Ninh</Option>
                  <Option value="6">Cà mau</Option>
                  <Option value="7">cần thơ</Option>
                </Select>
              </Form.Item>

              <label>Địa chỉ:</label>
              <Form.Item
                name="address"
                onChange={onchangeUser}
                rules={[{ required: true, message: 'Please input your address!' }]}
              >
                <Input defaultValue={user.address}/>
              </Form.Item>
              <Form.Item  className="editAccount__left__groupButton">
                <Button className="btnSubmit" variant="contained" color="primary" >
                  Cập nhật
                </Button>
              </Form.Item>
            </Form>
          </Col>

          <Col span={8} className="editAccount__right">
            <div className="editAccount__right--avatar">
              <img src={user.profile_photo_path} alt="avatar"/>
            </div>
            <div className="editAccount__right--btn">
              <Button htmltype="submit" variant="contained" color="secondary" onClick={deleteAvatar}> xoá ảnh đại diện </Button>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default EditAccount;
