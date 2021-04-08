import React, { useState, useEffect } from 'react';
import { Input, Button, Radio, Row, Col } from 'antd';
import '../../../../../scss/editLink.scss';
import userApi from '../../../../../api/userApi';


const optionsSelection = [
  { label: 'email', value: 'email' },
  { label: 'số điện thoại', value: 'phone' },
  { label: 'khác', value: 'khac'},
];
const EditLink = () => {
  const initialLink = 'http://test.newca.vn/affiliate/'
  const [user, setUser] = useState(null)
  const [valueSelect, setValueSelect] = useState('')
  const [inputSelect, setInputSelect] = useState('')
  const [valueLink, setValueLink] = useState('')

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

  const onChangeSelection = (e) => {
    setValueSelect(e.target.value)
    if (e.target.value === 'email') {
      setValueLink(initialLink + user.email)
    }
    if (e.target.value === 'phone') {
      setValueLink(initialLink + user.phone)
    }
  }

  const onChangeInputSelect = e => {
    setInputSelect(e.target.value)
  }

  const saveEdit = () => {
    setValueLink(initialLink + inputSelect)
    setValueSelect('')
  }

  return (
    <>
      <div className="editLink">
        <div className="editLink__link">
          <Input value={valueLink} disabled />
          <Button>copy link</Button>
        </div>
        <div className="editLink__title">Chọn định dạng cần thay đổi link</div>
        <div className="editLink__groupSelection">
          <Radio.Group
            options={optionsSelection}
            onChange={onChangeSelection}
            value={valueSelect}
            optionType="button"
            buttonStyle="solid"
          />
        </div>
        <div className="editLink__contentSelect">
          {
            user && <div className="editLink__contentSelect--groupInput" style={{display: valueSelect === 'khac' ? 'block' : 'none'}}>
              <Input onChange={onChangeInputSelect} placeholder= "Nhập tên link bạn muồn thay đổi"/>
              <Button onClick={saveEdit} type='primary' danger>lưu thay đổi</Button>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default EditLink
